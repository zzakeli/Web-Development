const title = document.getElementById("game-title")
const playHead = document.getElementById("play-head-label")
const playSub = document.getElementById("play-sub-label")
const paragraph = document.getElementById("story-paragraph");
const buttons = document.getElementById("button-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const choices = document.getElementById("choice-container");
const hearts = document.getElementById("heart-container");

const start = ()=>{
    setDisplay();
    animateTitle();
}

const animateTitle = ()=>{
    title.style.transform = "scale(1)";
    title.style.opacity = "1";
    title.style.transitionDuration = "5s";

    setTimeout(()=>{
        title.style.transform = "scale(1.2)";
        title.style.opacity = "0";

        setTimeout(() => {
            title.style.display = "none";
            paragraph.style.display = "flex";
            choices.style.display = "flex";
            hearts.style.display = "flex";
            buttons.style.display = "flex";
        }, 4000);

    },5);
}

const setDisplay = ()=>{
    title.style.display = "flex";
    playHead.style.display = "none";
    playSub.style.display = "none";
}

