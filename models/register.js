const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
          username:{
                    type:String,
                    required:true
          },
          email:{
                    type:String,
                    required:true,
                    unique:true 
          },
          password:{
                    type:String,
                    required:true,
          },
          confirm_password:{
                    type:String,
                    required:true
          },
})

const register=new mongoose.model("register",userSchema);
module.exports=register;