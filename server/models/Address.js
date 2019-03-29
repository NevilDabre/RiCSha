import mongoose from 'mongoose';
import {
    ObjectID
} from 'mongodb';
import mongooseFloat from 'mongoose-float';
const Float = mongooseFloat.loadType(mongoose);

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
    return this.toString();
}

const AddressSchema = new Schema({
    placeId: {
        type: String,
        required: false
    },
    formattedAddress: {
        type: String,
        required: false
    },
    streetAddress: {
        type: String,
        required: false
    },
    locality: {
        type: String,
        required: false
    },
    sublocality: {
        type: String,
        required: false
    },
    administrativeAreaLevel1: {
        type: String,
        required: false
    },
    administrativeAreaLevel2: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    countryCode: {
        type: String,
        required: false
    },
    lat: {
        type: Float,
        required: false
    },
    lng: {
        type: Float,
        required: false
    },
    createAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    }
});

export default mongoose.model("Address", AddressSchema);