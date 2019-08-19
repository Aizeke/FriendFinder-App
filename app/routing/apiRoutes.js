var friends = require("../data/friends");

module.exports = function (app) {

    // Get Friends Object.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
    // Sending the body to the friends arr
    app.post("/api/friends", function(req, res){
        friends.push(req.body);
    })
}