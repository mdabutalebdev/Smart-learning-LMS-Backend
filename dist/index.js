import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
    res.send("Hello World! Iam a MERN Stack Devekoper");
});
export default app;
//# sourceMappingURL=index.js.map