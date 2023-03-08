let optionA = document.getElementById("a");
let optionB = document.getElementById("b");
let optionC = document.getElementById("c");
let optionD = document.getElementById("d");

const q1 = {
    questionNumber: 1,
    questionText:
        "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
    optionA: "Vietnam",
    optionB: "China",
    optionC: "Sweden",
    optionD: "France",
    correctOption: "China",
};

const q2 = {
    questionNumber: 2,
    questionText:
        "In which country were all The Lord of the Rings series movies filmed?",
    optionA: "Ireland",
    optionB: "Iceland",
    optionC: "New Zealand",
    optionD: "Australia",
    correctOption: "New Zealand",
};

const q3 = {
    questionNumber: 3,
    questionText:
        "What was the famous Pulp Fiction scene that was filmed backward?",
    optionA: "Vincent and Mia's dance scene",
    optionB: "Mia's overdose scene",
    optionC: "The royale with cheese scene",
    optionD: "The Ezekiel 25:17 scene",
    correctOption: "Mia's overdose scene",
};

const q4 = {
    questionNumber: 4,
    questionText:
        "What was the owner's name of the cat shown in one of The Godfather's scene?",
    optionA: "Francis Ford Coppola",
    optionB: "Diane Keaton",
    optionC: "Al Pachino",
    optionD: "No one—the cat was a stray",
    correctOption: "No one—the cat was a stray",
};

const q5 = {
    questionNumber: 5,
    questionText:
        "Which of the items above was presented in every Fight Club movie scene?",
    optionA: "A Coca-Cola can",
    optionB: "A Starbucks cup",
    optionC: "A Dunking donut",
    optionD: "A Pepsi bottle",
    correctOption: "A Starbucks cup",
};

const q6 = {
    questionNumber: 6,
    questionText:
        "Which movie is the following quote from: 'What is in the box?'",
    optionA: "Speed",
    optionB: "Reservoir Dogs",
    optionC: "The Boondock Saints",
    optionD: "Se7en",
    correctOption: "Se7en",
};

const q7 = {
    questionNumber: 7,
    questionText:
        "What's the name of the actor who took home an Oscar for Best Actor in 1998?",
    optionA: "Matt Damon",
    optionB: "Jack Nicholson",
    optionC: "Liam Neeson",
    optionD: "Sean Penn",
    correctOption: "Jack Nicholson",
};

const q8 = {
    questionNumber: 8,
    questionText:
        "Which was the first movie of all times to show a toilet flushing scene?",
    optionA: "Psycho",
    optionB: "Citizen Kane",
    optionC: "The Graduate",
    optionD: "Vertigo",
    correctOption: "Psycho",
};

const q9 = {
    questionNumber: 9,
    questionText:
        "Which actor plays 'Private Ryan' in Saving Private Ryan movie?",
    optionA: "Tom Hanks",
    optionB: "Vin Diesel",
    optionC: "Edward Burns",
    optionD: "Matt Damon",
    correctOption: "Matt Damon",
};

const q10 = {
    questionNumber: 10,
    questionText:
        "Which of the following ones is the highest-grossing movie of all times?",
    optionA: "Titanic",
    optionB: "Avatar",
    optionC: "Avengers: Endgame",
    optionD: "Star Wars: The Force Awakens",
    correctOption: "Avatar",
};

const q11 = {
    questionNumber: 11,
    questionText:
        "Which movie stars Jim Carrey and Kate Winslet as a broken up couple who seek to erase their memories?",
    optionA: "Memories",
    optionB: "It Had to Be You",
    optionC: "Eternal Sunshine of the Spotless Mind",
    optionD: "Equals",
    correctOption: "Eternal Sunshine of the Spotless Mind",
};

const q12 = {
    questionNumber: 12,
    questionText:
        "Which of the following ones was the highest-grossing movie of 2005?",
    optionA: "War of the Worlds",
    optionB: "Star Wars: Episode III: Revenge of the Sith",
    optionC: "Harry Potter and the Goblet of Fire",
    optionD: "The Chronicles of Narnia",
    correctOption: "Harry Potter and the Goblet of Fire",
};

const q13 = {
    questionNumber: 13,
    questionText:
        "What movie is this famous quote from: You can't handle the truth!?",
    optionA: "Training Day",
    optionB: "Saving Private Ryan",
    optionC: "A Few Good Men",
    optionD: "Armageddon",
    correctOption: "A Few Good Men",
};

const q14 = {
    questionNumber: 14,
    questionText:
        "How many times has A Star is Born, which was originally released in 1937, been remade?",
    optionA: "2 times",
    optionB: "3 times",
    optionC: "4 times",
    optionD: "5 times",
    correctOption: "4 times",
};

const q15 = {
    questionNumber: 15,
    questionText:
        "Who directed the hit 2017 American psychological horror movie 'Get Out'?",
    optionA: "James Wan",
    optionB: "Jordan Peele",
    optionC: "Guillermo del Toro",
    optionD: "Tim Story",
    correctOption: "Jordan Peele",
};

const questions = [
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
];

let options = [optionA, optionB, optionC, optionD];
let optionsId = ["A", "B", "C", "D"];

export {
    questions,
    options,
    optionsId,
};
