var startBtnEl = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var timer = document.getElementById('timer')

startBtnEl.addEventListener('click', startGame);

function startGame() {
    console.log('Started!');
    // when the 'start quiz!' button is clicked, that button disappears, and the question + answer buttons appear.
    startBtnEl.classList.add('hide');
    questionContainer.classList.remove('hide');
    timer.classList.remove('hide');
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

// the countdown timer function - executed when the Start Quiz button is clicked

// this the time on the clock at the start of the quiz.
var secondsLeft = 60;

function countdownTimer() {
        
}