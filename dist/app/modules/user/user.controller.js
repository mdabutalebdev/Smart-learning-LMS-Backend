import { UserService } from "./user.services.js";
const createUserController = async (req, res) => {
    try {
        const data = req.body;
        const User = await UserService.createUserService(data);
        res.status(200).json({
            success: true,
            message: "User Create Successfull",
            data: User
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Please check your all field & try again",
            error
        });
    }
};
const getUserController = async (req, res) => {
    try {
        const User = await UserService.grtUserService();
        res.status(200).json({
            success: true,
            message: "User get Successfull",
            data: User
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User not found!",
            error
        });
    }
};
export const UserController = {
    createUserController,
    getUserController
};
//# sourceMappingURL=user.controller.js.map