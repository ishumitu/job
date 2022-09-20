const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/usermodel");
//git hub

// @desc Register new user
// @route  post /api/user
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add  all fields");
  }

  //check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.json({ message: "Register User" });

  if (User) {
    res.status(201).json({
      _id: User.id,
      name: User.name,
      email: User.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate auser
// @route  post /api/user/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc Get user data
// @route  Get /api/users/me
// @access public

const getme = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getme,
};
