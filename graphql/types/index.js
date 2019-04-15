import { mergeTypes } from 'merge-graphql-schemas';

import User from "./User/";
import Address from "./Address"
import Vehicle from "./Vehicle"
import Ride from "./Ride";
import Rider from "./Rider";
import Post from "./Post";

//add more into thi array
const typeDefs = [User, Address, Vehicle, Post, Ride, Rider];

export default mergeTypes(typeDefs, { all: true });