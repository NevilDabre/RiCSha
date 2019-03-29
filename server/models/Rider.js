import Int from 'mongoose-int32';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

ObjectId.prototype.valueOf = function(){
    return this.toString();
}

const RiderSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    ride:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ride'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    seats:{
        type: Int,
        required: true,
        default: 1
    },
    notes:{
        type: String,
        required: false
    },
    status:{
        type: String,
        defaultValue:'accepted'                                                                               
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

export default mongoose.model("Rider", RiderSchema);