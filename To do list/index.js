const addInput = document.getElementById("add-item");
const addBtn = document.getElementById("add-btn");

addInput.addEventListener('mouseover',() =>{
    addInput.style.backgroundColor = 'rgb(130, 129, 129)';
    addBtn.style.backgroundColor = 'rgb(222, 222, 222)';
})

addBtn.addEventListener('mouseover',() =>{
    addBtn.style.backgroundColor = 'rgb(243, 242, 242)';
    addInput.style.backgroundColor = 'rgb(130, 129, 129)';
})

addInput.addEventListener('mouseout',() =>{
    addBtn.style.backgroundColor = '';
    addInput.style.backgroundColor = '';
})