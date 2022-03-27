let x = getRandomNumber(10);
let y = getRandomNumber(10);
let problemNumber = 1;
let score = 0;
let question = x + ' * ' + y;
let answer = x * y;
let randomAnswer1 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer2 = getRandomNumber(10) * getRandomNumber(10);
let randomAnswer3 = getRandomNumber(10) * getRandomNumber(10);
let problems = [answer1, answer2, answer3, answer4];
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

function setAnswer4() {
    answer = x * y;
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
function resetProblem() {
    problemNumber = 1;
    currentProblem.innerText = problemNumber;
}
function resetScore() {
    score = 0;
    currentScore.innerText = score;
}

setQuestion();
setAnswer1();
setAnswer2();
setAnswer3();
setAnswer4();
shuffleArray(problems);



answer1.addEventListener('click', (event) => {

    shuffleArray(problems);
    for (let i = 0; i < problems.length; i++) {
        count = count + 1;
        problems[i].innerText = randomAnswer + count;
    }



    
    setQuestion();
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    increaseProblem();
    if (problemNumber == 10) {
    endOfQuiz();
    }
})
answer2.addEventListener('click', (event) => {
    
    setQuestion();
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
answer3.addEventListener('click', (event) => {
    
    
    setQuestion();
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
answer4.addEventListener('click', (event) => {

    increaseScore();
    setQuestion();
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    increaseProblem();
    if (problemNumber == 10) {
        endOfQuiz();
        }
})
btnStartOver.addEventListener('click', (event) => {
    setQuestion();
    setAnswer1();
    setAnswer2();
    setAnswer3();
    setAnswer4();
    resetProblem();
    resetScore();

})











// function shuffleArray(arr) {
//     let currentIndex = arr.length, randomIndex;
//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex --;
//         [array[answer], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
//     return array;
// }

// OR ??
// function shuffleARray(array) {
//     for(let i = array.length -1; i> 0; i--){
//         const j = Math.floor(Math.random() * (i +1));
//         [array[i], array[j]] = [array[j], array[i]];

//     }
// }
