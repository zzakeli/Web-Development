
const mainInput = document.getElementById("main-input");
const taskContainer = document.getElementById("to-do-container");
function addTask(){
    if(String(mainInput.value).trim() == "") return;
    let task = document.getElementById("main-input").value;
    console.log(task);
    taskContainer.innerHTML += `<div> ${task} <button></button></div>`;
    mainInput.value = "";
}