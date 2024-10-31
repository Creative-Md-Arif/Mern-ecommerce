import express from "express";
import {
  adminLogin,
  getUsers,
  removeUser,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin", adminLogin);
userRouter.post("/remove", removeUser);
userRouter.put("/update/:id", updateUser);
userRouter.get("/users", adminAuth, getUsers);

export default userRouter;
