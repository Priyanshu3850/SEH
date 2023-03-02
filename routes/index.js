const express=require("express")
const register = require("../models/register")
const highlight = require("../models/highlight")
const route=express.Router()



route.get("/",async(req,res)=>{
    // res.send("this my message from routes page")

    const high=await highlight.find();
    // console.log(high);
    var flag=false;
    if (req.session.auth){
        flag=true;
    }
    res.render("index",{
        high:high,
        flag:flag,
    })
})

route.get("/register",(req,res)=>{
    // res.send("this my message from routes page")

    res.render("register")
})

// registration form validatiom
route.post("/register",async(req,res)=>{
    try {
        console.log(req.body.email)
        const password=req.body.password;
        const confirm_password=req.body.confirm_password;

        if(password===confirm_password){

            const register_user=new register({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                confirm_password:req.body.confirm_password
            })

            const success_register=await register_user.save();
            res.status(201).render("index");

        }else{

            res.send("invalid login details")
        }

    } catch (e) {
        // res.status(400).send("nhi");
        res.render("register",{
            ee:"Already registered"
        });
    }
})




route.get("/login",(req,res)=>{
    // res.send("this my message from routes page")
    res.render("login")
})

// login form validation
route.post("/login",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        //email validation
        const checkemail=await register.findOne({email:email})
        //password validation
        if(checkemail.password===password){
            sess=req.session;
            sess.auth=checkemail;
            res.status(201).redirect('/');

            // res.status(201).render('index',{flag:true});
            // res.status(201).render('index',{flag:true);
            // res.status(201).render("index",{user:checkemail});
            // res.status(201).redirect("/?user=checkmail");
        }else{
            res.send("invalid login details")
        }
    } catch (e) {
        res.status(400).send(e)
    }
})


// trail

// route.get("/trail",async(req,res)=>{
//     // res.send("this my message from routes page")
//     highlight.create([
//         {
//             imgurl:"/css/login.css",
//             description:"guirrjgfviureghfivure",
//             onclick:"www.google.com",
//             title:"hiii"
//         }
//     ])
// })

module.exports=route;