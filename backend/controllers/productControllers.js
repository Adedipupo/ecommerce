import asyncHandler from "express-async-handler";
import ProductModel from "../models/productsModel.js";


export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  res.status(200).json({ data: products });
});

export const getProduct = asyncHandler(async (req, res) => {
 const product = await ProductModel.findById(req.params.id);
 if (product) {
   res.status(200).json({ data: product });
 } else {
   res.status(404);
   throw new Error(`Product not Found`);
 }
})