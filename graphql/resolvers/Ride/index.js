import Ride from "../../../server/models/Ride";
import User from "../../../server/models/User";
import Address from "../../../server/models/Address";
import Vehicle from "../../../server/models/Vehicle";

const getResourceInfo = async (ride) => {
    ride.user = async () => {
        return await User.findOne({ _id: ride.user })
    }

    ride.sourceAddress = async () => {
        return await Address.findOne({ _id: ride.sourceAddress })
    }

    ride.destinationAddress = async () => {
        return await Address.findOne({ _id: ride.destinationAddress })
    }

    ride.vehicle = async () => {
        return await Vehicle.findOne({ _id: ride.vehicle })
    }

    return ride;
}

export default {
    Query: {
        ride: async (parent, { _id }, context, info) => {
            const ride = await Ride.findOne({ _id })
                .populate()
                .exec();

            return getResourceInfo(ride);
        },
        rides: async (parent, args, context, info) => {
            const rides = await Ride.find({})
                .populate()
                .exec()

            return rides.map(r => ({
                _id: r._id.toString(),
                user: async () => {
                    return await User.findOne(r.user)
                },
                sourceAddress: async () => {
                    return await Address.findOne(r.sourceAddress)
                },
                destinationAddress: async () => {
                    return await Address.findOne(r.destinationAddress)
                },
                vehicle: async () => {
                    return await Vehicle.findOne(r.vehicle)
                },
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
        createRide: async (parent, { ride }, context, info) => {
            const newRide = await new Ride({
                _id: ride._id,
                user: ride.User,
                sourceAddress: ride.sourceAddressId,
                destinationAddress: ride.destinationAddressId,
                vehicle: ride.vehicleId,
                type: ride.type,
                seats: ride.seats,
                fare: ride.fare,
                startDateTime: ride.startDateTime,
                notes: ride.notes,
                status: 'open',
                createAt: new Date()
            });

            return new Promise((resolve, reject) => {
                newRide.save((err, res) => {
                    err ? reject(err) : resolve(getResourceInfo(res))
                });
            });
        },
        updateRide: async (parent, { id, ride }, context, info) => {
            return new Promise((resolve, reject) => {
                Ride.findOneAndUpdate(id, { $set: { ...ride, updatedAt: new Date() } }, { new: true }).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(getResourceInfo(res));
                    }
                );
            });
        },
        deleteRide: async (parent, { id }, context, info) => {
            return new Promise((resolve, reject) => {
                Ride.findByIdAndDelete(id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    }
}