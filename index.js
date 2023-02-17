const express = require('express');

const path = require('path');

const cors = require('cors');

const db = require('./config');

const bodyParser = require('body-parser');

const port = parseInt(process.env.port) || 4000;

const app = express();

const route = express.Router();

app.use( 
    route,
    express.json,
    bodyParser.urlencoded( {extended: false} ),
)

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})

route.get('/Sweets', (req, res)=>{
    const strQry =
    `
    SELECT sweetID, name, descript, price
    FROM Sweets;
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

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});