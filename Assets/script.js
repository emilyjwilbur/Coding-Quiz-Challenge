// DOM VARIABLES
let timerValue = document.getElementById('timerValue');
let questionLabel = document.getElementById('questionLabel');
let answerButton1 = document.getElementById('answerButton1');
let answerButton2 = document.getElementById('answerButton2');
let answerButton3 = document.getElementById('answerButton3');
let answerButton4 = document.getElementById('answerButton4');
let answerFeedbackLabel = document.getElementById('answerFeedbackLabel');
let finalScoreLabel = document.getElementById('finalScoreLabel');








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




