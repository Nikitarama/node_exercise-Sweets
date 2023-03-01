const express = require('express');

const path = require('path');

const cors = require('cors');

const db = require('./config');

const bodyParser = require('body-parser');

const port = parseInt(process.env.port) || 3000;

const app = express();

const users = []

const bcrypt = require('bcrypt');

const route = express.Router();

const {errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});

app.use( 
    route,
    cors({
        origin: ['http://127.0.0.1:8080', 
        'http://localhost:8080'],
        credentials: true
    }),
    cookieParser(),
    express.json,
    bodyParser.urlencoded( {extended: false} )
)

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.js')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.email,
            email: req.body.email,
            password: hashedPassword 

        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    req.body.email
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});