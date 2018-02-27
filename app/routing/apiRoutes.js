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
    console.log(newUser);
  
    for (var i = 0; i < friends.length; i++) {
  
        var difference = 0;
        // create a variable difference starting at zero
        // within this loop through each user's score
        for (var j=0; j<newUser.scores[j].length; i++){
            //find absolute value of the difference between user score and stored friend score 
        }
        // if this value is the new smallest difference, put this in variable
        // send whatever sits in the smallest difference variable to the modal once loop is done
    }
    // send that user's photo and name to the modal div on survey.html
    friends.push(newUser);
});
};
