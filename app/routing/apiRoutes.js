var path = require("path");
var friends = require("../data/friends.js");

// retrieve/show friend information when user requests this pathway
app.get("/api/friends", function(req, res) {
    // this route will display JSON of all possible friends
    res.json(friends);

});

// send data from input to friends.js to be stored as JSON
// store information at this route as users finish survey
app.post("/api/friends", function(req, res){
    // POST route /api/friends used to handle incoming survey results
    // this route handles compatibility logic
    // req.body is equal to the JSON post sent from the user
    var newUser = req.body;
    console.log(newUser);
    friends.push(newUser);
    res.json(newUser);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});