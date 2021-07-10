var startBtnEl = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var timer = document.getElementById('timer')
var timerContainer = document.getElementById('timer-container')

startBtnEl.addEventListener('click', startGame);

function startGame() {
    console.log('Quiz Started!');
    // when the 'start quiz!' button is clicked, that button disappears, and the question + answer buttons appear.
    startBtnEl.classList.add('hide');
    questionContainer.classList.remove('hide');
    timerContainer.classList.remove('hide');
    // the timer starts a countdown.

    // the question is chosen randomly and displayed with corresponding answers.
}

function nextQuestion () {

}

function selectAnswer () {
    // this function will verify chosen answer: if true, add point + nextQuestion function. if false, deduct time from timer + nextQuestion function.
}


var questions = [
    // this is where the questions will be stored as an array and randomly chosen.
    {
        question: 'what is 2+2?', 
        answers: [
            {text: '4', correct: true}, 
            {text: '22', correct: false}
        ]
    }


]



// this the time on the clock at the start of the quiz.
var secondsLeft = 61;

// the countdown timer function - executed when the Start Quiz button is clicked
function countdownTimer() {
    // created a variable for the timer with the setInterval timing event.
    // the first parameter is a function that decrements the time and updates on the page.
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
        // the second parameter is how often between each execution: once every second.
    }, 1000);
}

// endQuiz function - gets rid of the timer from being displayed, and brings up highscores with input fields.
function endQuiz() {
    timer.textContent = '';
}