
const mainInput = document.getElementById("main-input");
const taskContainer = document.getElementById("to-do-container");
const compContainer = document.getElementById("complete-task-container");

let id = 0;

function addTask(){
    if(String(mainInput.value).trim() == "") return;
    
    id++;

    let task = document.getElementById("main-input").value;
    taskContainer.innerHTML += `<div class="task-box" id="task-box-${id}"> ${task} <button onclick="addCheck(event)" class="check-box" id="check-box-${id}"></button></div>`;
    mainInput.value = "";
}

function addCheck(event){
    let checkBox = event.target;
    let taskBox = checkBox.parentElement;
    let textContent = document.getElementById(taskBox.id).textContent;
    taskBox.style.backgroundColor = 'rgb(130, 129, 129)';
    checkBox.style.backgroundColor = 'rgb(205, 205, 205)';  
    setTimeout(() => {
        addCompletedTask(textContent);
        taskBox.remove();
    }, 300);
}

function addCompletedTask(textContent){
    compContainer.innerHTML += `<div class="complete-box">${textContent}</div>`;
}
