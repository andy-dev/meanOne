var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("hello from server")
})

app.listen(3000);
console.log("server running in port 3000")