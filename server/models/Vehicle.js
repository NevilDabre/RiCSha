import mongoose from 'mongoose';
import Int from 'mongoose-int32';
import { ObjectID } from 'mongodb';
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function(){
    return this.toString();
}

const VehicleSchema = new Schema({
    make:{
        type: String,
        required: true
    },
    model:{
        type:String,
        required: false
    },
    licenseNumber:{
        type: String,
        required: false
    },
    seats:{
        type: Int,
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

export default mongoose.model("Vehicle", VehicleSchema);