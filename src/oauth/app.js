const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const rutas = require("../routes/rutas");

//oauth
app.use(cors());
app.use(express.json());

//Configuration
app.use(morgan('dev'));
app.set("port", process.env.PORT || 3000);
app.use("/", rutas);
app.use(express.urlencoded({extended : true}))

//Configuration Multer
app.get('/', (req,res,next) =>{
    res.send("Hola");
} )

module.exports = app;