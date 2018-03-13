// I just want to show 2 questions and record corrects, incorrects and unanswered.

$(document).ready(function() {

    // global variables


    // Question data

    let questions = [ 
        {
            "question": "What is Marges maiden name?",
            "answer": ["Smith", "Buvier", "Bubble", "Chip"],
            "correctAnswer": "Buvier", 
        },
        {
            "question": "Where does Homer work?",
            "answer": ["Library", "Power Plant", "McDonalds", "Sears"],
            "correctAnswer": "Power Plant",  
        },
        {
            "question": "What instrument does Lisa play?",
            "answer": ["Violin", "Oboe", "Cowbell", "Sax"],
            "correctAnswer": "Sax",  
        }
    ]

    let userAnswers = [];


    // functions
    function startGame() {
        // Populate questions div
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
                    console.log('woohoo');
                }
                else {
                    console.log('doh');
                }
            
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
        });

        // Between 5-10 questions load on the page and each question has 4 radio buttons.

        // User clicks radio button for each answer to a question

        // User clicks done button, and it submits the answers and evaluates questions right, questions wrong, and unanswered. Displays them on a page.


        // If timer runs out, the form is submited and evaluates questions right, wron and unanswered. Displays them on a page.



});




