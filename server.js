/**
 * Created by edgun_000 on 2014-12-25.
 */
// Core modules
var http = require("http");
var express =require("express");
var app = express();

// App modules
var controllers = require("./controllers");

// setup the view engine
app.set("view engine", "vash");

// setup static file serving
app.use(express.static(__dirname + "/public"));

// setup controllers
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);