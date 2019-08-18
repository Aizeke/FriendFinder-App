var personList = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: [1, 5, 4, 4, 2, 4, 5, 2, 3, 4]
}];

var displayBestMatch = function (person) {

}

$(".submission").on("click", function (event) {
    event.preventDefault();
    var bestMatch;
    var totalDifference = 50;

    var newPerson = {
        name: $('#inputName').val().trim(),
        photo: $('#inputImage').val().trim(),
        scores: [$('#q-1').val(),
        $('#q-2').val(),
        $('#q-3').val(),
        $('#q-4').val(),
        $('#q-5').val(),
        $('#q-6').val(),
        $('#q-7').val(),
        $('#q-8').val(),
        $('#q-9').val(),
        $('#q-10').val()]
    }
     console.log(newPerson);
    // needs work on

    for (var i = 0; i < personList.length; i++) {
        totalDifference = 0;
        for (var j = 0; j < personList.length; j++) {
            var difference;
            difference += Math.abs(newPerson.scores[j] - personList[i].scores[j]);
            if (totalDifference < difference) {
                bestMatch = personList[i].name;
            }
        }
    }

    displayBestMatch(bestMatch);

    personList.push(newPerson);
});

$(".view-survey").on("click", function (event) {
    event.preventDefault();
    app.get('/survey', function (req, res) {

        res.sendFile("/survey.html", { root: __dirname });
    });
})