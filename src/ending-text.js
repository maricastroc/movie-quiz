const star1 = document.getElementById("star-1");
const star2 = document.getElementById("star-2");
const star3 = document.getElementById("star-3");
const star4 = document.getElementById("star-4");
const star5 = document.getElementById("star-5");

const endingOne = () => {
    star1.src = "./imagens/star-solid.svg";
};

const endingTwo = () => {
    star1.src = "./imagens/star-solid.svg";
    star2.src = "./imagens/star-solid.svg";
};

const endingThree = () => {
    star1.src = "./imagens/star-solid.svg";
    star2.src = "./imagens/star-solid.svg";
    star3.src = "./imagens/star-solid.svg";
};

const endingFour = () => {
    star1.src = "./imagens/star-solid.svg";
    star2.src = "./imagens/star-solid.svg";
    star3.src = "./imagens/star-solid.svg";
    star4.src = "./imagens/star-solid.svg";
};

const endingFive = () => {
    star1.src = "./imagens/star-solid.svg";
    star2.src = "./imagens/star-solid.svg";
    star3.src = "./imagens/star-solid.svg";
    star4.src = "./imagens/star-solid.svg";
    star5.src = "./imagens/star-solid.svg";
};

export {
    endingOne,
    endingTwo,
    endingThree,
    endingFour,
    endingFive,
};
