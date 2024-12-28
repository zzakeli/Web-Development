
//Main function for rolling dice
function rollDice(){
    document.getElementById("dice-images").innerHTML = "";
    let diceNum = document.getElementById("dice-input").value;
    if(diceNum > 10 || diceNum < 0 || hasLetter(diceNum)) {
        document.getElementById("dice-images").textContent = "Invalid Input!"; 
        return;
    }
    for(let i = 0; i < diceNum; i++){
        document.getElementById("dice-images").innerHTML += `<img src="dice_img/${randomize()}.png">`; 
    }
}

//Randomizer function for number of dots
function randomize(){ 
    return Math.floor(Math.random() * 6 + 1);
}

//Checks if the input contains letters
function hasLetter(diceNum){
    return Number(diceNum) == 0; 
}