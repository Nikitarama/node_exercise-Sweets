// import express
const express = require("express");
  
// import function from controller
const productController = require("../controllers/product.js");
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', productController.showProducts);
  
// Get Single Product
router.get('/products/:id', productController.showProductById);
  
// Create New Product
router.post('/products', productController.createProduct);
  
// Update Product
router.put('/products/:id', productController.updateProduct);
  
// Delete Product
router.delete('/products/:id', productController.deleteProduct);
  
// export default router
module.exports = router;