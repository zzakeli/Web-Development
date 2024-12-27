let num;
function getOne(){
    num = document.getElementById("one").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getTwo(){
    num = document.getElementById("two").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getThree(){
    num = document.getElementById("three").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getFour(){
    num = document.getElementById("four").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getFive(){
    num = document.getElementById("five").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getSix(){
    num = document.getElementById("six").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getSeven(){
    num = document.getElementById("seven").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getEight(){
    num = document.getElementById("eight").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getNine(){
    num = document.getElementById("nine").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getZero(){
    num = document.getElementById("zero").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function getPoint(){
    num = document.getElementById("point").textContent;
    document.getElementById("calc-field").value += num.trim();
}
function deleteAll(){
    document.getElementById("calc-field").value = "";
}
function backspace(){
    let oldValue = String(document.getElementById("calc-field").value);
    oldValue = oldValue.substring(0,oldValue.length-1);
    document.getElementById("calc-field").value = oldValue;
}
