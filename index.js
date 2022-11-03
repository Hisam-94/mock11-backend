const express = require("express")
const { connection } = require("./Config/db")
const { SignUpRoute } = require("./Routes/signupRoute")
const { LoginRoute } = require("./Routes/loginRoute")
const {TicketRoute} = require("./Routes/ticketRoutes")
const cors = require("cors")
const { authentication } = require("./Middleware/authentication")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/signup",SignUpRoute)

app.use("/login",LoginRoute)

app.use(authentication)

app.use("/ticket",TicketRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("Connected to DB successfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server running on PORT ${PORT}`)
})