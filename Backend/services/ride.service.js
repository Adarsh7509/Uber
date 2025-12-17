const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");
const crypto = require("crypto");



async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required to calculate fare");
  }

  const distance = await mapService.getDistanceAndTime(pickup, destination);

  const baseFare = {
    car: 50,
    auto: 30,
    motorcycle: 20,
  };

  const perKmRate = {
    car: 10,
    auto: 8,
    motorcycle: 5,
  };

  const fare = {
    car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car)+ (distanceTime.duration.value / 60) * 2, // Assuming 2 per minute for car
    auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + (distanceTime.duration.value / 60) * 1.5, // Assuming 1.5 per minute for auto
    motorcycle: baseFare.motorcycle + ((distanceTime.distance.value / 1000) * perKmRate.motorcycle) + (distanceTime.duration.value / 60) * 1, // Assuming 1 per minute for motorcycle

};

  return fare;
}

function getOtp(num) {
  function getOtp(num) {
    if (!num || num <= 0) {
      throw new Error("Number of digits must be a positive integer");
    }

    const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, "0");
    return otp;
  }
}

module.exports.createRide = async ({ pickup, destination, vehicleType }) => { 
  if ( !pickup || !destination || !vehicleType) {
    throw new Error("User ID, pickup, destination, and vehicleType are required");
    }
    const fare = await getFare(pickup, destination);

    const ride = new rideModel.create({
        user,
        pickup,
      destination,
        otp:getOtp(6),
        fare: fare[vehicleType],
        
        });
  return ride;
};
