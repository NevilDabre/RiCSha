import { mergeTypes } from 'merge-graphql-schemas';

import User from "./User/";
import Address from "./Address"
import Vehicle from "./Vehicle"

//add more into thi array
const typeDefs = [User, Address, Vehicle];

export default mergeTypes(typeDefs, { all: true });