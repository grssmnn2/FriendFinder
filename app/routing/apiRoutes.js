var path = require("path");
var friends = require("../data/friends");

// retrieve/show friend information when user requests this pathway
module.exports = function(app){
app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
    res.json(friends);
});

// send data from input to friends.js to be stored as JSON
// store information at this route as users finish survey
app.post("/api/friends", function(req, res){
    // req.body is equal to the JSON post sent from the user (uses body parser npm to show correctly)
    var newUser = req.body;
    // store the scores array for each user in a variable
    var userScore = newUser.scores;
    // add new user to the friends array
    friends.push(newUser);
    // send that data to the /api/friends page
    res.json(newUser);
    // loop through the users and compare all scores to find stored user that most matches the current user's data
    for (var i=0; i<friends.length; i++){

    }
    // send that user's photo and name to the modal div on survey.html
});
};
