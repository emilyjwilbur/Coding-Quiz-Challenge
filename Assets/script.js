// // DOM VARIABLES
let timerValue = document.getElementById('timerValue');
let questionLabel = document.getElementById('questionLabel');
let answerButton1 = document.getElementById('answerButton1');
let answerButton2 = document.getElementById('answerButton2');
let answerButton3 = document.getElementById('answerButton3');
let answerButton4 = document.getElementById('answerButton4');
let answerFeedbackLabel = document.getElementById('answerFeedbackLabel');
let finalScoreLabel = document.getElementById('finalScoreLabel');
let initialsInput = document.getElementById('initialsTextBox');
let submitButton = document.getElementById('submitButton');
let viewHighScoreButton = document.getElementById('viewHighScores');

// JAVASCRIPT VARIABLES
let timer = 0;
let questions = [
    'Commonly used data types DO NOT include:',
    'The condition in an if/else statement is enclosed within ___',
    'Arrays in JavaScript can br used to store___.',
    'String values must be enclosed within ___ when being assigned to a variable',
    'A very useful tool used during development and debugging from printing content to the debugger is:'
];

let answers = [ 
    [ '1. strings', '2. booleans', '3. alerts', '4. numbers' ],
    [ '1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets' ],
    [ '1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above' ],
    [ '1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    [ '1. javascript', '2. terminal/bash', '3. for loops', '4. console.log']
]

let correctAnswers = [3, 3, 4, 3, 4];

let currentQuestion = 0;
let finalScore = 0;

// FUNCTION DEFINITIONS
// this function was found on w3 schools to hide the coding quiz opening section in my html
function sectionVisibility(sectionName) {  
    var x =
    document.getElementById(sectionName);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// timer starts at first question, blocking the coding quiz opening section from visibility 
function startQuiz() {
    sectionVisibility('codingQuizOpener');
    document.getElementById('questionSection').style.display = "block";
    timer = 75;
    displayQandA();
}

// modifying html with innerHTML and tells computer to display new question and answer buttons
function displayQandA() {
    questionLabel.innerHTML = questions[currentQuestion];
    answerButton1.innerHTML = answers[currentQuestion][0];
    answerButton2.innerHTML = answers[currentQuestion][1];
    answerButton3.innerHTML = answers[currentQuestion][2];
    answerButton4.innerHTML = answers[currentQuestion][3];
}

// tell computer if correct answer is selected, display ""correct" otherwise take 10 seconds off time
function selectAnswer(buttonNumber) {
    if (buttonNumber === correctAnswers[currentQuestion]){
        answerFeedbackLabel.innerHTML = "correct";
    } else {
        answerFeedbackLabel.innerHTML = "incorrect";
        timer = timer - 10;
    }
    currentQuestion = currentQuestion + 1;
    if (currentQuestion >= 5) {
        document.getElementById('questionSection').style.display = "none";
        document.getElementById('allDoneSection').style.display = "block";
        finalScore = timer;
        timer = 0;
        finalScoreLabel.innerHTML = "Your final score is " + finalScore;
       
    } else {
        displayQandA(); } 
}

// local storage// Score and initials stored in console
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let user = {
        initials: initialsTextBox.value,
        score: finalScore,
    };

    console.log(user);

    localStorage.setItem("user", JSON.stringify(user));

});

// tells timer to go down by 1 second (1000 milliseconds) if its greater than 0
setInterval(function(){
    if(timer > 0)
    {
        timer = timer - 1;
    }
    timerValue.innerHTML = timer;
    }, 1000);



