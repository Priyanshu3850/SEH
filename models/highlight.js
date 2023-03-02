const mongoose=require("mongoose");
const highlightSchema=new mongoose.Schema({
          imgurl:{
                    type:String,
                    required:true
          },
          description:{
                    type:String,
                    required:true,
          },
          onclick:{
                    type:String,
                    required:true,
          },
          title:{
                    type:String,
                    required:true,
          },
})

const highlight=new mongoose.model("highlight",highlightSchema);
module.exports=highlight;