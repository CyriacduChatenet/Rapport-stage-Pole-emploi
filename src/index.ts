import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});