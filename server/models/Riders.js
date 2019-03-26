import mongoose from 'mongoose';
//import { ObjectId } from 'mongodb'; 
const Schema = mongoose.Schema;

const RiderSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    ride_id:{
        type: String,
        required: true
    },
    rider_id:{
        type: String,
        required: true
    },
    seats:{
        type: Integer,
        required: true,
        default: 1
    },
    notes:{
        type: String,
        required: false
    },
    status:{
        type: String                                                                                
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