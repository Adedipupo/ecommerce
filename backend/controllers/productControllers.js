import asyncHandler from "express-async-handler";
import ProductModel from "../models/productsModel.js";


export const getAllProducts = asyncHandler(async (req, res) => {
    const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const count = await ProductModel.countDocuments({ ...keyword });
  const products = await ProductModel.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res
    .status(200)
    .json({ data: products, page, pages: Math.ceil(count / pageSize) });


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

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.params.id)
  if (product) {
    res.status(200).json({ message: 'Product successfully deleted'})
  } else {
    res.status(404)
    throw new Error('Product not found');
  }
})

export const createProduct = asyncHandler(async (req, res) => {
  const product = new ProductModel({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/alexa.jpg',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

export const updateProduct = asyncHandler(async (req, res) => {
  const {name,price,image,brand,category,countInStock,description} = req.body

  const product = await ProductModel.findById(req.params.id)
  if (product) {
    product.name = name
    product.price = price
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock
    product.description = description

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});

export const createProductReview = asyncHandler(async (req, res) => {
  const { rating,comment} =
    req.body;

  const product = await ProductModel.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString()
    )
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name, 
      rating: Number(rating),
      comment,
      user: req.user._id
    }
    product.reviews.push(review)
    product.numReviews = product.reviews.length
    
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
    
    await product.save()
    res.status(201).json({ message: 'Review added'})
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const getTopProduct = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({}).sort({rating: -1}).limit(3)
  res.json({data: products})
});