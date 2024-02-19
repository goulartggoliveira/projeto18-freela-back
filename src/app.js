import cors from "cors";
import express from "express";
import signRouter from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(signRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


