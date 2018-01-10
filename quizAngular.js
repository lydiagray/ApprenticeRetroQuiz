// JavaScript source code

var app = angular.module('retroQuiz', []);
app.controller('retroQuizCtrl', function ($scope) {
    $scope.startPage = true;
    $scope.showQuestionOne = false;
    var count = 0;

    $scope.onStartPageSubmit = function () {
        $scope.startPage = false;
        if ($scope.teamName) {
            $scope.showQuestionOne = true;
    }
            else {
            $scope.startPage = true;
            $scope.showQuestionOne = false;
            var missingTeamName = document.getElementById("missingTeamName");
            missingTeamName.innerHTML = "You must enter a team name to continue!";
        }
    };

    $scope.onQuestionOneSubmit = function () {
        $scope.showQuestionOne = false;
        $scope.showQuestionTwo = true;
    };

    $scope.onQuestionTwoPrevious = function () {
        $scope.showQuestionTwo = false;
        $scope.showQuestionOne = true;
    };

    $scope.onQuestionTwoSubmit = function () {
        $scope.showQuestionTwo = false;
        $scope.showQuestionThree = true;
    };

    $scope.onQuestionThreePrevious = function () {
        $scope.showQuestionThree = false;
        $scope.showQuestionTwo = true;
    };

    $scope.onQuestionThreeSubmit = function () {
        $scope.showQuestionThree = false;
        $scope.showQuestionFour = true;
    };

    $scope.onQuestionFourPrevious = function () {
        $scope.showQuestionFour = false;
        $scope.showQuestionThree = true;
    };

    $scope.onQuestionFourSubmit = function () {
        $scope.showQuestionFour = false;
        $scope.showQuestionFive = true;
    };

    $scope.onQuestionFivePrevious = function () {
        $scope.showQuestionFive = false;
        $scope.showQuestionFour = true;
    };

    $scope.onQuestionFiveSubmit = function () {
        $scope.showQuestionFive = false;
        $scope.showQuestionSix = true;
    };

    $scope.onQuestionSixPrevious = function () {
        $scope.showQuestionSix = false;
        $scope.showQuestionFive = true;
    };

    $scope.onQuestionSixSubmit = function () {
        $scope.showQuestionSix = false;
        $scope.showQuestionSeven = true;
    };

    $scope.onQuestionSevenPrevious = function () {
        $scope.showQuestionSeven = false;
        $scope.showQuestionSix = true;
    };

    $scope.onQuestionSevenSubmit = function () {
        $scope.showQuestionSeven = false;
        $scope.showQuestionEight = true;
    };

    $scope.onQuestionEightPrevious = function () {
        $scope.showQuestionEight = false;
        $scope.showQuestionSeven = true;
    };

    $scope.onQuestionEightSubmit = function () {
        $scope.showQuestionEight = false;
        $scope.showQuestionNine = true;
    };

    $scope.onQuestionNinePrevious = function () {
        $scope.showQuestionNine = false;
        $scope.showQuestionEight = true;
    };

    $scope.onQuestionNineSubmit = function () {
        $scope.showQuestionNine = false;
        $scope.showQuestionTen = true;
    };

    $scope.onQuestionTenPrevious = function () {
        $scope.showQuestionTen = false;
        $scope.showQuestionNine = true;
    };

    $scope.onQuestionTenSubmit = function () {
        $scope.showQuestionTen = false;
        $scope.showQuestionEleven = true;
    };

    $scope.onQuestionElevenPrevious = function () {
        $scope.showQuestionEleven = false;
        $scope.showQuestionTen = true;
    };

    $scope.onQuestionElevenSubmit = function () {
        $scope.showQuestionEleven = false;
        $scope.showQuestionTwelve = true;
    };

    $scope.onQuestionTwelvePrevious = function () {
        $scope.showQuestionTwelve = false;
        $scope.showQuestionEleven = true;
    };

    $scope.onQuestionTwelveSubmit = function () {
        $scope.showQuestionTwelve = false;
        $scope.showQuestionThirteen = true;
    };

    $scope.onQuestionThirteenPrevious = function () {
        $scope.showQuestionThirteen = false;
        $scope.showQuestionTwelve = true;
    };

    $scope.onQuestionThirteenSubmit = function () {
        $scope.showQuestionThirteen = false;
        $scope.showQuestionFourteen = true;
    };

    $scope.onQuestionFourteenPrevious = function () {
        $scope.showQuestionFourteen = false;
        $scope.showQuestionThirteen = true;
    };

    $scope.onQuestionFourteenSubmit = function () {
        $scope.showQuestionFourteen = false;
        $scope.showQuestionFifteen = true;
    };

    $scope.onQuestionFifteenPrevious = function () {
        $scope.showQuestionFifteen = false;
        $scope.showQuestionFourteen = true;
    };

    $scope.onQuestionFifteenSubmit = function () {
        $scope.showQuestionFifteen = false;
        $scope.showQuestionSixteen = true;
    };

    $scope.onQuestionSixteenPrevious = function () {
        $scope.showQuestionSixteen = false;
        $scope.showQuestionFifteen = true;
    };

    $scope.onQuestionSixteenSubmit = function () {
        $scope.showQuestionSixteen = false;
        $scope.showQuestionSeventeen = true;
    };

    $scope.onQuestionSeventeenPrevious = function () {
        $scope.showQuestionSeventeen = false;
        $scope.showQuestionSixteen = true;
    };

    $scope.onQuestionSeventeenSubmit = function () {
        $scope.showQuestionSeventeen = false;
        $scope.showQuestionEighteen = true;
    };

    $scope.onQuestionEighteenPrevious = function () {
        $scope.showQuestionEighteen = false;
        $scope.showQuestionSeventeen = true;
    };

    $scope.onQuestionEighteenSubmit = function () {
        $scope.showQuestionEighteen = false;
        $scope.showQuestionNineteen = true;
    };

    $scope.onQuestionNineteenPrevious = function () {
        $scope.showQuestionNineteen = false;
        $scope.showQuestionEighteen = true;
    };

    $scope.onQuestionNineteenSubmit = function () {
        $scope.showQuestionNineteen = false;
        $scope.showQuestionTwenty = true;
    };

    $scope.onQuestionTwentyPrevious = function () {
        $scope.showQuestionTwenty = false;
        $scope.showQuestionNineteen = true;
    };

    $scope.onQuestionTwentySubmit = function () {
        $scope.showQuestionTwenty = false;
        $scope.showQuestionTwentyone = true;
    };

    $scope.onQuestionTwentyonePrevious = function () {
        $scope.showQuestionTwentyone = false;
        $scope.showQuestionTwenty = true;
    };

    $scope.onQuestionTwentyoneSubmit = function () {
        $scope.showQuestionTwentyone = false;
        $scope.showQuestionTwentytwo = true;
    };

    $scope.onQuestionTwentytwoPrevious = function () {
        $scope.showQuestionTwentytwo = false;
        $scope.showQuestionTwentyone = true;
    };

    $scope.onQuestionTwentytwoSubmit = function () {
        $scope.showQuestionTwentytwo = false;
        $scope.showQuestionTwentythree = true;
    };

    $scope.onQuestionTwentythreePrevious = function () {
        $scope.showQuestionTwentythree = false;
        $scope.showQuestionTwentytwo = true;
    };

    $scope.onQuestionTwentythreeSubmit = function () {
        $scope.showQuestionTwentythree = false;
        $scope.showQuestionTwentyfour = true;
    };

    $scope.onQuestionTwentyfourPrevious = function () {
        $scope.showQuestionTwentyfour = false;
        $scope.showQuestionTwentythree = true;
    };

    $scope.onQuestionTwentyfourSubmit = function () {
        $scope.showQuestionTwentyfour = false;
        $scope.showQuestionTwentyfive = true;
    };

    $scope.onQuestionTwentyfivePrevious = function () {
        $scope.showQuestionTwentyfive = false;
        $scope.showQuestionTwentyfour = true;
    };

    $scope.onQuestionTwentyfiveSubmit = function () {
        $scope.showQuestionTwentyfive = false;
        $scope.showQuestionTwentysix = true;
    };

    $scope.onQuestionTwentysixPrevious = function () {
        $scope.showQuestionTwentysix = false;
        $scope.showQuestionTwentyfive = true;
    };

    $scope.onQuestionTwentysixSubmit = function () {
        $scope.showQuestionTwentysix = false;
        $scope.showQuestionTwentyseven = true;
    };

    $scope.onQuestionTwentysevenPrevious = function () {
        $scope.showQuestionTwentyseven = false;
        $scope.showQuestionTwentysix = true;
    };

    $scope.onQuestionTwentysevenSubmit = function () {
        $scope.showQuestionTwentyseven = false;
        $scope.showQuestionTwentyeight = true;
    };

    $scope.onQuestionTwentyeightPrevious = function () {
        $scope.showQuestionTwentyeight = false;
        $scope.showQuestionTwentyseven = true;
    };

    $scope.onQuestionTwentyeightSubmit = function () {
        $scope.showQuestionTwentyeight = false;
        $scope.showQuestionTwentynine = true;
    };

    $scope.onQuestionTwentyninePrevious = function () {
        $scope.showQuestionTwentynine = false;
        $scope.showQuestionTwentyeight = true;
    };

    $scope.onQuestionTwentynineSubmit = function () {
        $scope.showQuestionTwentynine = false;
        $scope.showQuestionThirty = true;
    };

    $scope.onQuestionThirtyPrevious = function () {
        $scope.showQuestionThirty = false;
        $scope.showQuestionTwentynine = true;
    };

    $scope.onQuestionThirtySubmit = function () {
        $scope.showQuestionThirty = false;
        if ($scope.questionOneAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTwoAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionThreeAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionFourAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionFiveAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionSixAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionSevenAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionEightAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionNineAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTenAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionElevenAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionTwelveAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionThirteenAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionFourteenAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionFifteenAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionSixteenAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionSeventeenAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionEighteenAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionNineteenAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionTwentyAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTwentyoneAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionTwentytwoAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTwentythreeAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionTwentyfourAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionTwentyfiveAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionTwentysixAnswer == "1") {
            count = count + 1;
        }
        if ($scope.questionTwentysevenAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTwentyeightAnswer == "3") {
            count = count + 1;
        }
        if ($scope.questionTwentynineAnswer == "2") {
            count = count + 1;
        }
        if ($scope.questionThirtyAnswer == "1") {
            count = count + 1;
        }
        $scope.end = true;
        var teamName = document.getElementById("teamName")
        teamName.innerHTML = $scope.teamName;
        var finalScore = document.getElementById("finalScore");
        finalScore.innerHTML = count;
    
        window.location.href = "mailto:lydia.gray@stockport.gov.uk?subject=Quiz request&body="+$scope.teamName + " score is " + count;

    };
});

