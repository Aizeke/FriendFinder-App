var displayBestMatch = function (score) {
    
    $.get("/api/friends", function (data) {
        
        for(var i = 0; i < data.length; i++){
            

        }

        // needs work on
        var bestMatch;
        var totalDifference = 50;

        for (var i = 0; i < personList.length; i++) {
            for (var j = 0; j < newPerson.scores.length; j++) {
                var difference;
                difference += Math.abs(newPerson.scores[j] - personList[i].scores[j]);
                if (totalDifference < difference) {
                    bestMatch = personList[i].name;
                    difference = 0;
                    totalDifference = difference;
                }
            }
        }
    })
}

var newFriend = {};

$(".submission").on("click", function (event) {
    event.preventDefault();

    var fullName = $('#inputName').val().trim();
    var url = $('#inputImage').val().trim();
    var answers = [$('#q-1').val(),
    $('#q-2').val().trim(),
    $('#q-3').val().trim(),
    $('#q-4').val().trim(),
    $('#q-5').val().trim(),
    $('#q-6').val().trim(),
    $('#q-7').val().trim(),
    $('#q-8').val().trim(),
    $('#q-9').val().trim(),
    $('#q-10').val().trim()];

    if (fullName === "" || url === "") {
        alert("Name or Photo Feild cannot be left blank!");
    } else {
        newFriend = {
            name: fullName,
            photo: url,
            scores: answers
        }

        console.log(newFriend);

        displayBestMatch(answers);

        $.post("/api/friends", JSON.stringify(newFriend));
    }
});