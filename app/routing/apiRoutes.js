var path = require("path");
var friends = require("../data/friends");

// retrieve/show friend information when user requests this pathway
module.exports = function(app){
app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
    res.json(friends);
    res.send("this page is working.");

});

// send data from input to friends.js to be stored as JSON
// store information at this route as users finish survey
app.post("/api/friends", function(req, res){
    // POST route /api/friends used to handle incoming survey results
    // this route handles compatibility logic
    // req.body is equal to the JSON post sent from the user (uses body parser npm to show correctly)
    var newUser = req.body;
    var userScore = newUser.scores;
    console.log(newUser.scores);
    console.log(newUser);
    friends.push(newUser);
    res.json(newUser);
});
};
