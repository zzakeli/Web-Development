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

    if(userSource.match("rock") && botSource.match("rock")){
        return;
    }
    if(userSource.match("rock") && botSource.match("paper")){
        botScore++;
    }
    if(userSource.match("rock") && botSource.match("scissor")){
        userScore++;
    }
    if(userSource.match("paper") && botSource.match("rock")){
        userScore++;
    }
    if(userSource.match("paper") && botSource.match("paper")){
        return;
    }
    if(userSource.match("paper") && botSource.match("scissor")){
        botScore++;
    }
    if(userSource.match("scissor") && botSource.match("rock")){
        botScore++;
    }
    if(userSource.match("scissor") && botSource.match("paper")){
        userScore++;
    }
    if(userSource.match("scissor") && botSource.match("scissor")){
        return;
    }

    console.log("User: " + userScore);
    console.log("Bot: " + botScore);
}









