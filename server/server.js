const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


const { sequelize } = require('./src/models/index');
const config =require('./src/config/config')


sequelize.sync({force:true})
    .then(() => {
        app.listen(config.port)
        console.log(` Server started at ${config.port}`)

    });