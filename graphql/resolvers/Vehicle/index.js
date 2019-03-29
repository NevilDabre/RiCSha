import Vehicle from "../../../server/models/Vehicle";

export default {
    Query: {
        vehicle: async ( parent, {_id}, context, info)=>{
            return await Vehicle.findOne({ _id }).exec();
        },
        vehicles: async (parent, args, context, info) =>{
            const addresss = await Vehicle.find({})
                .populate()
                .exec()

            return addresss.map(a=> ({
                _id: a._id.toString(),
                placeId: a.placeId,
                formattedAddress: a.formattedAddress,
                streetAddress: a.streetAddress,
                locality: a.locality,
                sublocality: a.sublocality,
                administrativeAreaLevel1: a.administrativeAreaLevel1,
                administrativeAreaLevel2: a.administrativeAreaLevel2,
                postalCode: a.postal_code,
                country: a.country,
                countryCode: a.countryCode,
                lat: a.lat,
                lng: a.lng,
                createAt: a.createAt,
                updatedAt: a.updatedAt
            }));
        }
    },
    Mutation: {
        createAddress: async (parent , { address }, context, info)=>{
            const newAddress = await new Address({ 
                placeId: address.placeId,
                formattedAddress: address.formattedAddress,
                streetAddress: address.streetAddress,
                locality: address.locality,
                sublocality: address.sublocality,
                administrativeAreaLevel1: address.administrativeAreaLevel1,
                administrativeAreaLevel2: address.administrativeAreaLevel2,
                postalCode: address.postal_code,
                country: address.country,
                countryCode: address.countryCode,
                lat: address.lat,
                lng: address.lng,
                createAt: new Date()
            });

            return new Promise((resolve,reject)=>{
                newAddress.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        },
        updateAddress: async (parent, { _id, address }, context, info)=>{
            return new Promise((resolve, reject)=>{
                Address.findOneAndUpdate(_id, { $set: { ...address, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteAddress: async (parent, {_id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                Address.findByIdAndDelete(_id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}