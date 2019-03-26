import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RiderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    placeId: {
        type: String,
        required: false
    },
    formatted_address: {
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
    administrative_area_level_1: {
        type: String,
        required: false
    },
    administrative_area_level_2: {
        type: String,
        required: false
    },
    postal_code: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    status: {
        type: String
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

export default mongoose.model("Rider", RiderSchema);