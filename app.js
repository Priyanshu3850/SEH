const express=require("express");
const app=express();
const hbs=require("hbs");
//database conn
require("./db/conn")
//module coonection
const register=require("./models/register")
const highlight=require("./models/highlight")
//////////////////////////////////////////////////////////////////////
//session
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

//////////////////////////////////////////////////////////////////////////


// we cannot get data without this line we have to use this to get json
app.use(express.json());
//in order to get data use this line otherwise it will show undefined
app.use(express.urlencoded({extended:false}))


const routes=require('./routes/index');
// app.use('/static',express.static("public"))
app.use(express.static('public'))
app.use("",routes);
//vie engine setup
// jh
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

app.listen(3000,()=>{
    console.log("started done ");
}) 