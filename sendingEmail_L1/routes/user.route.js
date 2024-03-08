const express = require("express");

const UserModel = require("../model/user.model");
const sendOtp = require("../middleware/sendOtp.middleware");
const userRouter = express.Router();

userRouter.post("/signup", sendOtp, async (req, res) => {
  const { username, email, pass } = req.body;
  try {
    const user = new UserModel({ username, email, pass });
    await user.save();
    res.status(200).json({ msg: "user has been created" });
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = userRouter;
