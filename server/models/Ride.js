import Int from 'mongoose-int32';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import mongooseFloat from 'mongoose-float';
const Float = mongooseFloat.loadType(mongoose);
const Schema = mongoose.Schema;


ObjectId.prototype.valueOf = function(){
    return this.toString();
}
const RideSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sourceAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    destinationAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    vehicle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    type:{ //driver or rider
        type: String,
        required: true
    },
    seats:{ //number of seats required for rider or driver
        type: Int,
        required: true
    },
    fare:{
        type: Float,
        required: false
    },
    startDateTime:{
        type: Date,
        required: true
    },
    notes:{
        type: String,
        required: false
    },
    status:{ //open, closed or cancelled
        type: String,
        required: true,
        defaultValue: 'open'
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

export default mongoose.model("Ride", RideSchema);