const mongoose=require("mongoose")
require('dotenv').config()
const highlight = require("../models/highlight")
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          console.log("connection successful");
          // highlight.create([
          //           {
          //               imgurl:"/css/login.css",
          //               description:"guirrjgfviureghfivure",
          //               onclick:"www.google.com",
          //               title:"hiii"
          //           }
          // ])
}).catch((e)=>{
          console.log(e);
})