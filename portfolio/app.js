/**
 * @fileOverview Server file that handles all the requests from the web app and mobile app.
 * @author Hozaifa Abdalla
 * @version 1.0.0
 * @module beacon js
 */

/* LIBRARY IMPORTS */
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require("body-parser");

/* Express Body Parser*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* Serving static files*/
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));
app.use('/pdf', express.static('pdf'));
app.use('/ico', express.static('ico'));
/****************************************
 *      HTTP REQUEST HANDLERS           *
 ****************************************/

/**
 * GET Request handler for '/atm'
 * Sends the client the atm file.
 * @function
 * @param {string} - The string url for the handler
 * @param {callback} - The callback function
 * @module beacon js
 */
app.get('/', function(req, res) {
    fs.readFile('index.html', 'utf8', function(err, data) {
        if (!err) res.send(data);
        else return console.log(err);
    });
});

/* Listens on the Server Port */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
    console.log('App listening at http://%s:%s', server.address().address, server.address().port);
});
