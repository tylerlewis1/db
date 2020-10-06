'use strict';
const express = require('express');
const fs = require('fs');
const app = express.Router();
app.use(express.json());
app.get('/', (req, res, next) =>{
    try{
        let currentdata = fs.readFileSync('./Endpoints/db.json');
        let parseddata = JSON.parse(currentdata);
        res.send(parseddata);
    }catch(err){
        res.send(err);
    }
});



module.exports = app;
