// import express
const express = require("express");
  
// import function from controller
const { showProducts, showProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product.js");
  
// init express router
const Router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', showProductById);
  
// Create New Product
router.post('/products', createProduct);
  
// Update Product
router.put('/products/:id', updateProduct);
  
// Delete Product
router.delete('/products/:id', deleteProduct);
  
// export default router
// export default router;