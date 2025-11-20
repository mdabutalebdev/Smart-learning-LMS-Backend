 
import { StudentInterface } from "./student.interface.js";
import { StudentModel } from "./student.model.js";


const crateStudentService = async (payload:StudentInterface) =>{
      
    const student = await StudentModel.create(payload)
    return student
}


export const StudentService = {
    crateStudentService
}