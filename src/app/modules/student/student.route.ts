
import express from "express"
import { StudentController } from "./student.contoller.js"

const router = express.Router()


router.use('/create-student', StudentController.createStudentController)   



export const  StudentRoute = router