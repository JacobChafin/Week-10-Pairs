let x = getRandomNumber(10);
let y = getRandomNumber(10);
let currentProblem = 1;
let score = 0;
const question = x + ' * ' + y;
let answer = x * y;
let randomAnswer1 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer2 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer3 = getRandomNumber(10) * getRandomNumber(10);

let problem = document.getElementById('problem');
let problemDiv = problem.querySelector('div');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');

//given functions
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}
//given functions

function setQuestion() {
    problemDiv.innerText = question;
}

function setAnswer4() {
    answer4.innerText = answer;
}

function setAnswer1() {
    do {
        randomAnswer1 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer1 == answer);
    answer1.innerText = randomAnswer1;

}

function setAnswer2() {
    do {
        randomAnswer2 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer2 == answer || randomAnswer2 == randomAnswer1);
    answer2.innerText = randomAnswer2;

}

function setAnswer3() {
    do {
        randomAnswer3 = getRandomNumber(10) * getRandomNumber(10);
    } while (randomAnswer3 == answer || randomAnswer3 == randomAnswer1 || randomAnswer3 == randomAnswer2);
    answer3.innerText = randomAnswer3;

}

function shuffleAnswers() {
    let answers = [answer1, answer2, answer3, answer];
}

setQuestion();
setAnswer1();
setAnswer2();
setAnswer3();
setAnswer4();




answer1.addEventListener('click', (event) => {
    alert('message');
})


