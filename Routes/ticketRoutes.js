const {Router} = require("express")
const { TicketModel } = require("../Models/ticketingModel")
var jwt = require('jsonwebtoken');
require("dotenv").config()
const TicketRoute = Router()

TicketRoute.post("/create", async(req,res)=>{
    try{
        const {category,title,messege,email} = req.body
        const data = new TicketModel({
            email,
            category,
            title,
            messege
        })
        await data.save()
        res.send("Data added successfully")
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went wrong"})
    }
})

TicketRoute.get("/",async(req,res)=>{
    try{
        const {email} = req.body
        const result = await TicketModel.find({email})
        res.send(result)
    }
    catch(err){
        console.log(err)
        res.send({msg:"Something went worng"})
    }
})

module.exports = {
    TicketRoute
}