import mongoose, { Schema, Types } from "mongoose";

const bookschema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{type:String,required:true},
    publishedDate: {
        type: Date,
        default: Date.now
      }

},
{timestamps:true})


export default mongoose.models.Book || mongoose.model('Book',bookschema)



