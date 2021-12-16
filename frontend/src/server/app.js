require('dotenv').config({path: './config.env'})
const express = require('express');
const http = require('http');
const connectDB = require('./config/db')
const morgan = require('morgan');
const errorHandler = require('./middleware/error')

connectDB();

let port = process.env.PORT || 3000;

let app = express();

app.use(express.json());


let authRouter = require('./routes/auth');
let privateRouter = require('./routes/private');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
    next();
  });


app.use(express.urlencoded({ extended: false }));
app.use('/api/auth',authRouter);
app.use('/api/private',privateRouter);

app.use(errorHandler)
// let server = http.createServer(app);
let server = app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

process.on('unhandledRejection',(err,promise)=>{
  console.log(`Logged Error: ${err}`);
  server.close(()=>{process.exit(1)});
})
