import { model, Schema } from "mongoose";
const studentModel = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String, required: true, unique: false },
    contactNo: { type: String, required: true, unique: true },
    emergencyContact: { type: String, required: true, unique: false },
    address: { type: String, required: true, unique: false },
    guardian: { type: String, required: false, unique: false },
    profileImg: { type: String, required: false, unique: false },
    courseName: { type: String, required: true, unique: false },
}, {
    timestamps: true,
});
export const StudentModel = model('Students', studentModel);
//# sourceMappingURL=student.model.js.map