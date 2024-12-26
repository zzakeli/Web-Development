const guessNum = Math.floor(Math.random() * 1000);
let attempt = 0;
console.log(guessNum);
function guessMe(){
    let numEntered = document.getElementById("number-input").value;
    const greaterMess = `${numEntered} is Higher`;
    const lesserMess  = `${numEntered} is Lower`;
    const equalMess = `You guessed ${guessNum} correctly!`;
    const invalidMess = "It isn't a Number!";
    
        if(numEntered > guessNum){
        document.getElementById("prompt-label").textContent = greaterMess;
        attempt++;
        document.getElementById("prompt-attempt-label").textContent = `Attempt: ${attempt}`;
        }
        else if(numEntered < guessNum){
        document.getElementById("prompt-label").textContent = lesserMess;
        attempt++;
        document.getElementById("prompt-attempt-label").textContent = `Attempt: ${attempt}`;
        }
        else if(numEntered == guessNum){
        attempt++;
        document.getElementById("prompt-label").textContent = equalMess;
        document.getElementById("prompt-attempt-label").textContent = `Attempt: ${attempt}`;
        }
        else{
        document.getElementById("prompt-label").textContent = invalidMess;
        }
}

