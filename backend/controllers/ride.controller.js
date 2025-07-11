const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');
const  mapService = require('../services/maps.service');
const rideModel = require('../models/ride.model');
const { sendMessageToSocketId } = require('../socket');



module.exports.createRide=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const user=req.user;
    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide( user, pickup, destination, vehicleType);
        
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinates(pickup);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);

        ride.otp="";

        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');

        captainsInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: ride
            })
        })
        
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }

}

module.exports.getFare=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}