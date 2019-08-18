var express = require('express');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get the Home Page HTML.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public", "home.html"));
});
// Get the Survey HTML page. 
app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "./app/public", "survey.html"))
});

// Get Friends Object.
app.get("/api/friends", function (req, res) {
    return res.send("./friends.js");
});

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});