import { Router } from "express";
import { getAllMiaudelos, getMiaudelosId } from "../controllers/miaudelos.controllers.js";


const miaudelosRoutes = Router()


miaudelosRoutes.get("/miaudelos", getAllMiaudelos)
miaudelosRoutes.get("/miaudelos/:id", getMiaudelosId )