const {Router} = require("express")

const { UserModel } = require("../Models/userModel")
const SignUpRoute = Router()

SignUpRoute.post("/", async(req,res)=>{
    try{
        const {email,password,name} = req.body
        const present = await UserModel.findOne({email:email})
        if(present)
        {
            res.send({msg:"User already exists"})
        }else
        {           
            const data = new UserModel({name:name,email:email,password:password})
            await data.save()
            res.send("Account created successfully")           
        }
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went wrong"})
    }
})

module.exports = {
    SignUpRoute
}