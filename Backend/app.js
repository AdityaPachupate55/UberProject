// Import dependencies
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Connect to the database
const connectToDb = require("./db/db");
connectToDb();

// Import routes
const userRoutes = require("./routes/user.routes");
const captainRoutes = require('./routes/captain.routes');  // Corrected spelling here

// Define routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRoutes);
app.use('/captains', captainRoutes);  // Corrected spelling here

// Export the app
module.exports = app;
