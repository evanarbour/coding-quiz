var startBtnEl = document.getElementById('start-btn')
var nextBtnEl = document.getElementById('next-btn')
var restartBtnEl = document.getElementById('restart-btn')
var questionContainer = document.getElementById('question-container')
var timer = document.getElementById('timer')
var timerContainer = document.getElementById('timer-container')
var questionEl = document.getElementById('question')
var answerButtonEl = document.getElementById('answer-buttons')
var leaderBoardContainer = document.getElementById('input-container')
var highScoreList = document.getElementById('high-score-list')
var randomQuestions
var randomQuestionIndex
var playerScore = 0;
var submitButton = document.getElementById('submit-button')
var playerInput = document.getElementById('input-field')

startBtnEl.addEventListener('click', startGame);
nextBtnEl.addEventListener('click', () => {
    randomQuestionIndex++;
    nextQuestion();
});

function startGame() {
    playerScore = 0;
    // when the 'start quiz!' button is clicked, that button disappears, and the question + answer buttons appear.
    startBtnEl.classList.add('hide');
    questionContainer.classList.remove('hide');
    timerContainer.classList.remove('hide');
    // the timer starts a countdown.
    countdownTimer();
    // this randomizes the 'questions' array so each time someone plays, the questions are in a different order.
    randomQuestions = questionsArray.sort(()=> Math.random() - 0.5);
    randomQuestionIndex = 0;
    // the question is chosen randomly and displayed with corresponding answers via the nextQuestion function.
    nextQuestion();
}

// this function displays a random question & clears the previous question
function nextQuestion () {
    clearQuestionCard();
    displayQuestion(randomQuestions[randomQuestionIndex]);

}

// this function reassigns the randomly chosen question from questionsArray to the HTML element on the page
function displayQuestion(currentQuestion) {
    questionEl.innerText = currentQuestion.question;
    // & creates a button for each answer of that question
        currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // check to see if the answer is correct, if it is, assign it a data-set attribute of 'correct'
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // add an eventListener to kick off the selectAnswer function
        button.addEventListener('click', selectAnswer);
        // add the created buttons to the HTML 
        answerButtonEl.appendChild(button);
    });
}

// this function clears the card of previous buttons.
function clearQuestionCard() {
    // the 'while loop' checks to see if the answerButtonEl has a firstChild.
    while (answerButtonEl.firstChild) {
        // if it does, remove it.
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    };
}

 // this function will verify chosen answer: if true, add point + nextQuestion function. if false, deduct time from timer + nextQuestion function.
function selectAnswer (event) {
   var selectedButton = event.target; 
   var correct = selectedButton.dataset.correct;
   Array.from(answerButtonEl.children).forEach(button => {
       checkIfCorrect(button, button.dataset.correct);
   })
   if (selectedButton.dataset = correct) {
       playerScore++;
   } else {
       secondsLeft-=10; 
   };
   document.getElementById('player-score').innerText = 'Score: ' + playerScore;

   if (randomQuestions.length > randomQuestionIndex + 1) {
       nextBtnEl.classList.remove('hide');
       leaderBoardContainer.classList.add('hide');
   } else {
       nextBtnEl.classList.add('hide');
       questionContainer.classList.add('hide');
       leaderBoardContainer.classList.remove('hide');
    //    startBtnEl.classList.remove('hide');
    //    startBtnEl.innerText = 'Restart'
   }
   
}

function checkIfCorrect(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}


function saveScore() {
    // establish a variable that converts any exsiting scores from text into a Javascript Object
    var exisitingScores = JSON.parse(localStorage.getItem('allplayerData'));
    // if there isn't any data, set the variable to an open array.
    if(exisitingScores == null) exisitingScores = [];
    // create the key:value pairs 
    var playerScoreData = {
        initials: playerInput.value,
        score: playerScore,
    };
    // convert key:value pair into a string using .stringify and .setItem() to store it local storage
    localStorage.setItem('allplayerData', JSON.stringify(playerScoreData));
};

function showScores() {
    var leaderBoard = JSON.parse(localStorage.getItem('allplayerData'));
    if (leaderBoard !== null) {
        document.getElementById("player-initials").innerHTML = leaderBoard.initials;
        document.getElementById("player-highscore").innerHTML = leaderBoard.score;
    } else {
        return;
    } 
};

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
    showScores();
    highScoreList.classList.remove('hide');
    leaderBoardContainer.classList.add('hide');
    restartBtnEl.classList.remove('hide');
    });


function clearStatus (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


var questionsArray = [
    // this is where the questions will be stored as an array and randomly chosen.
    {
        question: 'What can loops offer Javascript as a whole?', 
        answers: [
            {text: 'Cleaner Syntax', correct: false}, 
            {text: 'Improved Performance', correct: true},
            {text: 'Cross-Platform Support', correct: false},
            {text: 'Added plug-ins', correct: false}
        ]
    }, {
        question: 'What is the element called that can continue to execute a block of code as long as the specified condition remains true?',
        answers: [
            {text: 'Clone', correct: false}, 
            {text: 'Loop', correct: true},
            {text: 'Debugger', correct: false},
            {text: 'Repeater', correct: false}
        ]
    }
    , {
        question: 'In Javascript, what element is used to store and manipulate text, usually in multiples?',
        answers: [
            {text: 'Variables', correct: true}, 
            {text: 'Recorders', correct: false},
            {text: 'Arrays', correct: false},
            {text: 'Strings', correct: false}
        ]
    }, {
        question: 'In Javascript, what is a block of code called that is used to perform a specific task?',
        answers: [
            {text: 'String', correct: false}, 
            {text: 'Declaration', correct: false},
            {text: 'Variable', correct: false},
            {text: 'Function', correct: true}
        ]
    }, {
        question: 'What tag is used to define a hyperlink or link to another page?',
        answers: [
            {text: '<em>', correct: false}, 
            {text: '<src>', correct: false},
            {text: '<a>', correct: true},
            {text: '<blockquote>', correct: false}
        ]
    }, {
        question: 'What tag is used to define an image - or add an image - to an HTML page?',
        answers: [
            {text: '<img>', correct: true}, 
            {text: '<meta>', correct: false},
            {text: '<div>', correct: false},
            {text: '<h2>', correct: false}
        ]
    }, {
        question: 'What does the "M" stand for in "HTML"?',
        answers: [
            {text: 'Meta-data', correct: false}, 
            {text: 'Markup', correct: true},
            {text: 'Modality', correct: false},
            {text: 'Modern', correct: false}
        ]
    }, {
        question: 'What is the CSS property that offers extra information when you hover over that element?',
        answers: [
            {text: 'Info Block', correct: false}, 
            {text: 'Tutorial', correct: false},
            {text: 'Hint', correct: false},
            {text: 'Tooltip', correct: true}
        ]
    }, {
        question: 'What is the CSS property used to set the horizontal alignment of text or words on a page?',
        answers: [
            {text: 'Padding', correct: false}, 
            {text: 'Spacing', correct: false},
            {text: 'Horizontal-align', correct: false},
            {text: 'Text-align', correct: true}
        ]
    }, {
        question: 'What jQuery method is used to insert content at the END of a selected element?',
        answers: [
            {text: 'append()', correct: true}, 
            {text: 'prepend()', correct: false},
            {text: 'after()', correct: false},
            {text: 'final()', correct: false}
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
        timer.textContent = 'Time Left: ' + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            clearTimer();
            nextBtnEl.classList.add('hide');
            questionContainer.classList.add('hide');
            leaderBoardContainer.classList.remove('hide');
        }
        // the second parameter is how often between each execution: once every second.
    }, 1000); 

};

// this function removes the timer from the browser window
function clearTimer() {
    timer.textContent = " ";
}

// added a function to the click event of the restart button to reload the page, to restart the game.
restartBtnEl.addEventListener('click', function() {
    window.location.reload();
    return false;
});


