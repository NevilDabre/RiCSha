import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from "../graphql";


const app = express();
const PORT = process.env.PORT || '3000'
const db = 'mongodb+srv://ricsha:ricshadb@cluster0-74sf6.mongodb.net/test?retryWrites=true';

mongoose.connect(db, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.use('/graphql',
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.get('/', function (req, res) {
    res.status(200).send('Hello World');
});

app.listen(PORT, () => console.log('Server Listenting at ${PORT}'));