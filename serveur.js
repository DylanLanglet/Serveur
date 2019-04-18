var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.sendfile(__dirname+'/index.html')
});

app.get("/status", function(req, res) {
    res.send("ok");
});

var port = 8080;
app.listen(port, function () {
    console.log("Expresse node.js serveur running on port 8080");
});