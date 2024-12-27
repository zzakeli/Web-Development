let num;

//Individual functions for buttons
function getOne(){
    if(lengthIsMax()) return "";
    num = document.getElementById("one").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getTwo(){
    if(lengthIsMax()) return;
    num = document.getElementById("two").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getThree(){
    if(lengthIsMax()) return;
    num = document.getElementById("three").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getFour(){
    if(lengthIsMax()) return;
    num = document.getElementById("four").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getFive(){
    if(lengthIsMax()) return;
    num = document.getElementById("five").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getSix(){
    if(lengthIsMax()) return;
    num = document.getElementById("six").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getSeven(){
    if(lengthIsMax()) return;
    num = document.getElementById("seven").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getEight(){
    if(lengthIsMax()) return;
    num = document.getElementById("eight").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getNine(){
    if(lengthIsMax()) return;
    num = document.getElementById("nine").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getZero(){
    if(lengthIsMax()) return;
    num = document.getElementById("zero").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getPoint(){
    if(lengthIsMax() || isDigit()) return;
    num = document.getElementById("point").textContent;
    document.getElementById("calc-field").value += num.trim();
}

//Deleting all value
function deleteAll(){
    document.getElementById("calc-field").value = "";
}
//Deleting the latest entered value
function backspace(){
    let oldValue = String(document.getElementById("calc-field").value);
    oldValue = oldValue.substring(0,oldValue.length-1);
    document.getElementById("calc-field").value = oldValue;
}

//Functions for operators
function add(){
    if(lengthIsMax() || isOperator()) return;
    document.getElementById("calc-field").value += "+"; 
}
function subtract(){
    if(lengthIsMax()|| isOperator()) return;
    document.getElementById("calc-field").value += "-";
}
function multiply(){
    if(lengthIsMax()|| isOperator()) return;
    document.getElementById("calc-field").value += "x";
}
function divide(){
    if(lengthIsMax()|| isOperator()) return;
    document.getElementById("calc-field").value += "/";
}

//Function for getting result
function result(){

}

//Checks if values are still visible on calculator field
function lengthIsMax(){
    num = document.getElementById("calc-field").value;
    return num.length == 14;
}

//Checks if an operator exists already beforehand
function isOperator(){
    num = String(document.getElementById("calc-field").value);
    let lastVal = num.charAt(num.length - 1);
    if(lastVal == "+" || lastVal == "-"||lastVal == "x"||lastVal == "/" || lastVal == "" ) return true;
    return false;
}

function isDigit(){
    num = String(document.getElementById("calc-field").value);
    let lastVal = num.charAt(num.length - 1);
    if(lastVal == "+" || lastVal == "-"||lastVal == "x"||lastVal == "/" || lastVal == "" || num.length == 13) return true;
    return false;
}



