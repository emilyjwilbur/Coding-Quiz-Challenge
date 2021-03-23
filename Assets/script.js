// variables
const timePenalty = 20;
let timerValue = 0;
let correctAnswer = true;
let highScore = '{ "initials": "ejw", "score": 50 }';
let highScoreObject = JSON.parse(highScore);
// let startButton = document.getElementById('startBtn');




// Functions
document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
document.getElementById('questionOneOne').addEventListener('click', answer);
document.getElementById('questionOneTwo').addEventListener('click', answer);
document.getElementById('questionOneThree').addEventListener('click', answer);
document.getElementById('questionOneFour').addEventListener('click', answer);
document.getElementById('questionTwoOne').addEventListener('click', answer);
document.getElementById('questionTwoTwo').addEventListener('click', answer);
document.getElementById('questionTwoThree').addEventListener('click', answer);
document.getElementById('questionTwoFour').addEventListener('click', answer);
document.getElementById('questionThreeOne').addEventListener('click', answer);
document.getElementById('questionThreeTwo').addEventListener('click', answer);
document.getElementById('questionThreeThree').addEventListener('click', answer);
document.getElementById('questionThreeFour').addEventListener('click', answer);
document.getElementById('questionFourOne').addEventListener('click', answer);
document.getElementById('questionFourTwo').addEventListener('click', answer);
document.getElementById('questionFourThree').addEventListener('click', answer);
document.getElementById('questionFourFour').addEventListener('click', answer);
document.getElementById('questionFiveOne').addEventListener('click', answer);
document.getElementById('questionFiveTwo').addEventListener('click', answer);
document.getElementById('questionFiveThree').addEventListener('click', answer);
document.getElementById('questionFiveFour').addEventListener('click', answer);

function startQuiz(){
    alert('Start Quiz');
}

function answer(){
    alert('answer');
}


