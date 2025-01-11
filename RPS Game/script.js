let userScore = 0;
let botScore = 0;

const switchHand = () => {
    const user = document.getElementById("user-container");
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

}

const getBotHand = () => {
    const bot = document.getElementById("bot-container");

    const RandomNum = Math.floor((Math.random() * 3)) + 1;

    if(RandomNum === 1){
        bot.innerHTML = `<img id="bot-hand" src="Hands/rock_flip.png"/>`
    }
    else if(RandomNum === 2){
          bot.innerHTML = `<img id="bot-hand" src="Hands/scissor_flip.png"/>`
    }
    else if(RandomNum === 3){
          bot.innerHTML = `<img id="bot-hand" src="Hands/paper_flip.png"/>`
    }

    const botHand = document.getElementById("bot-hand");
    const botSource = String(botHand.src);

    recordScore(botSource);

}
const removeIndicator = () =>{
    const indicator = document.getElementById("indicator-container");
    indicator.style.display = 'none';
}


const recordScore = (botSource) =>{
    const indicator = document.getElementById("indicator-container");
    const indicatorLabel = document.getElementById("notification");
    const user = document.getElementById("user-hand");
    const userSource = String(user.src);

    if((userSource.match("rock") && botSource.match("rock")) 
        || (userSource.match("paper") && botSource.match("paper")) 
            ||(userSource.match("scissor") && botSource.match("scissor"))){
                indicator.style.backgroundColor = 'hsl(0, 0.00%, 72.90%)';
                indicatorLabel.textContent = "Draw";
                return;
    }
    if((userSource.match("rock") && botSource.match("paper")) 
        || (userSource.match("paper") && botSource.match("scissor")) 
            || (userSource.match("scissor") && botSource.match("rock"))){
                indicator.style.backgroundColor = 'hsl(0, 70.50%, 56.10%, 1.00)';
                indicatorLabel.textContent = "You Lose!";
                botScore++;
    }
    if((userSource.match("rock") && botSource.match("scissor")) 
        || (userSource.match("paper") && botSource.match("rock"))
            ||(userSource.match("scissor") && botSource.match("paper"))){
                indicator.style.backgroundColor = 'hsl(104, 41%, 65%)';
                indicatorLabel.textContent = "You Won!";
                userScore++;
    }

    console.log("User: " + userScore);
    console.log("Bot: " + botScore);
}


let count = 0;
let randomizedHand = "scissor";
const bot = document.getElementById("bot-container");
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
        if(randomizedHand === "rock"){
            randomizedHand = "paper";
        } else if (randomizedHand === "paper"){
            randomizedHand = "scissor";
        } else {
            randomizedHand = "rock";
        }
        bot.innerHTML = `<img id="bot-hand" src="Hands/${randomizedHand}_flip.png"/>`;
        count++
        randomizeBotHand();
    }, 100);
}