import Int from 'mongoose-int32';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function(){
    return this.toString();
}

const UserSchema = new Schema({
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
        type: Int,
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