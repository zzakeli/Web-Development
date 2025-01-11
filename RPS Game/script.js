
const userScore = document.getElementById("user-score");
const botScore = document.getElementById("bot-score");
const user = document.getElementById("user-container");
const bot = document.getElementById("bot-container");
const botSelection = document.getElementById("bot-pick-label");
const indicator = document.getElementById("indicator-container");
const indicatorLabel = document.getElementById("notification");
const pickButton = document.getElementById("pick-button");
const switchButton = document.getElementById("user-pick-button");

const switchHand = () => {
    const hand = document.getElementById("user-hand");
    const handSource = String(hand.src);

    if(handSource.match("rock")){
        user.innerHTML = `<img id="user-hand" src="Hands/scissor.png"/>`
    }
    else if(handSource.match("scissor")){
        user.innerHTML = `<img id="user-hand" src="Hands/paper.png"/>`
    }
    else if(handSource.match("paper")){
        user.innerHTML = `<img id="user-hand" src="Hands/rock.png"/>`
    }

    displayIndicator("none");
}

const displayIndicator = (display) =>{
    indicator.style.display = display;
}

const getBotHand = () => {
    const bot = document.getElementById("bot-container");
    const randomNum = Math.floor((Math.random() * 3)) + 1;

    switch(randomNum){
        case 1:
            bot.innerHTML = `<img id="bot-hand" src="Hands/rock_flip.png"/>`
            botSelection.textContent = "Rock";
            break;
        case 2:
            bot.innerHTML = `<img id="bot-hand" src="Hands/scissor_flip.png"/>`
            botSelection.textContent = "Scissor";
            break;
        case 3:
            bot.innerHTML = `<img id="bot-hand" src="Hands/paper_flip.png"/>`
            botSelection.textContent = "Paper";
            break;          
        default:
            bot.innerHTML = `<img id="bot-hand" src="Hands/rock_flip.png"/>`
            botSelection.textContent = "Rock";
            break;               
    }

    const botHand = document.getElementById("bot-hand");
    const botSource = String(botHand.src);

    recordScore(botSource);
}

const removeIndicator = () => displayIndicator("none");

const enablePickAndSwitch = (isEnabled) => switchButton.disabled = pickButton.disabled = isEnabled;

const recordScore = (botSource) =>{
    const user = document.getElementById("user-hand");
    const userSource = String(user.src);

    displayIndicator("flex");

    if((userSource.match("rock") && botSource.match("rock")) 
        || (userSource.match("paper") && botSource.match("paper")) 
            ||(userSource.match("scissor") && botSource.match("scissor"))){
                indicator.style.backgroundColor = 'hsl(0, 0.00%, 72.90%)';
                indicatorLabel.textContent = "Draw";
    }
    else if((userSource.match("rock") && botSource.match("paper")) 
        || (userSource.match("paper") && botSource.match("scissor")) 
            || (userSource.match("scissor") && botSource.match("rock"))){
                indicator.style.backgroundColor = 'hsl(0, 70.50%, 56.10%, 1.00)';
                indicatorLabel.textContent = "You Lose!";
                botScore.textContent++;
    }
    else if((userSource.match("rock") && botSource.match("scissor")) 
        || (userSource.match("paper") && botSource.match("rock"))
            ||(userSource.match("scissor") && botSource.match("paper"))){
                indicator.style.backgroundColor = 'hsl(104, 41%, 65%)';
                indicatorLabel.textContent = "You Won!";
                userScore.textContent++;
    }

    enablePickAndSwitch(false);
}


let count = 0;
let randomizedHand = "scissor";

function randomizeBotHand(){
    if(count === 25){
        count = 0;
        getBotHand();
        return;
    }
    randomize();
}

function randomize(){
    setTimeout(() => {
        switch(randomizedHand){
            case "Rock":
                randomizedHand = "Paper";
                break;
            case "Paper":
                randomizedHand = "Scissor";
                break;
            case "Scissor":
                randomizedHand = "Rock";
                break;
            default:
                randomizedHand = "Rock";
                break;
        }

        enablePickAndSwitch(true);

        botSelection.textContent = randomizedHand;
        bot.innerHTML = `<img id="bot-hand" src="Hands/${randomizedHand.toLowerCase()}_flip.png"/>`;
        
        displayIndicator("none");
        
        count++

        randomizeBotHand();
    }, 100);
}