import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const port=process.env.SERVERPORT;
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello Word TSX!")
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})