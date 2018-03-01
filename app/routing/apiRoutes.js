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
      for (var i = 0; i < res.length; i++) {
      // within this loop through each friends' score array
      var difference = 0;
      for (var j = 0; j < res[i].scores[j].length; j++) {
        //find absolute value of the difference between user score total and friend score total
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var reducedFriend = res[i].scores[j];
        var reducedUser = newUser.scores[j];
        reducedFriend.reduce(reducer);
        reducedUser.reduce(reducer);
        difference = Math.abs(reducedUser - reducedFriend);
    }
        // if this value is the new smallest difference,
        if (difference < minDiff) {
          // put this in variable minDiff
          minDiff = difference;
          // store that specific friend match in the bestMatch variable
          bestMatch = res[i].name;
          bestMatchPhoto = res[i].photo;
      }
    }
    // add new user to the friends array AFTER finding match so user doesn't match with themselves
    friends.push(newUser);

    // send best match name + photo to modal on survey page

  });
};
