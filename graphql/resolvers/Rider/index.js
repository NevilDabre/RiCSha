import Ride from "../../../server/models/Ride";
import User from "../../../server/models/User";
import Address from "../../../server/models/Address";

const getResourceInfo = (rider) => {
    rider.ride = await Ride.findOne({ _id: rider.ride })
        .populate()
        .exec();

    rider.user = await Post.findOne({ _id: rider.user })
        .populate()
        .exec();

    rider.address = await Address.findOne({ _id: rider.address })
        .populate()
        .exec();

    return rider;
}

export default {
    Query: {
        rider: async (parent, { _id }, context, info) => {
            const rider = Rider.findOne({ _id })
                .populate()
                .exec();

            return getResourceInfo(rider);
        },
        riders: async (parent, args, context, info) => {
            const riders = await Rider.find({})
                .populate()
                .exec()

            return riders.map(r => ({
                _id: r._id.toString(),
                ride: async () => {
                    return await Ride.findOne(r.ride)
                },
                user: async () => {
                    return await User.findOne(r.user)
                },
                address: async () => {
                    return await Address.findOne(r.address)
                },
                seats: r.seats,
                notes: r.notes,
                status: r.status,
                createAt: r.createAt,
                updatedAt: r.updatedAt
            }));
        }
    },
    Mutation: {
        createRider: async (parent, { rider }, context, info) => {
            const newRider = await new Rider({
                ride: rider.rideId,
                user: rider.userId,
                address: rider.addressId,
                seats: rider.seats,
                notes: rider.notes,
                status: 'accepted',
                createAt: new Date()
            });

            return new Promise((resolve, reject) => {
                newRider.save((err, res) => {
                    err ? reject(err) : resolve(getResourceInfo(res))
                });
            });
        },
        updateRider: async (parent, { _id, rider }, context, info) => {
            return new Promise((resolve, reject) => {
                Rider.findOneAndUpdate(_id, { $set: { ...rider, updatedAt: new Date() } }, { new: true }).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(getResourceInfo(res));
                    }
                );
            });
        },
        deleteRider: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                Rider.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    }
}