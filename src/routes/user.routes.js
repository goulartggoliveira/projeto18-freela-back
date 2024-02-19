import { Router } from "express";
import { postSignin, postSignup } from "../controllers/signup.controllers.js";


const signRouter = Router()

signRouter.post("/signup", postSignup)
signRouter.post("/signin", postSignin)
export default signRouter