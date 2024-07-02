import mongoose, { Schema, Types } from "mongoose";

const authorschema=new Schema({
    name:{type:String,required:true},
    bio:{type:String},
    birthDate:{type:Date},
    books:[{type:mongoose.Schema.ObjectId,ref:"Book"}]

},
{timestamps:true})


export default mongoose.models.Author || mongoose.model('Author',authorschema)