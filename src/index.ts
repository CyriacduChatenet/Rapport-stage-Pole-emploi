import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { appRouter } from './routes/app/appRoute';
import { postRoute } from './routes/posts/postsRoute';
require('dotenv').config();
require('./database/dbConfig');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/*', appRouter);
app.use('/api/v1', postRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});