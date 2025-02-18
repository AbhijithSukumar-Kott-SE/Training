import express, { Router } from "express"
import { getCars } from "../controllers/carController"



const router : Router =express.Router()

router.get("/cars",getCars)


export default router