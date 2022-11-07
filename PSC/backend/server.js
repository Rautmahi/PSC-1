
const express=require("express")
const {userController}=require("./routes/user.routes")
const {connection}=require("./config/db")
const app=express()
const PORT=8080

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user",userController)

// app.use("/notes",notesController)

app.use(express.json())

app.listen(PORT,async()=>{

    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err)
    {
        console.log("Error connecting to db")
        console.log(err)
    }
    console.log(`Listening on  PORT ${PORT}`)
})