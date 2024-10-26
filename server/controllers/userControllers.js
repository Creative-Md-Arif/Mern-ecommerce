import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import validator from "validator";

const userLogin = async (req, res) => {};
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });

    // name validation  || request body verification

    if (!name) {
      return res.json({
        success: false,
        message: "Name is required",
      });
    }

    if (!email) {
      return res.json({
        success: false,
        message: "email is required",
      });
    }

    if (!password) {
      return res.json({
        success: false,
        message: "Pssword is required",
      });
    }

    // email validation

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    //  check if user already exists
    if (existingUser) {
      return res.json({
        success: false,
        message: "User Already Exists",
      });
    }
    // password validation
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }
    //  hashing user password

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    // Register new user

    const newUser = new userModel({
      name,
      email,
      password: encryptedPassword,
    });

    // Save user in database

    await newUser.save();

    res.json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log("User Register Error", error);
    res.json({ success: true, message: error?.message });
  }
};
const adminLogin = async (req, res) => {};
const removeUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const getUsers = async (req, res) => {
  res.send("Hello from users");
};

export {
  userLogin,
  userRegister,
  adminLogin,
  removeUser,
  updateUser,
  getUsers,
};
