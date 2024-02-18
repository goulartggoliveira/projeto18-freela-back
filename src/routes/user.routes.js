import { Router } from "express";
import { signup } from "../controllers/signup.controllers.js";


const signRouter = Router()

signRouter.post("/signup", signup)

export default signRouter