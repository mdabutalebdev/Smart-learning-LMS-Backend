import { Request, Response } from "express";
import { StudentService } from "./student.service.js";



const createStudentController = async(req:Request , res:Response)=>{

    try{
        const data = req.body;
    const Student = await StudentService.crateStudentService(data)
    res.status(200).json({

        success:true,
        message:"Student Create Successfull",
        data:Student
    })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Please check your all field and try again",
            error
        })
    }
}

export const StudentController = {
    createStudentController
}