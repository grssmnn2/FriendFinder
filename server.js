var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

// this comes from bodyparser documentation
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


// this file requires basic npm packages





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


