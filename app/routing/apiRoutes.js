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
    console.log(newUser);
    //   loop through the entire friends list
    var difference = 0;
    var minDiff = 500;
    var bestMatch;
    var bestMatchPhoto;
    for (var i = 0; i < friends.length; i++) {
      // within this loop through each friends' score array
      for (var j = 0; j < friends[i].scores.length; i++) {
        //find absolute value of the difference between user score total and friend score total
        var reducedFriend = friends[i].scores.reduce(function(total, nextInput) {
          return total + nextInput;
        });
        var reducedUser = newUser.scores.reduce(function(total, nextInput) {
          return total + nextInput;
        });
        difference = Math.abs(reducedUser - reducedFriend);
    }
        // if this value is the new smallest difference,
        if (difference < minDiff) {
          // put this in variable minDiff
          minDiff = difference;
          // store that specific friend match in the bestMatch variable
          bestMatch = friends[i].name;
          bestMatchPhoto = friends[i].photo;
      }
    }
    // add new user to the friends array AFTER finding match so user doesn't match with themselves
    friends.push(newUser);
  });
};
