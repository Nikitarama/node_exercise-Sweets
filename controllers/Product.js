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


route.get('/sweets', (req, res)=>{
    const strQry =
    `
    SELECT ID, prodName, prodDescription, category, price, prodQuantity, imgURL, userID
    FROM Products;
    `;

    db.query(strQry, (err, data)=>{
        if(err) throw err;
        res.status(200).json( {result: data} );
    })
});

route.delete('/', (req, res) => {
    console.log(req.params);
    return res.json({
        message: 'DELETE'
    }) 
});

route.put('user/:id', bodyParser.json(), (req, res) => {
    let data = req.body;
    const strQry =
    `
    update Sweets
    set ?
    where sweetID = ?;
    `;
db.query(strQry, [data, req.params.id],
    (err)=>{
        if(err) throw err;
        res.status(200).json( {msg:
        "a row was affected"});
    })
});

route.get('^/$|/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})

module.exports = route;