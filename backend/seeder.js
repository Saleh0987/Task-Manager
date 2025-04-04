const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Task = require("./models/Task");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Task.deleteMany();
    await User.deleteMany();

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
