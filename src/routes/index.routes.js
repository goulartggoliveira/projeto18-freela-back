import { Router } from "express";
import signRouter from "./user.routes.js";


const router = Router()
router.use(signRouter)

export default router