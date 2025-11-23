import { StudentInterface } from "./student.interface.js";
export declare const StudentService: {
    crateStudentService: (payload: StudentInterface) => Promise<import("mongoose").Document<unknown, {}, StudentInterface, {}, import("mongoose").DefaultSchemaOptions> & StudentInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map