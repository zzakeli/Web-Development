
//NOTE: also display the first story line before the questions

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
const emptyHeart = document.getElementById("empty-heart-container");
const tryAgainButton = document.getElementById("try-again-button");
const goBackButton = document.getElementById("menu-button");

let level = 0;
let choice = 0;
let isCorrect = true;
let heartNum = 3;
let emptyHeartNum = 0;
let incorrectChoice1 = 0;
let incorrectChoice2 = 0;

const start = ()=>{
    resetHeart();
    disableButtons(true);
    setFirstDisplay("none","flex");  
    animateTitle();
}

const disableButtons = (isDisabled) => {
    backButton.disabled = isDisabled;
    nextButton.disabled = isDisabled;
}
const resetHeart = () =>{
    hearts.innerHTML = "";
    heartNum = 3;
    emptyHeartNum = 0;
    for(let i = 0; i < heartNum; i++){
        hearts.innerHTML += '<img id="heart" src="Images/heart.png" style="display: flex; height: 100%; width: clamp(30px,22%,22%);"/>'
    }
}

const animateTitle = ()=>{
    title.style.opacity = "1";
    setTimeout(()=>{
        title.style.transform = "scale(1.2)";
        title.style.opacity = "0";

        setTimeout(() => {
            title.style.display = "none";
            title.style.transform = "scale(1)";
            setSecondDisplay("flex");
            level = 1;
        }, 5000);

    },5);
}

const setFirstDisplay = (display,titleDisplay) =>{
    title.style.display = titleDisplay;
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
const displayGameOver = (display) =>{
    gameOverHead.style.display = display;
    gameOverSub.style.display = display;
    emptyHeart.style.display = display;
    tryAgainButton.style.display = display;
    goBackButton.style.display = display;
}

const highlightCorrect = (choice) =>{
    let correctBox = document.getElementById(`choice-box-${choice}`);
    correctBox.style.border = "4px solid";
    correctBox.style.borderColor = " rgb(50, 229, 50)";
}

const highlightIncorrect = () =>{
    let choice1 = document.getElementById(`choice-box-${incorrectChoice1}`);
    let choice2 = document.getElementById(`choice-box-${incorrectChoice2}`);

    choice1.style.border = "4px solid";
    choice1.style.borderColor = "RED";
    choice2.style.border = "4px solid";
    choice2.style.borderColor = "RED";
}

const disableChoices = () =>{
    
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
                    disableButtons(false);
                    getIncorrect();
                    highlightCorrect(choice);
                    highlightIncorrect();
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
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 3:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
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
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 3:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
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
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 3:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
                    break;
                default:
                    break;
            }
            break;
        case 5:
            switch (choice) {
                case 1:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
                    break;
                case 2:
                    isCorrect = true;
                    break;
                case 3:
                    isCorrect = false;
                    heartNum--;
                    emptyHeartNum++;
                    break;
                default:
                    break;
            }
            break;   
        default:
            break;
    }

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
            displayGameOver("flex");
        }
        return;
    }

}

const getIncorrect = () => {    
    if(choice === 1){
        incorrectChoice1 = 2;
        incorrectChoice2 = 3;
    }else if (choice === 2){
        incorrectChoice1 = 1;
        incorrectChoice2 = 3;
    }else if( choice === 3){
        incorrectChoice1 = 1;
        incorrectChoice2 = 2;
    }
}

const tryAgain = () =>{
    displayGameOver("none");
    start();
}

const menu = () =>{
    displayGameOver("none");
    setFirstDisplay("flex","none");
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

const nextPage = ()=>{
    level++;
    choices.innerHTML = "";
    
    const boxNum = 3;
    let numStr = "One";
    let num = 1;

    for(let i = 0 ; i < boxNum; i++){
        if(i === 2) numStr = "Two";
        if(i ===3 ) numStr = "Three";
        choices.innerHTML += `<img onclick="getChoice${numStr}()" class="choice-box" id="choice-box-${num}" src="Images/baseball_bat.jpg"/>`;
        num++;
    }
}

const backPage = () =>{
    if(level === 1){
        //disabled going back to menu
        return;
    }

    level--;
}





