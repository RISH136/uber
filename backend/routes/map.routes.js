const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapcontroller=require('../controllers/map.controller');
const {query} = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,mapcontroller.getAddressCoordinates);

router.get('/getDistanceTime',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapcontroller.getDistanceTime
)    

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapcontroller.getAutoCompleteSuggestions
)

module.exports = router;