'use strict';
const express = require('express');
const fs = require('fs');
const app = express.Router();
app.use(express.json());
app.post('/', (req, res, next) =>{
    let data = {
        data:[]
    }
    try{   
        let currentdata = fs.readFileSync('./Endpoints/db.json');
        let parseddata = JSON.parse(currentdata);
        for(var i = 0; i < parseddata.data.length; i++){
            data.data.push(parseddata.data[i]);
        }
        data.data.push({
            room: req.body.room,
            status: req.body.status,
            problem: req.body.problem,
            name: req.body.name,
            ticket: req.body.ticket
        });
        let stringjson = JSON.stringify(data, null, 2);
        fs.writeFileSync('./Endpoints/db.json', stringjson);
        console.log(data);
        data = {
            data: []
        }
        res.status('200').send(req.body);
        return;
    }catch(error){
        res.send(error);
        return;
    }
});



module.exports = app;
