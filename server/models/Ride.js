import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    userId:{
        type: String,
        required: true
    },
    sourceAddressId:{
        type: String,
        required: true
    },
    destinationAddressId:{
        type: String,
        required: true
    },
    vehicleId:{
        type: String,
        required: true
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
    createAt:{
        type: Date,
        required:false
    },
    updatedAt:{
        type: Date,
        required:false
    }
});

export default mongoose.model("Vehicle", vehicleSchema);