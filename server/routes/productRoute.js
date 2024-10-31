import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  adminAuth,
  addProduct
);
productRouter.post("/remove", removeProduct);
productRouter.get("/list", listProduct);
productRouter.get("/single", singleProduct);

export default productRouter;
