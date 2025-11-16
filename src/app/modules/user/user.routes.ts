import express, { Request, Response } from "express"

const router = express.Router()  

const userData = {
  id: "usr_001",
  email: "mdabutaleb.dev@gmail.com",
  password: "abu_password_123",
  isPasswordChange: false,
  role: "student",
  status: "active",
  isDeleted: false
};




router.get('/get-user',(req:Request,res:Response)=>{
    res.send(userData)
})




export const UserRouter = router