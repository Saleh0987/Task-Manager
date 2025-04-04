require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chalk = require("chalk"); // Add this for colored console output
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Database connection and middleware
connectDB();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the API developed by Mohamed Saleh");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(chalk.blue.bold("========================================="));
  console.log(chalk.green.bold("       API Server Initialized!          "));
  console.log(chalk.blue.bold("========================================="));
  console.log(chalk.yellow(`Developed by: Mohamed Saleh`));
  console.log(
    chalk.cyan(`Environment: ${process.env.NODE_ENV || "development"}`)
  );
  console.log(chalk.magenta(`Server running on port: ${PORT}`));
  console.log(chalk.blue.bold("========================================="));
});
