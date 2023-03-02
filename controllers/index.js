//Importing the models
const {getProducts, getProductById, insertProduct, updateProductById, deleteProductById, getUsers, getUserById, deleteUserById, registerUser, updateUser, login} = require('../models/index');
let { createToken } = require("../middleware/AuthenticatedUser");


// Get all products
 const showProducts = (req, res) => {
    getProducts((err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json({result: results});
        }
    });
}

//Get single product
 const showProductById = (req, res) => {
    let id = req.params.id;
    getProductById (id, (err, results) => {
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
    insertProduct(data, (err, results) => {
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
    updateProductById(data, id, (err, results) => {
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
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

//Get all users
const showUsers = (req,res) => {
    getUsers((err,results) => {
        if(err) res.send(err);
        else res.json(results);
    })
}

//get user by ID
const showUserById = (req,res) => {
    let id = req.params.id;
    getUserById(id, (err,results) => {
        if(err) res.send(err);
        else res.json(results);
    })
}

//DELETE User
const deleteUser = (req,res) => {
    let id = req.params.id;
    deleteUserById(id, (err,results) => {
        if(err) res.send(err);
        else res.json(results);
    })
}

const createUser = (req,res) => {
    let data = req.body;
    let user = {
        emailAdd:data.emailAdd,
        userPass:data.userPass
    };
    registerUser(data, (err,results) => {
        if(err) res.send(err);
        else {
            const jwt = createToken(user);
            res.cookie("LegitUser", jwt, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.send(results)
        }
    })
}

const updateUserData = (req,res) => {
    let data = req.body;
    let id = req.params.id;
    updateUser(data, id, (err,results) => {
        if(err) res.send(err);
        else res.json(results)
    })
}

const userLogin = (req,res) => {
    let data = req.body;
    const {emailAdd, userPass} = data;
    login(data, (err,results) => {
        if(err) res.send(err);
        else{
            const jwt = createToken(
                {
                    emailAdd, userPass
                }
            );
            res.cookie('LegitUser', jwt, {
                maxAge: 3600000,
                httpOnly: true
            })
            if(results){
                res.status(200).json({
                    message: 'Logged in!',
                    jwt,
                    result: results
                })
            } else {
                res.status(401).json({
                    err: 'Incorrect Information!'
                })
            }
        }
    })
}

module.exports = {showProducts, showProductById, createProduct, updateProduct, deleteProduct, showUsers, showUserById, deleteUser, createUser, updateUserData, userLogin};
