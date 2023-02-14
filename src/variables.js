let actualNumber = document.getElementById("actual-number");
let totalNumbers = document.getElementById("total-numbers");
let footerQuestions = document.querySelector(
    ".footer-questions"
);
let subtitle = document.getElementById("subtitle");

const startBtn = document.getElementById("start-btn");
const allQuestions = document.querySelector(
    ".all-questions"
);

let continueBtn = document.getElementById("continue-btn");

let questionText = document.getElementById("question-text");

const tryAgainBtn = document.createElement("button");
tryAgainBtn.type = "button";
tryAgainBtn.classList.add("try-again-btn");
tryAgainBtn.innerText = "Try Again";

const phrases = [
    `How about this one?
Gimme your best shot!`,
    `This one is...
Elementary, my dear Watson.`,
    `This one sounds easy!
Just keep swimming.`,
    `You've got to ask yourself one question: 
'Do I feel lucky?`,
    `Go ahead, 
make my day.`,
    `Keep going, and...
May the Force be with you.`,
    `Carpe diem. 
Seize the quiz, dude.`,
];

let textMovie = document.getElementById("text-movie");
let btnOffCanvas = document.getElementById("btn-offcanvas");
let title = document.getElementById("title");
let mainTitle = document.getElementById(
    "offcanvasMoviesLabel"
);
let btnTrailer = document.querySelector(".btn-trailer");
let trailerLink = document.getElementById("trailer-link");

export {
    actualNumber,
    totalNumbers,
    footerQuestions,
    subtitle,
    startBtn,
    allQuestions,
    questionText,
    continueBtn,
    tryAgainBtn,
    phrases,
    textMovie,
    btnOffCanvas,
    title,
    mainTitle,
    btnTrailer,
    trailerLink,
};
