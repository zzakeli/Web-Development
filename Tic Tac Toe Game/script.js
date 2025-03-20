const myContainer = document.getElementById("container");
generateNums();

console.log("1");

function generateNums(){
    for(let i = 0; i < 9; i++){
        myContainer.innerHTML += `<div class="tiles" id="tile-${i+1}" style="background-color: white; border-radius: 10px; height: 30%; width: 31%;"></div>`;
    } 
}