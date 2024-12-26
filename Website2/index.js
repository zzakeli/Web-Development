
let num = document.getElementById("number-in").textContent;

function increment(){
    if(num < 99){
        num++;
        document.getElementById("number-in").textContent = num;    
    }
}

function decrement(){
    if(num > 0){
        num--;
    document.getElementById("number-in").textContent = num;
    }
}



