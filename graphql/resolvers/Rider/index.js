import Rider from "../../../server/models/Rider";

export default {
    Query: {
        rider: async ( parent, {_id}, context, info)=>{
            return await Rider.findOne({ _id }).exec();
        },
        riders: async (parent, args, context, info) =>{
            const riders = await Rider.find({})
                .populate()
                .exec()

            return riders.map(r=> ({
                _id: r._id.toString(),
                ride: r.Ride,
                user: r.User,
                seats: r.seats,
                notes: r.notes,
                status: r.status,
                createAt: r.createAt,
                updatedAt: r.updatedAt
            }));
        }
    },
    Mutation: {
        createRider: async (parent , { rider }, context, info)=>{
            const newRider = await new Rider({
                ride: rider.Ride,
                user: rider.User,
                seats: rider.seats,
                notes: rider.notes,
                status: 'accepted',
                createAt: new Date()
            });

            return new Promise((resolve,reject)=>{
                newRider.save((err, res)=>{
                    err? reject(err): resolve(res)
                });
            });
        },
        updateRider: async (parent, { _id, rider }, context, info)=>{
            return new Promise((resolve, reject)=>{
                Rider.findOneAndUpdate(_id, { $set: { ...rider, updatedAt: new Date() } }, { new: true}).exec(
                    (err, res) =>{
                        err? reject(err): resolve(res);
                    }
                );
            });
        },
        deleteRider: async (parent, {_id}, context, info) =>{
            return new Promise((resolve, reject)=>{
                Rider.findByIdAndDelete(_id).exec((err, res)=>{
                    err? reject(err): resolve(res);
                })
            })
        }
    }
}