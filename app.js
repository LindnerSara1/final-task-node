const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db');
const router = require('./routers/song.router');

const port = process.env.PORT || 8080;

connection();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })