import express from "express";
const router=express.Router()
import {home,register,registration} from"../controller/routeController.js"
router.get("/",home)
router.get("/registration",registration)
router.post("/register",register)

export default router