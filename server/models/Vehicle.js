import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    make:{
        type: String,
        required: true
    },
    model:{
        type:String,
        required: true
    },
    licenseNumber:{
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

export default mongoose.model("Vehicle", vehicleSchema);