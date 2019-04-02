import Int from 'mongoose-int32';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function(){
    return this.toString();
}

const PostSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text:{
        type: String,
        required: false,
    }
});

export default mongoose.model("Post", PostSchema);