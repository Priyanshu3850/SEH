const mongoose=require("mongoose")
const highlight = require("../models/highlight")
mongoose.connect("mongodb+srv://priyanshuair3850:Manu%403850@cluster0.zxskhh8.mongodb.net/test").then(()=>{
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