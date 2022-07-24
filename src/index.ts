import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { articleRoute } from './routes/article/articleRoute';
import { appRoute } from './routes/app/appRoutes';
import { aboutRoute } from './routes/about/aboutRoutes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
require('./database/dbConfig');

const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api',articleRoute)
app.use('/api',aboutRoute)
app.use('/*', appRoute)

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
