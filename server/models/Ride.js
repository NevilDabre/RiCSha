import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RideSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sourceAddressId:{
        type: String,
        required: true
    },
    destinationAddressId:{
        type: String,
        required: true
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
        type: Integer,
        required: true
    },
    fare:{
        type: Double,
        required: false
    },
    startDateTime:{
        type: Date,
        required: true
    },
    notes:{
        type: Date,
        required: false
    },
    status:{
        type: Date,
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