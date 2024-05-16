import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/usermodel.js";
import jwt from "jsonwebtoken";

import crypto from "crypto";

const router = express.Router();

// Ideally, store this secret key in environment variables
const secretKey = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: true, message: "Unauthorized: No token provided" });
    }
    const decoded = await jwt.verify(token, secretKey);
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: true, message: "Unauthorized: Invalid token" });
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "Authorized" });
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ error: true, message: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    await newUser.save();
    return res.json({ status: true, message: "Record registered" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: true, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: true, message: "Incorrect email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: true, message: "Incorrect email or password" });
    }

    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.json({ status: true, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: true, message: "Internal server error" });
  }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ status: true, message: "Logged out successfully" });
});

export default router;
