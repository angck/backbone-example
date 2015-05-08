// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/dist'));
app.use('/', express.directory('/dist'));
app.get('/', function(req, res) {

});

/*
 _.each(config.modules, function(module, moduleName) {
 console.log('MOdule', module);
 if(module.routes) {
 _.each(module.routes, function(methodName, route) {
 server.get(route, function(req, res) {
 res.sendFile('app/index.html');
 });
 });
 }
 });
 */
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
