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


/* MongoDB Join Test     ////////////////////

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://ricsha:ricshadb@cluster0-74sf6.mongodb.net/test?retryWrites=true";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      dbo.collection('posts').aggregate([
        { $lookup:
           {
             from: 'users',
             localField: 'userId',
             foreignField: '_id',
             as: 'postedBy'
           }
         }
        ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
      });
    });

    //////////////////// */

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