export interface InterfaceUser {
    id: string;
    email: string;
    password: string;
    isPasswordChange: boolean;
    role: "student" | "mentor" | "admin";
    status: "active" | "blocked" | "pending";
    isDeleted: boolean;
}
//# sourceMappingURL=user.interface.d.ts.map