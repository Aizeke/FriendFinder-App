var displayBestMatch = function (score) {

    $.get("/api/friends", function (data) {

        // needs work on
        var bestMatch = {
            difference: 50,
            name: "",
            image: ""
        };

        //diff calc
        for (var i = 0; i < data.length; i++) {

            var difference = 0;

            for (var j = 0; j < score.length; j++) {
                difference += Math.abs(score[j] - data.scores[j]);
            }

            if (difference < bestMatch.difference) {
                bestMatch.difference = difference;
                bestMatch.name = data.name;
                bestMatch.image = data.photo;
            }
        }

        alert(`Your Best Match is: ${bestMatch.name}\n
        With a difference of: ${bestMatch.difference}\n
        Photo: ${bestMatch.image}`);
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

        $.post({ url: "/api/friends", contentType: 'application/json' }, JSON.stringify(newFriend));

        fullName.val("");
        url.val("");
    }
});