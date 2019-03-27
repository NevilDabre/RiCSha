import Address from "../../../server/models/Address";

export default {
    Query: {
        address: async ( parent, {id}, context, info)=>{
            return await Address.findOne({ id }).exec();
        },
        addresess: async (parent, args, context, info) =>{
            const addresss = await Address.find({})
                .populate()
                .exec()

            return addresss.map(r=> ({
                id: a.id.toString(),
                placeId: a.placeId,
                streetAddress: a.streetAddress,
                locality: a.locality,
                sublocality: a.sublocality,
                administrative_area_level_1: a.administrative_area_level_1,
                administrative_area_level_2: a.administrative_area_level_2,
                postal_code: a.postal_code,
                country: a.country,
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
                id: address.id,
                placeId: address.placeId,
                streetAddress: address.streetAddress,
                locality: address.locality,
                sublocality: address.sublocality,
                administrative_area_level_1: address.administrative_area_level_1,
                administrative_area_level_2: address.administrative_area_level_2,
                postal_code: address.postal_code,
                country: address.country,
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
        updateAddress: async (parent, { id, address }, context, info)=>{
            return new Promise((resolve, reject)=>{
                Address.findOneAndUpdate(id, { $set: { ...address, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteAddress: async (parent, {id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                Address.findByIdAndDelete(id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}