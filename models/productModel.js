const db = require("../config/index.js");

//Get all products
 const getProducts = (result) => {
    db.query("SELECT * FROM Products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

 const getProductById = (id, result) => {
    db.query("SELECT * FROM Products WHERE ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
const insertProduct = (data, result) => {
    db.query("INSERT INTO Products SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
 const updateProductById = (data, id, result) => {
    db.query("UPDATE Products SET ? WHERE ID = ?", [data, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Product to Database
 const deleteProductById = (id, result) => {
    db.query("DELETE FROM Products WHERE ID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
module.exports = {getProducts, getProductById, insertProduct, updateProductById, deleteProductById};
