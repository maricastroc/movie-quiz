//Imports
import {
    actualNumber,
    footerQuestions,
    subtitle,
    startBtn,
    allQuestions,
    questionText,
    continueBtn,
    tryAgainBtn,
    phrases,
    btnOffCanvas,
    textMovie,
    title,
    mainTitle,
    btnTrailer,
    trailerLink,
} from "./variables.js";

import {
    optionA,
    optionB,
    optionC,
    optionD,
    arrayQuestions,
    options,
    setNumber,
} from "./all-questions.js";

import {
    endingOne,
    endingTwo,
    endingThree,
    endingFour,
} from "./ending-text.js";

//Preparing interface
let points = 0;

startBtn.addEventListener("click", () => {
    allQuestions.style.display = "flex";
    footerQuestions.style.display = "flex";
    startBtn.style.display = "none";
    subtitle.innerText = `Let's get it started, right?
        Good luck!`;

    continueBtn.removeEventListener(
        "click",
        generateRandom
    );
    title.style.display = "none";
});

setNumber();

//Getting first question's index
let randomFirstNumber = Math.floor(
    Math.random() * arrayQuestions.length
);

//Setting first question
options.forEach((option) =>
    option.classList.add("check-hover")
);

questionText.innerText =
    arrayQuestions[randomFirstNumber].questionText;
optionA.innerText =
    arrayQuestions[randomFirstNumber].optionA;
optionB.innerText =
    arrayQuestions[randomFirstNumber].optionB;
optionC.innerText =
    arrayQuestions[randomFirstNumber].optionC;
optionD.innerText =
    arrayQuestions[randomFirstNumber].optionD;

optionA.setAttribute("value", randomFirstNumber + "A");
optionB.setAttribute("value", randomFirstNumber + "B");
optionC.setAttribute("value", randomFirstNumber + "C");
optionD.setAttribute("value", randomFirstNumber + "D");

//Setting new array without first question
const arrayQuestions2 = arrayQuestions.filter(
    (n) => n !== arrayQuestions[randomFirstNumber]
);

let firstQuestion = true;

//Verifying answer
const verifyAnswer = (ev) => {
    const option = ev.target;

    btnOffCanvas.style.display = "block";

    options.forEach((option) => {
        option.classList.remove("check-hover"),
            option.classList.add("uncheck-hover");
        option.removeEventListener("click", verifyAnswer);
    });

    let currentNumber = option.value;
    let chosenAnswer = option.innerText;
    let correct;

    if (firstQuestion === true) {
        correct =
            arrayQuestions[currentNumber].correctOption;
        textMovie.innerText =
            arrayQuestions[currentNumber].description;
        mainTitle.innerText =
            arrayQuestions[currentNumber].title;
        trailerLink.href =
            arrayQuestions[currentNumber].trailer;
    } else {
        correct =
            arrayQuestions2[currentNumber].correctOption;
        textMovie.innerText =
            arrayQuestions2[currentNumber].description;
        mainTitle.innerText =
            arrayQuestions2[currentNumber].title;
        trailerLink.href =
            arrayQuestions2[currentNumber].trailer;
    }

    if (chosenAnswer === correct) {
        points += 10;
        subtitle.innerText = `Well Done!
            Your actual score is: ${points} points.`;
        option.style = "color: #54b2e8";
    } else {
        subtitle.innerText = `Hmm, that's not right...
            Your actual score is: ${points} points.`;
        option.style = "color: #e94747";
    }

    firstQuestion = false;

    continueBtn.addEventListener("click", () => {
        btnOffCanvas.style.display = "none";
        options.forEach((option) =>
            option.addEventListener("click", verifyAnswer)
        );
    });
};

//Adding functions for options and continueBtn
options.forEach((option) =>
    option.addEventListener("click", verifyAnswer)
);

options.forEach((option) =>
    option.addEventListener("click", () => {
        verifyAnswer,
            continueBtn.addEventListener(
                "click",
                generateRandom
            );
    })
);

//Getting random number of next question
let allNumbers = [];

const generateRandom = () => {
    options.forEach((option) => (option.style = null));
    const arrayQuestions2 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ];
    let randomNumber = Math.floor(
        Math.random() * arrayQuestions2.length
    );

    if (!allNumbers.includes(randomNumber)) {
        allNumbers.push(randomNumber);
        nextQuestion(arrayQuestions2[randomNumber]);
    } else {
        if (allNumbers.length < arrayQuestions2.length) {
            generateRandom();
        } else {
            endGame();
        }
    }
};

//Setting next question
let orderNumber = 2;

const nextQuestion = (number) => {
    options.forEach((option) =>
        option.classList.add("check-hover")
    );
    options.forEach((option) =>
        option.classList.remove("uncheck-hover")
    );
    continueBtn.removeEventListener(
        "click",
        generateRandom
    );

    let randomPhrase = Math.floor(
        Math.random() * phrases.length
    );

    subtitle.innerText = phrases[randomPhrase];

    subtitle.classList.remove("right-answer");
    subtitle.classList.remove("wrong-answer");
    let currentNumber = orderNumber;
    actualNumber.innerText = currentNumber;
    orderNumber++;

    optionA.setAttribute("value", number + "A");
    optionB.setAttribute("value", number + "B");
    optionC.setAttribute("value", number + "C");
    optionD.setAttribute("value", number + "D");

    questionText.innerText =
        arrayQuestions2[number].questionText;
    optionA.innerText = arrayQuestions2[number].optionA;
    optionB.innerText = arrayQuestions2[number].optionB;
    optionC.innerText = arrayQuestions2[number].optionC;
    optionD.innerText = arrayQuestions2[number].optionD;
};

//Finalizing game
const endGame = () => {
    allQuestions.style.display = "none";
    footerQuestions.style.display = "none";

    subtitle.classList.remove("right-answer");
    subtitle.classList.remove("wrong-answer");
    subtitle.innerText = `Done!
        You've got ${points} points.`;

    if (points <= 30) {
        endingOne();
    } else if (points > 30 && points <= 60) {
        endingTwo();
    } else if (points >= 70 && points < 130) {
        endingThree();
    } else if (points >= 130) {
        endingFour();
    }

    const btn = document.getElementById("btn");
    btn.appendChild(tryAgainBtn);

    tryAgainBtn.addEventListener("click", () => {
        location.reload();
    });
};
