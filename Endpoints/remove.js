'use strict';
const express = require('express');
const fs = require('fs');
const app = express.Router();
app.use(express.json());
let data = {
    data:[]
}
app.post('/:ticket', (req, res, next) =>{
    var id = req.params.ticket;
    let currentdata = fs.readFileSync('./Endpoints/db.json');
    let parseddata = JSON.parse(currentdata);
    for(var i = 0; i < parseddata.data.length; i++){
        if(parseddata.data[i].ticket != id){
            data.data.push(parseddata.data[i]);
        }
    }
    res.send("Done").status(200);
    let stringjson = JSON.stringify(data, null, 2);
    fs.writeFileSync('./Endpoints/db.json', stringjson);
    data = {
        data: []
    }
});



module.exports = app;
