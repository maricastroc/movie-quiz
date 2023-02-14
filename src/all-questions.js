let optionA = document.getElementById("a");
let optionB = document.getElementById("b");
let optionC = document.getElementById("c");
let optionD = document.getElementById("d");

import { actualNumber, totalNumbers } from "./variables.js";

const q0 = {
    questionNumber: 0,
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: "",
};

const q1 = {
    questionNumber: 1,
    questionText:
        "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
    optionA: "⚬  Vietnam",
    optionB: "⚬ China",
    optionC: "⚬ Sweden",
    optionD: "⚬ France",
    correctOption: "⚬ China",
    title: "China is the answer!",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    description:
        "Forrest Gump learned to play ping-pong while recovering from a gunshot wound in Vietnam." +
        "\n\nHe quickly mastered the sport, fascinating his peers and eventually being sent to play in China on the All-American Ping-Pong Team as part of the ping-pong diplomacy program.",
};

const q2 = {
    questionNumber: 2,
    questionText:
        "In which country were all The Lord of the Rings series movies filmed?",
    optionA: "⚬ Ireland",
    optionB: "⚬ Iceland",
    optionC: "⚬ New Zealand",
    optionD: "⚬ Australia",
    correctOption: "⚬ New Zealand",
    title: "New Zealand! It is where you must go to see The Amazing Hobbit Village!",
    trailer: "https://www.youtube.com/watch?v=hsUlHilL0Is",
    description:
        "If you've watched the Lord of the Rings movies, you've probably wondered: 'Where was Lord of the Rings filmed?'" +
        "\n\nLOTR was filmed entirely in New Zealand! Peter Jackson thought that the beauty and ruggedness of Middle Earth would best come to life in New Zealand, and he couldn't have been more right!",
};

const q3 = {
    questionNumber: 3,
    questionText:
        "What was the famous Pulp Fiction scene that was filmed backward?",
    optionA: "⚬ Vincent and Mia's dance scene",
    optionB: "⚬ Mia's overdose scene",
    optionC: "⚬ The royale with cheese scene",
    optionD: "⚬ The Ezekiel 25:17 scene",
    correctOption: "⚬ Mia's overdose scene",
    title: "Mia's overdose scene is the answer!",
    trailer: "https://www.youtube.com/watch?v=3_XWXEAR93Q",
    description:
        "In Quentin Tarantino's 'Pulp Fiction', there is an iconic scene where Vincent (John Travolta) plunges a needle into the chest of Mia (Uma Thurman) and revives her from an overdose using adrenaline." +
        "\n\nThis scene was actually filmed backwards with Travolta pulling the needle out of her.",
};

const q4 = {
    questionNumber: 4,
    questionText:
        "What was the owner's name of the cat shown in one of The Godfather's scene?",
    optionA: "⚬ Francis Ford Coppola",
    optionB: "⚬ Diane Keaton",
    optionC: "⚬ Al Pachino",
    optionD: "⚬ No one—the cat was a stray",
    correctOption: "⚬ No one—the cat was a stray",
    title: "No one, dude, the cat was a stray!",
    trailer: "https://www.youtube.com/watch?v=i96VS_z8y7g",
    description:
        "The cat held by Marlon Brando in the opening scene was a stray Francis Ford Coppola found while on the lot at Paramount." +
        "\n\nIt was not originally called for in the script, and its purring muffled some of Brando's dialogue, and, as a result, most of his lines had to be looped.",
};

const q5 = {
    questionNumber: 5,
    questionText:
        "Which of the items above was presented in every Fight Club movie scene?",
    optionA: "⚬ A Coca-Cola can",
    optionB: "⚬ A Starbucks cup",
    optionC: "⚬ A Dunking donut",
    optionD: "⚬ A Pepsi bottle",
    correctOption: "⚬ A Starbucks cup",
    title: "A Starbucks cup. With coffee, please.",
    trailer: "https://www.youtube.com/watch?v=YGKmtlaNe4Y",
    description:
        "One such Easter egg is the film's use of Starbucks coffee cups." +
        "\n\nIn almost every single scene of the film, a cup can be spotted emblazoned with the Starbucks logo, and it's something that adds an extra layer to the film to make it all the more rewatchable.",
};

const q6 = {
    questionNumber: 6,
    questionText:
        "Which movie is the following quote from: 'What is in the box?'",
    optionA: "⚬ Speed",
    optionB: "⚬ Reservoir Dogs",
    optionC: "⚬ The Boondock Saints",
    optionD: "⚬ Se7en",
    correctOption: "⚬ Se7en",
    title: "Se7en. And this line is SO harrowing!",
    trailer: "https://www.youtube.com/watch?v=lHpHxLZReiI",
    description:
        "'What's in the box?!' it's a line that, as delivered by Brad Pitt in David Fincher's Se7en, has become as iconic as the film itself.",
};

const q7 = {
    questionNumber: 7,
    questionText:
        "What's the name of the actor who took home an Oscar for Best Actor in 1998?",
    optionA: "⚬ Matt Damon",
    optionB: "⚬ Jack Nicholson",
    optionC: "⚬ Liam Neeson",
    optionD: "⚬ Sean Penn",
    correctOption: "⚬ Jack Nicholson",
    title: "Nicholson! And he deserved it so much, in my humble opinion!",
    trailer: "https://www.youtube.com/watch?v=t2d89afgtqg",
    description:
        "Nicholson and Hunt won the Academy Award for Best Actor and Best Actress, respectively, making As Good as It Gets the most recent film to win both of the lead acting awards, and the first since 1991's The Silence of the Lambs.",
};

const q8 = {
    questionNumber: 8,
    questionText:
        "Which was the first movie of all times to show a toilet flushing scene?",
    optionA: "⚬ Psycho",
    optionB: "⚬ Citizen Kane",
    optionC: "⚬ The Graduate",
    optionD: "⚬ Vertigo",
    correctOption: "⚬ Psycho",
    title: "The classic Pshyco movie with its classic scene!",
    trailer: "https://www.youtube.com/watch?v=9-aFh1UY9l0",
    description:
        "Did you know? Psycho is the first American film to show a toilet on screen. It's also the first American film in which we hear a toilet being flushed.",
};

const q9 = {
    questionNumber: 9,
    questionText:
        "Which actor plays 'Private Ryan' in Saving Private Ryan movie?",
    optionA: "⚬ Tom Hanks",
    optionB: "⚬ Vin Diesel",
    optionC: "⚬ Edward Burns",
    optionD: "⚬ Matt Damon",
    correctOption: "⚬ Matt Damon",
    title: "Matt Damon is the answer!",
    trailer: "https://www.youtube.com/watch?v=9CiW_DgxCnQ",
    description:
        "Saving Private Ryan is a 1998 American epic war film." +
        "\n\nSet in 1944 in France during World War II, it follows a group of soldiers, led by Captain John Miller (Tom Hanks), on their mission to extricate Private James Ryan (Matt Damon).",
};

const q10 = {
    questionNumber: 10,
    questionText:
        "Which of the following ones is the highest-grossing movie of all times?",
    optionA: "⚬ Titanic",
    optionB: "⚬ Avatar",
    optionC: "⚬ Avengers: Endgame",
    optionD: "⚬ Star Wars: The Force Awakens",
    correctOption: "⚬ Avatar",
    title: "Yep. Avatar!",
    trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    description:
        "The first 'Avatar', released in 2009, is the world's current all-time box office champion, a mantle that goes back more than 100 years." +
        "It has a Lifetime Gross of $2,923,706,026. Yeah, just that.",
};

const q11 = {
    questionNumber: 11,
    questionText:
        "Which movie stars Jim Carrey and Kate Winslet as a broken up couple who seek to erase their memories?",
    optionA: "⚬ Memories",
    optionB: "⚬ It Had to Be You",
    optionC: "⚬ Eternal Sunshine of the Spotless Mind",
    optionD: "⚬ Equals",
    correctOption:
        "⚬ Eternal Sunshine of the Spotless Mind",
    title: "Eternal Sunshine of the Spotless Mind - such a beautiful movie!",
    trailer: "https://www.youtube.com/watch?v=07-QBnEkgXU",
    description:
        "Eternal Sunshine of the Spotless Mind is a 2004 American drama film." +
        "\n\nAfter a painful breakup, Clementine (Kate Winslet) undergoes a procedure to erase memories of her former boyfriend Joel (Jim Carrey) from her mind. When Joel discovers that, he undergoes the same procedure to forget the woman he loved.",
};

const q12 = {
    questionNumber: 12,
    questionText:
        "Which of the following ones was the highest-grossing movie of 2005?",
    optionA: "⚬ War of the Worlds",
    optionB:
        "⚬ Star Wars: Episode III: Revenge of the Sith",
    optionC: "⚬ Harry Potter and the Goblet of Fire",
    optionD: "⚬ The Chronicles of Narnia",
    correctOption: "⚬ Harry Potter and the Goblet of Fire",
    title:
        "Yep, Harry Potter and the Goblet of Fire." +
        "\nThis one was a bit tricky.",
    trailer: "https://www.youtube.com/watch?v=3EGojp4Hh6I",
    description:
        "Harry Potter and the Goblet of Fire, a 2005 fantasy film, enjoyed an immensely successful run at the box office, grossing $896 million worldwide, the highest-grossing film of 2005 and the sixth-highest-grossing film in the series.",
};

const q13 = {
    questionNumber: 13,
    questionText:
        "What movie is this famous quote from: You can't handle the truth!?",
    optionA: "⚬ Training Day",
    optionB: "⚬ Saving Private Ryan",
    optionC: "⚬ A Few Good Men",
    optionD: "⚬ Armageddon",
    correctOption: "⚬ A Few Good Men",
    title: "If you answered right, I'm sure that line came to your mind right away.",
    trailer: "https://www.youtube.com/watch?v=9FnO3igOkOk",
    description:
        "Who doesn't remember the iconic line, 'You can't handle the truth,' from A Few Good Men?" +
        "\n\nThe line in the original script was, 'You already have the truth.' But Jack Nicholson improvised a little and made movie history.",
};

const q14 = {
    questionNumber: 14,
    questionText:
        "How many times has A Star is Born, which was originally released in 1937, been remade?",
    optionA: "⚬ 2 times",
    optionB: "⚬ 3 times",
    optionC: "⚬ 4 times",
    optionD: "⚬ 5 times",
    correctOption: "⚬ 4 times",
    title: "4 times! A very tricky one.",
    trailer: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
    description:
        "A Star Is Born has been remade four times - in 1951 (a television adaptation) with Kathleen Crowley and Conrad Nagel; in 1954 with Judy Garland and James Mason; in 1976 with Barbra Streisand and Kris Kristofferson; and in 2018 with Lady Gaga and Bradley Cooper.",
};

const q15 = {
    questionNumber: 15,
    questionText:
        "Who directed the hit 2017 American psychological horror movie 'Get Out'?",
    optionA: "⚬ James Wan",
    optionB: "⚬ Jordan Peele",
    optionC: "⚬ Guillermo del Toro",
    optionD: "⚬ Tim Story",
    correctOption: "⚬ Jordan Peele",
    title: "Jordan Peele, a great name of comedy and horror genres",
    trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    description:
        "Get Out is a 2017 American psychological horror film written and directed by Jordan Peele in his directorial debut." +
        "\n\nIt stars Daniel Kaluuya as a young man who uncovers a disturbing secret when he meets a family of his white girlfriend.",
};

const arrayQuestions = [
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

const setNumber = () => {
    actualNumber.innerText = q1.questionNumber;
    actualNumber.classList.add("number-questions");
    totalNumbers.innerText = arrayQuestions.length;
    totalNumbers.classList.add("number-questions");
};

export {
    optionA,
    optionB,
    optionC,
    optionD,
    options,
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
    arrayQuestions,
    setNumber,
};
