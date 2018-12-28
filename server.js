const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors())
const PORT = process.env.PORT || 4000;
mongoose.connect('mongodb://localhost/stock');

mongoose.connect('mongodb+srv://shivaaryalj7:random-password99@cluster0-czbq7.mongodb.net/test?retryWrites=true')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/',routes);

app.use('*',(req,res)=>{
    res.send("bad request")
})

app.listen(PORT,()=>{
    console.log("listening on port ",PORT)
})
