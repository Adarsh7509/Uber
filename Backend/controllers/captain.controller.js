const captainModel = require("../models/captain.model");
const captainServices = require("../services/captain.services");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  // Check if the captain already exists
  const existingCaptain = await captainModel.findOne({
    email,
  });
  if (existingCaptain) {
    return res.status(400).json({
      message: "Captain with this email already exists",
    });
  }
  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainServices.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = captain.generateAuthToken();
  return res.status(201).json({
    message: "Captain registered successfully",
    captain,
    token,
  });
};
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({
    message: "Captain logged in successfully",
    captain,
    token,
  });
};
module.exports.getAllCaptainprofile = async (req, res, next) => {
  res.status(200).json({
    message: "Captain profile",
    captain: req.captain,
  });
};
module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blackListTokenModel.create({ token });

  res.clearCookie("token");
  return res.status(200).json({
    message: "Captain logged out successfully",
  });
};
