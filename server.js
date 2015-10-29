var express = require('express');
var app = express();

// app.get('/', function(req, res){
//     res.send("hello from server")
// })

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res){
    console.log(" I received get req")
})

app.listen(3000);
console.log("server running in port 3000")