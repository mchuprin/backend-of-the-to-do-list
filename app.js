const { timingSafeEqual } = require('crypto');
const express = require ('express');
const mongoose = require ('mongoose');
let bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

const apiRoutes = require ('./src/modules/routes/routes');

app.use(cors());

const uri = "mongodb+srv://mchuprin:copywriter2021@cluster0.ekujr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', apiRoutes)

app.listen(8000, () => {
    console.log('I am listening')
});
