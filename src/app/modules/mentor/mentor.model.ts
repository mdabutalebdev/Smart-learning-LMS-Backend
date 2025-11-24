import { Schema } from "mongoose";



const MentorSchema = new Schema ({

    id:{type:String, require:true, unique:true},
    email:{type:String, require:true, unique:true}
})