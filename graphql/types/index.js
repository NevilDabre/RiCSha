import { mergeTypes } from 'merge-graphql-schemas';

import User from "./User/";

//add more into thi array
const typeDefs = [User];

export default mergeTypes(typeDefs, { all: true });