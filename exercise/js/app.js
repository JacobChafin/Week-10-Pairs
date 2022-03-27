let x = getRandomNumber(10);
let y = getRandomNumber(10);
let problemNumber = 1;
let score = 0;
let question = x + ' * ' + y;
let randomAnswer4 = x * y;

let randomAnswer1 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer2 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer3 = getRandomNumber(10) * getRandomNumber(10);
let count = 0;

let toggleHide = document.querySelectorAll('.show-hide');

let problem = document.getElementById('problem');
let problemDiv = problem.querySelector('div');

let currentScore = document.querySelector('.currentScore');
let currentProblem = document.querySelector('.currentProblem');

let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let btnStartOver = document.getElementById('btnStartOver');
let whereToWriteProblems = [answer1, answer2, answer3, answer4];
let whatProblemsToWrite = [randomAnswer1,randomAnswer2,randomAnswer3,randomAnswer4];

//given functions
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}
//given functions

function setQuestion() {
x = getRandomNumber(10);
y = getRandomNumber(10);
question = x + ' * ' + y;
    problemDiv.innerText = question;
}


// Setting unique answers
function setAnswer4() {
    randomAnswer4 = x * y;
    // answer4.innerText = randomAnswer4;
}
function setAnswer1() {
    do {
        randomAnswer1 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer1 == randomAnswer4);
    // answer1.innerText = randomAnswer1;
}
function setAnswer2() {
    do {
        randomAnswer2 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer2 == randomAnswer4 || randomAnswer2 == randomAnswer1);
    // answer2.innerText = randomAnswer2;
}
function setAnswer3() {
    do {
        randomAnswer3 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer3 == randomAnswer4 || randomAnswer3 == randomAnswer1 || randomAnswer3 == randomAnswer2);
    // answer3.innerText = randomAnswer3;
}
//setting unique answers


function increaseScore() {
    score = score + 1;
    currentScore.innerText = score;
 }
 function increaseProblem() {
     problemNumber = problemNumber + 1;
     currentProblem.innerText = problemNumber;
 }
function endOfQuiz() {
    toggleHide.forEach((toggle) => {
    toggle.classList.add('hidden');
    })
}
function startOfQuiz() {
    toggleHide.forEach((toggle) => {
        toggle.classList.remove('hidden');
    })
}
function resetProblem() {
    problemNumber = 1;
    currentProblem.innerText = problemNumber;
}
function resetScore() {
    score = 0;
    currentScore.innerText = score;
}



function settingAllAnswers() {
setQuestion();  
setAnswer4();  
setAnswer1();
setAnswer2();
setAnswer3();
whereToWriteProblems = [answer1, answer2, answer3, answer4];
whatProblemsToWrite = [randomAnswer1,randomAnswer2,randomAnswer3,randomAnswer4];
shuffleArray(whereToWriteProblems);
for (let i =0; i < whereToWriteProblems.length; i++) {
whereToWriteProblems[i].innerText = whatProblemsToWrite[i];
}
}

setQuestion();
setAnswer4();  
setAnswer1();
setAnswer2();
setAnswer3();
settingAllAnswers();

answer1.addEventListener('click', (event) => {

    if (event.target.innerText == randomAnswer4){
        increaseScore();
    }

    setQuestion();
    settingAllAnswers();
    increaseProblem();
    if (problemNumber == 10) {
    endOfQuiz();
    }
})
answer2.addEventListener('click', (event) => {
    
    if (event.target.innerText == randomAnswer4){
        increaseScore();
    }

    setQuestion();
    settingAllAnswers();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
answer3.addEventListener('click', (event) => {
    
    if (event.target.innerText == randomAnswer4){
        increaseScore();
    }

    setQuestion();
    settingAllAnswers();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
answer4.addEventListener('click', (event) => {

    if (event.target.innerText == randomAnswer4){
        increaseScore();
    }

    setQuestion();
    settingAllAnswers();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
btnStartOver.addEventListener('click', (event) => {
    setQuestion();
    settingAllAnswers();
    resetProblem();
    resetScore();
    startOfQuiz();
})
