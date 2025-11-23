import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { UserRouter } from "./app/modules/user/user.routes.js";
import { StudentRoute } from "./app/modules/student/student.route.js";
const app: Application = express();
app.use(cors());
app.use(express.json());
dotenv.config();
//user route
app.use('/api/user',UserRouter)
//student route
app.use('/api/student', StudentRoute)
//root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
