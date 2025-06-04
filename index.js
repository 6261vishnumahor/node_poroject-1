import express from "express"
const app = express()
import router from "./route/router.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
    

app.use(express.static("public"))
app.set("view engine","ejs")
app.use(bodyParser.urlencoded("public"))

mongoose.connect("mongodb://localhost:27017/project-1")
.then(()=>console.log("connected database"))
.catch(()=>console.log("database not connected"))


app.use(router)

app.listen(4000,(req,res)=>{
    console.log("the running port 4000")
})