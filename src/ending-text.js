const endingOne = () => {
    text.classList.add("subtitle");
    text.classList.add("text-final");
    text.innerHTML =
        "<i class='bi bi-emoji-dizzy-fill'></i><p style='font-size: 22px'>Yeah, dude, you desperately need to see more movies...<p>";
};

const endingTwo = () => {
    text.classList.add("subtitle");
    text.classList.add("text-final");
    text.innerHTML =
        "<i class='bi bi-emoji-smile-fill'></i><p style='font-size: 22px'>Okay, we can say you know something about movies...<p>";
};

const endingThree = () => {
    text.classList.add("subtitle");
    text.classList.add("text-final");
    text.innerHTML =
        "<i class='bi bi-emoji-sunglasses-fill'></i><p style='font-size: 22px'>Hey, I think we'd have a lot to talk about!<br>You did good!<p>";
};

const endingFour = () => {
    text.classList.add("subtitle");
    text.classList.add("text-final");
    text.innerHTML =
        "<i class='bi bi-stars'></i><p style='font-size: 22px'>Damn, you're must be an amazing person!<br>Let's be friends!<p>";
};

export { endingOne, endingTwo, endingThree, endingFour };
