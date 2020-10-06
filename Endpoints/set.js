'use strict';
const express = require('express');
const fs = require('fs');
const app = express.Router();
app.use(express.json());
let data = {
    data:[]
}
app.post('/', (req, res, next) =>{
    var id = req.params.ticket;
    let currentdata = fs.readFileSync('./Endpoints/db.json');
    let parseddata = JSON.parse(currentdata);
    for(var i = 0; i < parseddata.data.length; i++){
        if(parseddata.data[i].ticket == req.body.ticket){
            data.data.push({
                name: parseddata.data[i].name,
                room: parseddata.data[i].room,
                status: req.body.status,
                problem: parseddata.data[i].problem,
                ticket: parseddata.data[i].ticket
            });
        }else{
            data.data.push(parseddata.data[i]);
        }
    }
    let stringjson = JSON.stringify(data, null, 2);
        fs.writeFileSync('./Endpoints/db.json', stringjson);
        res.status('200').send("done");
        data = {
            data: []
        }

});



module.exports = app;
