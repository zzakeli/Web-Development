const title = document.getElementById("game-title")
const playHead = document.getElementById("play-head-label")
const playSub = document.getElementById("play-sub-label")
const paragraph = document.getElementById("story-paragraph");
const buttons = document.getElementById("button-container");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const choices = document.getElementById("choice-container");
const hearts = document.getElementById("heart-container");
const gameOverHead = document.getElementById("game-over-head");
const gameOverSub = document.getElementById("game-over-sub");

let level = 0;
let choice = 0;
let isCorrect = true;
let heartNum = 3;
let emptyHeartNum = 0;

const start = ()=>{
    resetHeart();
    setFirstDisplay("none");  
    animateTitle();
}

const resetHeart = () =>{
    for(let i = 0; i < heartNum; i++){
        hearts.innerHTML += '<img id="heart" src="Images/heart.png" style="display: flex; height: 100%; width: clamp(30px,22%,22%);"/>'
    }
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
            setSecondDisplay("flex");
            level = 1;
        }, 5000);

    },5);
}

const setFirstDisplay = (display) =>{
    title.style.display = "flex";
    playHead.style.display = display;
    playSub.style.display = display;
}

const setSecondDisplay = (display) =>{
    paragraph.style.display = display;
    choices.style.display = display;
    hearts.style.display = display;
    buttons.style.display = display;
}

//to be added
const displayGameOver = () =>{

}

const selectChoice = () =>{
    switch (level) {
        case 1:
            switch (choice) {
                case 1:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 2:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 3:
                    isCorrect = true;
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch (choice) {
                case 1:
                    isCorrect = true;
                    break;
                case 2:
                    isCorrect = false;
                    break;
                case 3:
                    isCorrect = false;
                    break;
                default:
                    break;
            }
            break;
        case 3:
            switch (choice) {
                case 1:
                    isCorrect = true;
                    break;
                case 2:
                    isCorrect = false;
                    break;
                case 3:
                    isCorrect = false;
                    break;
                default:
                    break;
            }
            break;
        case 4:
            switch (choice) {
                case 1:
                    isCorrect = true;
                    break;
                case 2:
                    isCorrect = false;
                    break;
                case 3:
                    isCorrect = false;
                    break;
                default:
                    break;
            }
            break;
        case 5:
            switch (choice) {
                case 1:
                    isCorrect = false;
                    break;
                case 2:
                    isCorrect = true;
                    break;
                case 3:
                    isCorrect = false;
                    break;
                default:
                    break;
            }
            break;   
        default:
            break;
    }

    //this one is wrong--
    if(!isCorrect){
        hearts.innerHTML = "";
        for(let i = 0; i < heartNum; i++){
            hearts.innerHTML += '<img id="heart" src="Images/heart.png" />';
        }
        for(let i = 0; i < emptyHeartNum; i++){
            hearts.innerHTML += '<img id="heart" src="Images/empty_heart.png"/>';
        }

        if(emptyHeartNum === 3){
            setSecondDisplay("none");
            displayGameOver();
        }
        return;
    }

}

const getChoiceOne = () =>{
    choice = 1;
    selectChoice();
}

const getChoiceTwo = () =>{
    choice = 2;
    selectChoice();
}

const getChoiceThree = () =>{
    choice = 3;
    selectChoice();
}





