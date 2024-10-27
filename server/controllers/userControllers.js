import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

//  login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({
        success: false,
        message: "Email is required",
      });
    }
    const user = await userModel.findOne({ email });

    if (!password) {
      return res.json({
        success: false,
        message: "Password is required",
      });
    }

    // if user exist

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user);
      return res.json({
        success: true,
        token,
        message: "Login successful",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials please try again",
      });
    }
  } catch (error) {
    console.log("User Login Error", error);

    return res.json({
      success: false,
      message: error?.message,
    });
  }
};

//  register
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

// admin
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token, message: "Admin Login successful" });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials please try again",
      });
    }
  } catch (error) {
    console.log(" Admin Login Error", error);
    res.json({ success: true, message: error?.message });
  }
};

// remove

const removeUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "User deleted Successfully" });
  } catch (error) {
    console.log(" Removed user Error", error);
    res.json({ success: true, message: error?.message });
  }
};

// update
const updateUser = async (req, res) => {
  try {
    const { _id, name, email, password } = req.body;
    const user = await userModel.findById(_id);

    if (!user) {
      return res.json({
        success: false,
        message: "User does not Found",
      });
    }
    //  name
    if (name) user.name = name;
    //  email
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email address",
        });
      }
      user.email = email;
    }

    //  password
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password must be at least 8 characters long",
        });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    //  upadating the user

    await user.save();
    res.json({ success: true, message: "User Updated Successfully" });
  } catch (error) {
    console.log("Update user Error", error);
    res.json({ success: false, message: error?.message });
  }
};
const getUsers = async (req, res) => {

   try{
    const total = await userModel.countDocuments({})
    const users = await userModel.find({})

    res.json({ success: true, total, users });

   } catch (error) {
    console.log("Get users Error", error);
    res.json({ success: false, message: error?.message });
  }
};

export {
  userLogin,
  userRegister,
  adminLogin,
  removeUser,
  updateUser,
  getUsers,
};
