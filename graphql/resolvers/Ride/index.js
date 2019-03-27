import Ride from "../../../server/models/Ride";

export default {
    Query: {
        ride: async ( parent, {id}, context, info)=>{
            return await Ride.findOne({ id }).exec();
        },
        rides: async (parent, args, context, info) =>{
            const rides = await Ride.find({})
                .populate()
                .exec()

            return rides.map(r=> ({
                id: r.id.toString(),
                ride: r.Ride,
                sourceAddressId: r.sourceAddressId,
                destinationAddressId: r.destinationAddressId,
                vehicle: r.Vehicle,
                type: r.type,
                seats: r.seats,
                fare: r.fare,
                startDateTime: r.startDateTime,
                notes: r.notes,
                status: r.status,
                createAt: r.createAt,
                updatedAt: r.updatedAt
            }));
        }
    },
    Mutation: {
        createRide: async (parent , { ride }, context, info)=>{
            const newRide = await new Ride({ 
                id: ride.id,
                user: ride.User,
                sourceAddressId: ride.sourceAddressId,
                destinationAddressId: ride.destinationAddressId,
                vehicle: ride.Vehicle,
                type: ride.type,
                seats: ride.seats,
                fare: ride.fare,
                startDateTime: ride.startDateTime,
                notes: ride.notes,
                status: 'open',
                createAt: new Date()
            });

            return new Promise((resolve,reject)=>{
                newRide.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        },
        updateRide: async (parent, { id, ride }, context, info)=>{
            return new Promise((resolve, reject)=>{
                Ride.findOneAndUpdate(id, { $set: { ...ride, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteRide: async (parent, {id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                Ride.findByIdAndDelete(id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}