const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");
const {protect} = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

router.post("/upload-image", upload.single("image"), (req, res) => {
  console.log("Request received at /upload-image");
  try {
    if (!req.file) {
      console.log("No file uploaded in request");
      return res.status(400).json({message: "No file uploaded"});
    }
    console.log("File upload completed:", {
      filename: req.file.filename,
      path: req.file.path,
    });
    const imageUrl = req.file.path;
    res.status(200).json({imageUrl});
  } catch (error) {
    console.error(
      "Error in upload-image endpoint:",
      error.message,
      error.stack
    );
    res.status(500).json({
      message: "Server error, please try again later",
      error: error.message,
    });
  }
});

module.exports = router;
