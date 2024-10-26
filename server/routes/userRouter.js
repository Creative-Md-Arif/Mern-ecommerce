import express from "express";
import {
  adminLogin,
  getUsers,
  removeUser,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/admin", adminLogin);
userRouter.post("/remove", removeUser);
userRouter.put("/update/:id", updateUser);
userRouter.get("/users", getUsers);

export default userRouter;
