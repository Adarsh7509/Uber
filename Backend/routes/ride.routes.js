const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const rideController = require('../controllers/ride.controller');
router.post(
  "/create",
  authMiddleware.authUser,
   
    body("pickup").isString().withMessage("Pickup location is required"),
      body("destination").isString().withMessage("Dropoff location is required"),
    body("vehicleType")
      .isIn(["car", "auto", "motorcycle"]).withMessage("Vehicle type must be one of: car, auto, motorcycle"),
rideController.createRide
  
);



module.exports = router