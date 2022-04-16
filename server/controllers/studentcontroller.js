const { ProductMODEL } = require("../model/productModel.js");
const catchAsyncError = require("../middleware/catchAsyncError.js");
const ApiFeatures = require("../utils/features.js");

class StudentController {
  static createProduct = catchAsyncError(async (req, res) => {
    req.body.user = req.user.id;
    const create = await ProductMODEL.create(req.body);
    if (!create) {
      return res.status(400).json({
        success: false,
        message: "Couldn't created",
      });
    }
    res.status(201).json({
      success: true,
      create,
    });
  });

  static getProducts = catchAsyncError(async (req, res) => {
    const products = await ProductMODEL.find();

    if (!products) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      success: true,
      products,
    });
  });

  static getByCategory = catchAsyncError(async (req, res) => {
    const category = req.params.category;
    const product = await ProductMODEL.find({ category });

    if (!product) {
      res.status(404).json({
        success: false,
        message: "No product found with this category",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  });

  static getAllProducts = catchAsyncError(async (req, res) => {
    // const resultPerPage = 5;
    // const productCount = await ProductMODEL.countDocuments();
    const apiFeature = new ApiFeatures(ProductMODEL.find(), req.query).search();
    // .filter()
    // .pagination(resultPerPage);
    const products = await apiFeature.query;

    res.status(200).json({
      success: true,
      products,
    });
  });

  static getProductDetails = catchAsyncError(async (req, res) => {
    const ProductDetail = await ProductMODEL.findById(req.params.id);
    if (!ProductDetail) {
      return res.status(500).json({
        success: false,
        message: "Product no found",
      });
    } else
      res.status(200).json({
        success: true,
        ProductDetail,
      });
  });

  static updateProduct = catchAsyncError(async (req, res) => {
    let product = await ProductMODEL.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    } else product = await product.updateOne(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  });

  static deleteProduct = catchAsyncError(async (req, res) => {
    const product = await ProductMODEL.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    } else await product.remove();
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  });
}

module.exports = StudentController;
