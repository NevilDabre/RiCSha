import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function(){
    return this.toString();
}

const PostSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text:{
        type: String,
        required: false,
    }
});

export default mongoose.model("Post", PostSchema);