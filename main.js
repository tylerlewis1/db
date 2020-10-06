const express = require('express');
const add = require('./Endpoints/add.js');
const get = require('./Endpoints/get.js');
const remove = require('./Endpoints/remove.js');
const set = require('./Endpoints/set.js');
var cors = require('cors')
const app = express();

app.use(cors());
app.use('/add', add);
app.use('/remove', remove);
app.use('/get', get);
app.use('/set', set);
module.exports = app;
