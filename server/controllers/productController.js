import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      _type,
      name,
      price,
      discountedPercentage,
      category,
      brand,
      badge,
      isAvailable,
      offer,
      description,
      tags,
    } = req.body;

    // console.log(req.body);
    // console.log(req.files);

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

  
    if (!name) {
      return res.json({ success: false, message: "Product Name is required" });
    }

    if (!price) {
      return res.json({ success: false, message: "Product Price is required" });
    }

    if (!category) {
      return res.json({
        success: false,
        message: "Product Category is required",
      });
    }

    if (!description) {
      return res.json({
        success: false,
        message: "Product Description is required",
      });
    }

    let images = [image1, image2].filter((item) => item !== undefined);

    if (images.length === 0) {
      return res.json({
        success: false,
        message: "Product Image is required",
      });
    }

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    let parsedTags;
    try {
      parsedTags = JSON.parse(tags);
    } catch (error) {
      parsedTags = tags ? tags.split(",").map((tag) => tag.trim()) : [];
    }

    const productData = {
      _type: _type ? _type : "",
      name,
      price: Number(price),
      discountedPercentage: Number(discountedPercentage),
      category,
      brand: brand ? brand : "",
      badge: badge === "true" ? true : false,
      isAvailable: isAvailable === "true" ? true : false,
      offer: offer === "true" ? true : false,
      description,
      images: imagesUrl,
      tags: tags ? parsedTags : [],
    };

    const product = await new productModel(productData);
    product.save();

    res.send({
      success: true,
      message: `Product ${name} added and  saved to DB successfully`,
    });
  } catch (error) {
    console.log("Add product Error", error);
    return res.json({ success: false, message: error.message });
  }
};

import mongoose from "mongoose";

const removeProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    // Check if the provided _id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.json({
        success: false,
        message: "Invalid product ID format.",
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete(_id);

    if (!deletedProduct) {
      return res.json({
        success: false,
        message: "Product not found.",
      });
    }

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Remove product error:", error);
    return res.json({ success: false, message: error?.message });
  }
};


const listProduct = async (req, res) => {
  try {
    const total = await productModel.countDocuments({});
    const products = await productModel.find({}); //.populate("category").populate("brand");

    if (products.length > 0) {
      res.json({ success: true, total, products });
    } else {
      res.json({ success: false, message: "No products found" });
    }
  } catch (error) {
    console.log("Get products Error", error);
    return res.json({ success: false, message: error?.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { _id } = req.body;
    const product = await productModel.findById(_id);

    if (!product) {
      return res.json({
        success: false,
        message: "No product matched with this id",
      });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.log("Get single product Error", error);
    return res.json({ success: false, message: error?.message });
  }
};

export { addProduct, removeProduct, listProduct, singleProduct };
