// includes 2 routes
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET route is to survey
app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// root route leading to home.html
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

