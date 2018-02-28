var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

// css won't show without this
app.use(express.static(path.join(__dirname, './app/public')));
// this comes from bodyparser documentation
// extended: true to allow arrays
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


// this file requires basic npm packages
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


