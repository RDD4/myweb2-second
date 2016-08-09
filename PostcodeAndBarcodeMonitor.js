'use strict';
/*global require*/

const Barcode = require('./core/Barcode');
const Postcode = require('./core/Postcode');
const postcode = new Postcode();
const barcode  = new Barcode();

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/barcode', function (request, response) {
    response.send(""+barcode.transform(request.query.code));
});
app.get('/postcode', function (request, response) {

    response.send(postcode.transform(request.query.code));
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host,port);
});