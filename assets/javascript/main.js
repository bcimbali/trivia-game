$(document).ready(function() {

    // global variables

    // Question data

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


    // Functions

    function showTotals() {
        $('<div>Correct Answers: ' + answersGuessedCorrect + '</div>').appendTo('.js-main-section');
        $('<div>Incorrect Answers: ' + answersGuessedIncorrect + '</div>').appendTo('.js-main-section');
        $('<div>Unanswered: ' + answersUnanswered + '</div>').appendTo('.js-main-section');
    }

    function startGame() {
        // Hide the start button
        $('.js-start').css('visibility', 'hidden');
        // Make the stop button visible
        $('.js-stop').show();
        // Looping thru the length of the questions, add a new question into a new div, loop thru all of
        // the possible answers in the answer array, add a new radio button
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
                for (var j = 0; j < questions[i].answer.length; j++) {
                    $('.js-questions').append('<input type="radio" value="' + questions[i].answer[j] + '"name="'+ i + '">' + questions[i].answer[j] + '</input>' );
                }
            $('.js-questions').append('<br><hr>');
            // loop through answers
            // $('.js-answers').append('<input type="radio">'+ questions[i].answer[0] +'</input>');
        }
    }

    function stopGame() {

        $('input:checked').each(function() {
            // if value = correct quesiton answer add 1 to score
            let answerChecked = $(this).val();
                if (answerChecked === questions[$(this).attr('name')].correctAnswer) {
                    console.log('correct');
                    answersGuessedCorrect++;
                    console.log('Answers Corect: ' + answersGuessedCorrect);
                }
                else {
                    console.log('wrong');
                    answersGuessedIncorrect++;
                    console.log('Answers Incorrect: ' + answersGuessedIncorrect);
                }
        $('.js-main-section').children().hide();
            // console.log($(this).val());
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
    }




    // events

        // On page load, show click to start button.

        $('.js-start').on('click', function() {
            // execute instructions
            startGame();
        });

        // On button click, Pages loads with trivia questions and timer starts counting down with 120 seconds.

        $('.js-stop').on('click', function() {
            // execute instructions
            stopGame();
            $(this).css('visibility', 'hidden');
            showTotals();
        });

        // Between 5-10 questions load on the page and each question has 4 radio buttons.

        // User clicks radio button for each answer to a question

        // User clicks done button, and it submits the answers and evaluates questions right, questions wrong, and unanswered. Displays them on a page.


        // If timer runs out, the form is submited and evaluates questions right, wron and unanswered. Displays them on a page.



});




