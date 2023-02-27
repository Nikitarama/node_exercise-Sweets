//Importing the models
const productModel = require('../models/productModel.js');

//Get all products
 const showProducts = (req, res) => {
    productModel.getProducts ((err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

//Get single product
 const showProductById = (req, res) => {
    productModel.getProductById (req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
};

//Insert new product
 const createProduct = (req, res) => {
    const data = req.body;
    productModel.insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Product
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    productModel.updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    productModel.deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

module.exports = {showProducts, showProductById, createProduct, updateProduct, deleteProduct};