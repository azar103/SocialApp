const mongoose = require("mongoose");
const config = require("config");
const connectDB = async () => {
  const db = config.get("mongoURI");
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("Error on connection in MongoDB");
  }
};

module.exports = connectDB;
