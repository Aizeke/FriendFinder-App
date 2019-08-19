module.exports = function (app) {
    // Get the Home Page HTML.
    app.get('/', function (req, res) {
        res.sendFile("home.html", {root: './app/public'});
    });
    // Get the Survey HTML page. 
    app.get("/survey", function (req, res) {
        res.sendFile("survey.html", {root: './app/public'})
    });
    
    app.get("/logic.js", function(req, res){
        res.sendFile("logic.js", {root: "./"});
    })
}