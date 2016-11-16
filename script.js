var pickedNumbs = [];
var numberBtns = $(".btn");
var acceptBtn = $("#accept");

function poolOfNumbers() {
    var totalNumbers = [];
    for (var i = 1; i <= 49; i += 1) {
        totalNumbers.push(i);
    };
    var randomNumb = [];
    for (var j = 0; j < 6; j += 1) {
        randomNumb[j] = totalNumbers.splice(Math.ceil(Math.random() * 48), 1, totalNumbers[Math.ceil(Math.random() * 48)]);
    };
    $(".winning-numbers-msg").html("<b>Wylosowane liczby:</b> " + randomNumb[0] + " " + randomNumb[1] + " " + randomNumb[2] + " " + randomNumb[3] + " " + randomNumb[4] + " " + randomNumb[5]);
    var score = [];
    for (var s = 0; s < 6; s += 1) {
        score[s] = pickedNumbs.indexOf(randomNumb[s][0]);
    }
    var totalScore = 0;
    for (var t = 0; t < score.length; t += 1) {
        if (score[t] > -1) {
            totalScore++;
        }
    };
    if (totalScore < 2) {
        $(".score-msg").html("Niestety nie udało się, spróbuj szczęścia ponownie!").css("color", "red");
    }
    else {
        $(".score-msg").html("Gratulacje! Trafiłeś: " + totalScore).css("color", "green");
    }
};
numberBtns.each(function () {
    $(this).click(function () {
        $(this).prop("disabled", true).addClass("active");
        pickedNumbs.push(parseInt($(this).val()));
        if (pickedNumbs.length == 6) {
            numberBtns.prop("disabled", true);
            acceptBtn.prop("disabled", false);
        };
    });
    function rollNumbers() {
        $(".user-numbers-msg").html("<b>Twoje liczby:</b> " + pickedNumbs[0] + " " + pickedNumbs[1] + " " + pickedNumbs[2] + " " + pickedNumbs[3] + " " + pickedNumbs[4] + " " + pickedNumbs[5]);
        poolOfNumbers();
    };
    acceptBtn.click(function () {
        $("#message-box").css("display", "block");
        $("#instruction").css("display", "none");
        $(this).prop("disabled", true);
        rollNumbers();
    });
    $("#btn-again").click(function () {
        rollNumbers();
    });
    $("#btn-againnew").click(function () {
        window.location.reload(true);
    });
    
});