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

const randomizeBot = () => {
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

const recordScore = (botSource) =>{
    const user = document.getElementById("user-hand");
    const userSource = String(user.src);

    if((userSource.match("rock") && botSource.match("rock")) 
        || (userSource.match("paper") && botSource.match("paper")) 
            ||(userSource.match("scissor") && botSource.match("scissor"))){
        return;
    }
    if((userSource.match("rock") && botSource.match("paper")) 
        || (userSource.match("paper") && botSource.match("scissor")) 
            || (userSource.match("scissor") && botSource.match("rock"))){
        botScore++;
    }
    if((userSource.match("rock") && botSource.match("scissor")) 
        || (userSource.match("paper") && botSource.match("rock"))
            ||(userSource.match("scissor") && botSource.match("paper"))){
        userScore++;
    }

    console.log("User: " + userScore);
    console.log("Bot: " + botScore);
}

function randomizeBotHand(){
    if(count === 25){
        count = 0;
        randomizeBot();
        return;
    }
 
     setTimeout(() => {
        if(hand === "rock"){
            hand = "paper";
        } else if (hand === "paper"){
            hand = "scissor";
        } else {
            hand = "rock";
        }
        bot.innerHTML = `<img id="bot-hand" src="Hands/${hand}_flip.png"/>`
        count++;
        randomizeBotHand();
    }, 100);
}

let count = 0;
let hand = null;
const bot = document.getElementById("bot-container");

async  function randomize(){
    setTimeout(() => {
        if(hand === "rock"){
            hand = "paper";
        } else if (hand === "paper"){
            hand = "scissor";
        } else {
            hand = "rock";
        }
        bot.innerHTML = `<img id="bot-hand" src="Hands/${hand}_flip.png"/>`;
    }, 2000);
}