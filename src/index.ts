import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
const app: Application = express();
app.use(cors());
dotenv.config();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Iam a MERN Stack Devekoper");
});

export default app;
