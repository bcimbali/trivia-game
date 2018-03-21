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
        },
        {
            "question": "Which color most frequently makes people dizzy?",
            "answer": ["Yellow", "Orange", "Pink", "White"],
            "correctAnswer": "Yellow", 
        },
        {
            "question": "Which color makes you appear powerful?",
            "answer": ["Brown", "Blue", "Black", "Red"],
            "correctAnswer": "Black", 
        },
        {
            "question": "For sports team jerseys, which color increases the winning chances?",
            "answer": ["White", "Yellow", "Black", "Red"],
            "correctAnswer": "Red", 
        },
        {
            "question": "Based on several studies, the safest car color is...?",
            "answer": ["White", "Gray", "Black", "Orange"],
            "correctAnswer": "White", 
        },
        {
            "question": "Which color is hypothesized to impair performance on achievement tasks (like test taking)?",
            "answer": ["Black", "Red", "Blue", "Orange"],
            "correctAnswer": "Red", 
        },
        {
            "question": "When you suddenly switch off the lights on your room, just before complete darkness takes over, you’ll see a dark gray color which experts call...?",
            "answer": ["Glaucous", "Eigengru", "Wenge", "Xanadu"],
            "correctAnswer": "Eigengru", 
        },
        {
            "question": "It is easier to remember something if it is in...?",
            "answer": ["Back&White", "Color"],
            "correctAnswer": "Color", 
        },
    ];


    let answersGuessedCorrect = 0;
    let answersGuessedIncorrect = 0;
    let answersUnanswered = 0;
    let intervalId;
    let time = 60;
    let userAnswers = [];


    // Functions ////////////////////////////////////////////////////////////////////////////

    // Function to decrease the countdown
    function decrement() {
        //  Decrease time by one.
        time--;
        //  Show the number in the js-countdown span tag.
        $('.js-countdown').text('00:' + time);
        //  Once number hits zero...
        if (time === 0) {
            //  ...Stop the game.
            stopGame();
        }
      }

    // Displays the totals at the end of the game
    function displayTotals() {
        $('<div class="norm-font purple text-large">All Done!</div>').appendTo('.js-main-section');
        $('<div class="norm-font purple text-large">Correct Answers: ' + answersGuessedCorrect + '</div>').appendTo('.js-main-section');
        $('<div class="norm-font purple text-large">Incorrect Answers: ' + answersGuessedIncorrect + '</div>').appendTo('.js-main-section');
        $('<div class="norm-font purple text-large">Unanswered: ' + answersUnanswered + '</div>').appendTo('.js-main-section');
    }

    // Hides the start button
    function hideStartButton() {
        $('.js-start').hide();
    }

    // Function looping thru the length of the questions, add a new question into a new div, loop thru all of
    // the possible answers in the answer array, add a new radio button
    function populateQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
                for (var j = 0; j < questions[i].answer.length; j++) {
                    $('.js-questions').append('<input class="pointer" type="radio" value="' + questions[i].answer[j] + '"name="'+ i + '">' + questions[i].answer[j] + '</input>' );
                }
            $('.js-questions').append('<br><hr>');
        }
    }

    // Runs the countdown clock
    function runClock() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // Shows the stop button
    function showStopButton() {
        $('.js-stop').show();
    }

    // Displays the timer/countdown div
    function showTimer() {
        $('.js-timer').show();
    }

    // Starts the game
    function startGame() {
        hideStartButton();
        populateQuestions();
        runClock();
        showStopButton();
        showTimer();
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
        }); 

        $('.js-main-section').children().hide();
        let totalAnswersAttempted = answersGuessedCorrect + answersGuessedIncorrect;
        answersUnanswered = questions.length - totalAnswersAttempted;
        displayTotals();
    }

    // Events ////////////////////////////////////////////////////////////////

        // On page load, show click to start button.

        $('.js-start').on('click', function() {
            startGame();
        });


        $('.js-stop').on('click', function() {
            stopGame();
            $(this).css('visibility', 'hidden');
        });

});
