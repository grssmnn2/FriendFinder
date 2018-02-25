// includes 2 routes
var path = require("path");

// GET route is to survey
module.exports = function(app){
app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// root route leading to home.html
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

};


