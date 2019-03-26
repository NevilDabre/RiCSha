import mongoose from 'mongoose';
//import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: NumberInt,
        required: false
    },
    picture:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: false
    },
    createAt:{
        type: Date,
        required:false
    },
    updatedAt:{
        type: Date,
        required:false
    }
});

export default mongoose.model("User", UserSchema);