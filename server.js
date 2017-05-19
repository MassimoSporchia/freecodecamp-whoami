var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.redirect('/api/whoami');
});

app.get('/api/whoami',function(req,res){
   var uagent = req.headers['user-agent']; 
   var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
   var locale = req.headers['accept-language'];
   
   res.send({ipaddress: ip, language: locale, software: uagent});
});

var port = process.env.PORT || 8080;
app.listen(port);