const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT) || 3200;

const app = express();

const {errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/routes')

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use(userRoutes);

app.get('/', (req,res) => {
    res.send({message: 'reached'})
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});

app.use(errorHandling)