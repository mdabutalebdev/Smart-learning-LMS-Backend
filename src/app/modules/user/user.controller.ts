import { Request, response, Response } from "express";
import { UserService } from "./user.services.js";

const createUserController = async (req: Request, res: Response) => {

try{
      const data = req.body;
  const User = await UserService.createUserService(data);

  res.status(200).json({
     success: true,
     message: "User Create Successfull",
     data : User
  })
}catch(error:any){
    res.status(500).json({
        success: false,
        message: "Please check your all field & try again",
        error
    })
}

};
const getUserController = async (req: Request, res: Response) => {

try{
    
  const User = await UserService.grtUserService( );

  res.status(200).json({
     success: true,
     message: "User get Successfull",
     data : User
  })
}catch(error:any){
    res.status(500).json({
        success: false,
        message: "User not found!",
        error
    })
}

};

export const UserController = {
  createUserController,
  getUserController
};
