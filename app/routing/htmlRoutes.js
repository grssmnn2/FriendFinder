// includes 2 routes
var path = require("path");
var express = require("express");

module.exports = function(app){

 // if survey page is requested, show survey page
app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// if root page is requested, show home page
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

};


