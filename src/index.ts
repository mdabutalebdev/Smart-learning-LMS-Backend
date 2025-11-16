import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { UserRouter } from "./app/modules/user/user.routes.js";
const app: Application = express();
app.use(cors());
dotenv.config();

app.use('/api/user',UserRouter)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Iam a MERN Stack Devekoper");
});

export default app;
