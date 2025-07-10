const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}
async function getFare(pickUp,destination){
    if(!pickUp && !destination){
        throw new Error('PickUp and Destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickUp, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };

    console.log(distanceTime);

    const fare={
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    }
    console.log(fare);

    return fare;
}

module.exports.getFare=getFare;

module.exports.createRide=async (user, pickUp, destination, vehicleType) =>{
    if (!user || !pickUp || !destination || !vehicleType) {
        throw new Error('User, PickUp, Destination and Vehicle Type are required');
    }

    const fare = await getFare(pickUp, destination);

    console.log(fare);

    if (!fare[vehicleType]) {
        throw new Error('Invalid vehicle type');
    }

    const ride = new rideModel({
        user: user._id,
        pickup: pickUp,
        destination,
        fare: fare[vehicleType],
        otp: getOtp(4),
    });

    return ride;
}