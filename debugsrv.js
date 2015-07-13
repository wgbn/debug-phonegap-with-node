#!/usr/bin/nodejs
var jsonBody = require("body/json");
var http = require("http");
 
http.createServer(function (req, res) {
    jsonBody(req, res, function (err, body) {
        if (err) {
            res.statusCode = 500;
            return res.end("NO U");
        }
        console.log('DEBUG '+body.debug.tipo.toUpperCase()+':', body.debug.msg);
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(body));
    });
}).listen(3005);