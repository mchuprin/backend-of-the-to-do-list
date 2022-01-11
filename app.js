const express = require ('express');
const dotenv = require('dotenv').config();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./src/modules/middlewares/error-middleware');

const uri = process.env.URL;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const apiRoutes = require ('./src/modules/routes/routes');
app.use('/', apiRoutes)

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(errorMiddleware);

app.listen(8000, () => {
    console.log('I am listening')
});