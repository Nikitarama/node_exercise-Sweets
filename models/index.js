const db = require("../config/index.js");

let { hash, compare, hashSync } = require("bcrypt");
//

// Get all products
 const getProducts = (result) => {
    db.query(`SELECT * FROM Products`, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

 const getProductById = (id, result) => {
    db.query(`SELECT * FROM Products WHERE ID = ?`, [id], (err, results) => {             
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
    db.query(`UPDATE Products SET ? WHERE ID = ?`, [data, id], (err, results) => {             
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
    db.query(`DELETE FROM Products WHERE ID = ?`, [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//get all users
const getUsers = (result) => {
    db.query(`SELECT * FROM Users;`, (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const getUserById = (id, result) => {
    db.query(`SELECT * FROM Users WHERE userID = ?`, [id], (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const deleteUserById = (id,result) => {
    db.query(`DELETE FROM Users WHERE userID = ?`, [id], (err,results) => {
        if(err) result(err,null);
        else result(null,results)
    })
}

const registerUser = async (data, result) => {
    data.userPass = await hash(data.userPass, 15);
    db.query(`INSERT INTO Users SET ?` ,[data], (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const updateUser = (data, id, result) => {
    if(data.userPass !== null || data.userPass !== undefined) data.userPass = hashSync(data.userPass, 15);
    db.query(`UPDATE Users SET ? WHERE userID = ?;`, [data, id], (err, results) => {
        if(err) result(err, null);
        else result(null, results);
    })
}

const login = (data, result) => {
    const {emailAdd, userPass} = data;
    db.query(`SELECT * FROM Users WHERE emailAdd = ?`, [emailAdd], async (err,results) => {
        const value = results;
        if(err) result(err,null);
        else{
            await compare(userPass, results[0].userPass, (err,results) => {
                if(err) result({err,message:"Incorrect Information"});
                else result(null,(results, value))
            })
        }
    })
}

module.exports = {getProducts, getProductById, insertProduct, updateProductById, deleteProductById, getUsers, getUserById, deleteUserById, registerUser, updateUser, login};

