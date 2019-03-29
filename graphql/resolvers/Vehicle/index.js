import Vehicle from "../../../server/models/Vehicle";

export default {
    Query: {
        vehicle: async ( parent, {_id}, context, info)=>{
            return await Vehicle.findOne({ _id }).exec();
        },
        vehicles: async (parent, args, context, info) =>{
            const vehicles = await Vehicle.find({})
                .populate()
                .exec()

            return vehicles.map(v=> ({
                _id: v._id.toString(),
                make: v.make,
                model: v.model,
                licenseNumber: a.licenseNumber,
                seats: v.seats,
                color: v.color,
                createAt: v.createAt,
                updatedAt: v.updatedAt
            }));
        }
    },
    Mutation: {
        createVehicle: async (parent , { vehicle }, context, info)=>{
            const newVehicle = await new Vehicle({ 
                make: vehicle.make,
                model: vehicle.model,
                licenseNumber: vehicle.licenseNumber,
                seats: vehicle.seats,
                color: vehicle.color,
                createAt: new Date()
            });

            return new Promise((resolve,reject)=>{
                newVehicle.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        },
        updateVehicle: async (parent, { _id, vehicle }, context, info)=>{
            return new Promise((resolve, reject)=>{
                Vehicle.findOneAndUpdate(_id, { $set: { ...vehicle, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteVehicle: async (parent, {_id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                Vehicle.findByIdAndDelete(_id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}