// import express
const bodyParser = require("body-parser");
const express = require("express");
  
// import function from controller
const {showProducts, showProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/product.js");
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', bodyParser.json(), showProductById);
  
// Create New Product
router.post('/products', bodyParser.json(), createProduct);
  
// Update Product
router.put('/products/:id', bodyParser.json(), updateProduct);
  
// Delete Product
router.delete('/products/:id', deleteProduct);



// export default router
module.exports = router;

