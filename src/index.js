import {
    questions,
    options,
    optionsId,
} from "./all-questions.js";

import {
    endingOne,
    endingTwo,
    endingThree,
    endingFour,
    endingFive,
} from "./ending-text.js";

//Preparing interface

const startBtn = document.querySelector(".start-btn");
const questionText = document.querySelector(
    ".question-text"
);
const nextBtn = document.querySelector(".next-item");
const resulText = document.getElementById("result-text");
const resultItem = document.querySelector(".result-item");
const infoItem = document.querySelector(".info-item");

const starsNum = document.getElementById("stars-number");
let score = document.getElementById("points");
let points = 0;
let progressValue = 7;

const updateBar = () => {
    document
        .querySelector(".progress-value")
        .style.setProperty("width", `${progressValue}%`);
    document.getElementById(
        "percent"
    ).textContent = `${Math.trunc(progressValue)}%`;
};

startBtn.addEventListener("click", () => {
    document
        .querySelector(".intro")
        .classList.add("hidden");
    document
        .querySelector(".quiz-card")
        .classList.remove("disabled");

    nextBtn.removeEventListener("click", generateRandom);
});

//Getting first question's index
let randomNum = Math.floor(
    Math.random() * questions.length
);

//Setting first question
updateBar();
questionText.textContent =
    questions[randomNum].questionText;

for (let i = 0; i < options.length; i++) {
    options[i].innerText =
        questions[randomNum][`option${optionsId[i]}`];
    options[i].setAttribute(
        "value",
        randomNum + [`${optionsId[i]}`]
    );
}

nextBtn.classList.add("next-disabled");
let firstOne = true;

//Setting new array without first question
const questions2 = questions.filter(
    (n) => n !== questions[randomNum]
);

//Verifying answer
const verifyAnswer = (ev) => {
    const option = ev.currentTarget;
    option.classList.add("correct-answer");

    options.forEach((option) => {
        option.removeEventListener("click", verifyAnswer);
        if (!option.classList.contains("correct-answer"))
            option.classList.add("disabled-answer");
    });

    let currentNumber = option.value;
    let chosenAnswer = option.innerText;
    let correct;

    if (firstOne === true) {
        correct = questions[currentNumber].correctOption;
    } else {
        correct = questions2[currentNumber].correctOption;
    }

    if (chosenAnswer === correct) {
        points += 1;
        score.textContent = points;
        resulText.textContent = `that's right!`;
    } else {
        score.textContent = points;
        resulText.textContent = `wrong answer!`;
    }

    resultItem.classList.remove("disabled");
    infoItem.classList.add("disabled");
    firstOne = false;

    nextBtn.classList.remove("next-disabled");

    nextBtn.addEventListener("click", () => {
        resultItem.classList.add("disabled");
        infoItem.classList.remove("disabled");

        options.forEach((option) => {
            option.addEventListener("click", verifyAnswer);
            option.classList.remove(
                "correct-answer",
                "disabled-answer"
            );
        });
    });
};

//Adding functions for options
options.forEach((option) =>
    option.addEventListener("click", verifyAnswer)
);

options.forEach((option) =>
    option.addEventListener("click", () => {
        verifyAnswer,
            nextBtn.addEventListener(
                "click",
                generateRandom
            );
    })
);

//Getting random number of next question
let allNumbers = [];

const generateRandom = () => {
    let randomNum = Math.floor(
        Math.random() * questions2.length
    );

    if (!allNumbers.includes(randomNum)) {
        allNumbers.push(randomNum);
        nextQuestion(randomNum);
    } else {
        if (allNumbers.length < questions2.length) {
            generateRandom();
        } else {
            endGame();
        }
    }
};

const nextQuestion = (number) => {
    nextBtn.removeEventListener("click", generateRandom);
    nextBtn.classList.add("next-disabled");
    progressValue = progressValue + 6.6;
    updateBar();

    for (let i = 0; i < options.length; i++) {
        options[i].innerText =
            questions2[number][`option${optionsId[i]}`];
        options[i].setAttribute(
            "value",
            number + [`${optionsId[i]}`]
        );
    }

    questionText.innerText =
        questions2[number].questionText;
};

//Finalizing game
const endGame = () => {
    document
        .querySelector(".intro")
        .classList.add("disabled");
    document
        .querySelector(".quiz-card")
        .classList.add("disabled");

    document
        .querySelector(".final")
        .classList.remove("disabled");

    document.getElementById("questions-right").textContent =
        points;
    console.log(points);
    if (points >= 13) {
        endingFive();
        starsNum.innerText = `5 stars`;
    } else if (points < 13 && points >= 10) {
        endingFour();
        starsNum.innerText = `4 stars`;
    } else if (points < 10 && points >= 7) {
        endingThree();
        starsNum.innerText = `3 stars`;
    } else if (points < 7 && points >= 4) {
        endingTwo();
        starsNum.innerText = `2 stars`;
    } else if (points < 4) {
        endingOne();
        starsNum.innerText = `1 star`;
    }

    document
        .querySelector(".try-again-btn")
        .addEventListener("click", () => {
            location.reload();
        });
};
