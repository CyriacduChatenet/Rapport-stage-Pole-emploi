import mongoose, { ConnectOptions } from "mongoose";
require('dotenv').config();

mongoose.connect(
    `${process.env.DB_URL}`,
    {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions,
    (err) => {
        if(!err) console.log('Connected to DB');
        else console.log(`${err}`);
    }
);