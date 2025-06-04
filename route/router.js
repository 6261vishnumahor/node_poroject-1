import express from "express";
const router=express.Router()
import {home,loged,login,register,registration} from"../controller/routeController.js"
router.get("/",home)
router.get("/registration",registration)
router.post("/register",register)
router.get("/login",login)
router.post("/loged",loged)

export default router