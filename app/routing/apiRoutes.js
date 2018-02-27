var friends = require("../data/friends");

// retrieve/show friend information when user requests this pathway
module.exports = function(app){

app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
    res.json(friends);
});

// add information to the /api/friends route as users finish survey
app.post("/api/friends", function(req, res){
    // req.body is equal to the entire JSON post sent from the user
    var newUser = req.body; 
//   loop through the entire friends list
    for (var i = 0; i < friends.length; i++) {  
        var difference;
        var maxDiff= 1000;
        var bestMatch;
        var bestMatchPhoto;
        // within this loop through each friends' score array
        for (var j=0; j<newUser.scores[j].length; i++){
            //find absolute value of the difference between user score and friend score 
            difference = Math.abs(newUser.scores[j]-friends[i].scores[j]);
        }
        // if this value is the new smallest difference,
        if(difference < maxDiff){  
            // put this in variable maxDiff
            maxDiff = difference;
            // store that specific friend match in the bestMatch variable
            bestMatch = friends[i].name;
            bestMatchPhoto = friends[i].photo;
        }
    }
    // add new user to the friends array
    friends.push(newUser);
});


};
