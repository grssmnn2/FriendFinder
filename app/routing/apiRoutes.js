var friends = require("../data/friends");

// retrieve/show friend information when user requests this pathway
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
    res.json(friends);
  });

  // add information to the /api/friends route as users finish survey
  app.post("/api/friends", function(req, res) {
    // req.body is equal to the entire JSON post sent from the user
    var newUser = req.body;
    var minDiff = 500;
    var bestMatch;
    var bestMatchPhoto;
 
     //   loop through the entire friends list    
      for (var i = 0; i < friends.length; i++) {
        var difference = 0;
      // within this loop through each friends' score array   
      for (var j = 0; j < friends[i].scores.length; j++) {
        //find absolute value of the difference between user score total and friend score total
        var friendScores = friends[i].scores[j];
        var userScores = newUser.scores[j];
        console.log(userScores);
        console.log(friendScores);
        // find the absolute value of each individual score - friend score and add them all into difference
        difference += Math.abs(userScores - friendScores);
        
    }
    console.log(difference);
        // if this value is the new smallest difference,    
        if (difference <= minDiff) {
          // put this in variable minDiff
          minDiff = difference;
          // store that specific friend match in the bestMatch variable
          bestMatch = friends[i].name;
          bestMatchPhoto = friends[i].photo;
      }
      console.log(bestMatch);
      
    }
    // add new user to the friends array AFTER finding match so user doesn't match with themselves
    friends.push(newUser);

    // send best match name + photo to modal on survey page using object and
    res.json({"bestMatch": bestMatch, "bestMatchPhoto": bestMatchPhoto});
  });
};
