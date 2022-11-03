const mongoose = require("mongoose")

const ticketingSchema = mongoose.Schema({
    category:String,
    title:String,
    messege:String,
    email:String,
    bookmark:{default:false,type:Boolean}
},{timestamps:true})

const TicketModel  = mongoose.model("ticket",ticketingSchema)

module.exports = {
    TicketModel
}