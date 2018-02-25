var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
});

app.post("/api/friends", function(req, res){
    // POST route /api/friends used to handle incoming survey results
// this route handles compatibility logic
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});