import { mergeTypes } from 'merge-graphql-schemas';

import User from "./User/";
import Address from "./Address"

//add more into thi array
const typeDefs = [User, Address];

export default mergeTypes(typeDefs, { all: true });