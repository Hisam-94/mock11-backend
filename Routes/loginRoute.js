const {Router} = require("express")
const { UserModel } = require("../Models/userModel")
var jwt = require('jsonwebtoken');
require("dotenv").config()
const LoginRoute = Router()


LoginRoute.post("/", async(req,res)=>{
    try{
        const {email,password} = req.body
        const user = await UserModel.findOne({email:email})
        if(user)
        {
            const dbPassword = user.password
            const dbEmail = user.email
            if(email === dbEmail && password === dbPassword)
            {
                jwt.sign({ email: email }, process.env.KEY,async function(err, token) {
                    if(err)
                    {
                        res.send({msg:"Somethong went wrong"})
                    }else
                    {
                        res.send({msg:"Login sucessfull",token:token})
                    }
                });
            }else
            {
                res.send({msg:"Login failed, Invalid credentials"})
            }           
        }else
        {
            res.send({msg:"Login failed, Invalid credentials"})
        }
    }
    catch(err){
        console.log(err)
        res.send({msg:"Somethong went wrong"})
    }
})

module.exports = {
    LoginRoute
}