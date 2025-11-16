import { Model, Schema } from "mongoose";
import { InterfaceUser } from "./user.interface.js";

const userSchema = new Schema <InterfaceUser>({
   id:{type:String, required:true, unique: true},
   email:{type:String , required: true, unique:true},
   password:{type:String, required:true},
   isPasswordChange:{type:Boolean, default:true},
   role:{type:String, enum:["student","mentor","admin"]},
   status:{type:String, enum:["active","blocked","admin"]},
   isDeleted:{type:Boolean, default:false}
})

 
export const UserModel = new Model("User", userSchema)

 