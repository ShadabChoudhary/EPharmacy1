const express = require("express");
const StudentController = require("../controllers/studentcontroller.js");
const { userAuth, authorizeRoles } = require("../middleware/adminAuth");
const payment = require("../utils/payment.js");

const router = express.Router();

router.post(
  "/admin/product/new",
  userAuth,
  authorizeRoles("admin"),
  StudentController.createProduct
);
router.get("/getproduct", StudentController.getProducts);
router.get("/product/category/:category", StudentController.getByCategory);
router.get("/products", StudentController.getAllProducts);
router.put(
  "/admin/product/:id",
  userAuth,
  authorizeRoles("admin"),
  StudentController.updateProduct
);
router.delete(
  "/admin/product/:id",
  userAuth,
  authorizeRoles("admin"),
  StudentController.deleteProduct
);
router.get("/product/:id", StudentController.getProductDetails);
router.post("/payment/process", payment);

module.exports = router;
