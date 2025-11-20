import { StudentModel } from "./student.model.js";
const crateStudentService = async (payload) => {
    const student = await StudentModel.create(payload);
    return student;
};
export const StudentService = {
    crateStudentService
};
//# sourceMappingURL=student.service.js.map