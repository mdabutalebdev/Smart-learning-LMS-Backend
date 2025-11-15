import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Iam a MERN Stack Devekoper");
});

export default app;
