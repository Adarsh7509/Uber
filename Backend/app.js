const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");

const connectToDb = require("./db/db");

const userRouts = require("./routes/user.routes");

const captainRouts = require("./routes/captain.routes");

const mapSRoutes = require("./routes/maps.routes");

const rideRoutes = require("./routes/ride.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/captains", captainRouts);
app.use("/maps", mapSRoutes);
app.use("/rides", rideRoutes);


app.get("/", (req, res) => {
  res.send("helloo");
});

app.use("/users", userRouts);

module.exports = app;
