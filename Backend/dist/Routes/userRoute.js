import express from "express";
import { getHome } from "../Controllers/userController";
const router = express.Router();
router.get("/", getHome);
export default router;
