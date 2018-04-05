const mongoose = require('../Db/mongoose');
const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path');
const morgan = require('morgan');
const hbs= require('hbs');
const apiRouter = require('../routes/api');
const mainRouter = require('../routes/index');
const cors = require('cors');
const session = require('express-session')

const staticPath =path.join((__dirname)+'/../client/views');
const viewPath =path.join((__dirname)+'/../client/AngularHuman/src');


var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
app.use(cors({origin:'http://localhost:4200'}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',mainRouter);
app.use('/api',apiRouter);
// app.set('views',viewPath);
// app.set('view engine', 'html');
app.engine('html', require('hbs').__express)
app.use(express.static(staticPath));


hbs.registerPartials(__dirname+'/client/views/partial');



app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})