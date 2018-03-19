$(document).ready(function() {

    // Global Variables //////////////////////////////////////////////////////////////////////

    // Question data as objects in an array:
    let questions = [ 
        {
            "question": "According to various international studies, the worlds most popular color is...",
            "answer": ["Red", "Blue", "Green", "White"],
            "correctAnswer": "Blue", 
        },
        {
            "question": "Studies show that the first color a baby sees is...",
            "answer": ["Red", "Blue", "Yellow", "Black"],
            "correctAnswer": "Red",  
        },
        {
            "question": "What color is most effective at suppressing anger and anxiety?",
            "answer": ["Blue", "Green", "Brown", "Pink"],
            "correctAnswer": "Pink",  
        }
    ];

    let userAnswers = [];
    let answersGuessedCorrect = 0;
    let answersGuessedIncorrect = 0;
    let answersUnanswered = 0;


    // Functions ////////////////////////////////////////////////////////////////////////////

    // Displays the totals at the end of the game

    // Function looping thru the length of the questions, add a new question into a new div, loop thru all of
    // the possible answers in the answer array, add a new radio button
    function populateQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
                for (var j = 0; j < questions[i].answer.length; j++) {
                    $('.js-questions').append('<input type="radio" value="' + questions[i].answer[j] + '"name="'+ i + '">' + questions[i].answer[j] + '</input>' );
                }
            $('.js-questions').append('<br><hr>');
        }
    }

    function displayTotals() {
        $('<div>All Done!</div>').appendTo('.js-main-section');
        $('<div>Correct Answers: ' + answersGuessedCorrect + '</div>').appendTo('.js-main-section');
        $('<div>Incorrect Answers: ' + answersGuessedIncorrect + '</div>').appendTo('.js-main-section');
        $('<div>Unanswered: ' + answersUnanswered + '</div>').appendTo('.js-main-section');
    }

    function showStopButton() {
        $('.js-stop').show();
    }

    function hideStartButton() {
        $('.js-start').hide();
    }

    // Starts the game
    function startGame() {
        hideStartButton();
        showStopButton();
        populateQuestions();
    }

    // Stops the game
    function stopGame() {

        $('input:checked').each(function() {
            // if value = correct quesiton answer add 1 to score
            // console.log($(this));
            let answerChecked = $(this).val();
                if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
                    // console.log('correct');
                    answersGuessedCorrect++;
                    // console.log('Answers Corect: ' + answersGuessedCorrect);
                }
                else {
                    // console.log('wrong');
                    answersGuessedIncorrect++;
                    // console.log('Answers Incorrect: ' + answersGuessedIncorrect);
                }                
            $('.js-main-section').children().hide();
            // console.log($(this).val());
        }); 

        let totalAnswersAttempted = answersGuessedCorrect + answersGuessedIncorrect;
        answersUnanswered = questions.length - totalAnswersAttempted;
    }




    // Events ////////////////////////////////////////////////////////////////

        // On page load, show click to start button.

        $('.js-start').on('click', function() {
            startGame();
        });


        $('.js-stop').on('click', function() {
            stopGame();
            $(this).css('visibility', 'hidden');
            displayTotals();
        });

        // If timer runs out, the form is submited and evaluates questions right, wrong and unanswered. Displays them on a page.

});




// $.each($('input[name="a0"]:checked')), function() {
        //     $(this);
        // }
        // for (var i; i < questions.length; i++) {
        //     for (var b; b < questions[i].answer.length; b++) {
        //        if ($('input[name=a' + i + ']:checked')) {

        //             console.log('')
        //         }
        //     }
        // }