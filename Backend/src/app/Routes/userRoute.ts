import express, { Router } from "express"
import { addUser, getHome } from "../controllers/userController"


const router : Router =express.Router()

router.get("/",getHome)
router.post("/addUser",addUser)

export default router