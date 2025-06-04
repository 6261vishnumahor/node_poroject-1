import Reg from"../models/reg.js"
import Log from"../models/log.js"

function home (req,res){
res.render("home")
}
function registration (req,res){
res.render("registration")
}
const register=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let number=req.body.number
    let city=req.body.city
    let address=req.body.address
    let password=req.body.password
    let cpass=req.body.cpass
    await Reg.create({name,email,number,city,address,password,cpass})
    res.redirect("/")
}
function login(req,res){
    res.render("login")
}
const loged=async(req,res)=>{
let email=req.body.email
let password=req.body.password
await Log.create({email,password})
res.redirect("/")
}
export {home,registration,register,login,loged}