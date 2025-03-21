const myContainer = document.getElementById("container");
generateTiles();

function generateTiles(){
    for(let i = 0; i < 9; i++){
        myContainer.innerHTML += `
        <div class="tiles" id="tile-${i+1}" style="
        background-color: white; 
        border-radius: 10px; 
        height: clamp(90px,10vw,10vw); 
        width: clamp(90px,10vw,10vw);
        margin: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        ">${i + 1}</div>`;
    } 
}

const select = () => {
    const setTiles = document.getElementById("");
    changeTurn();
}
isTurned = true;
const changeTurn = () => {
    const imageTurner = document.getElementById("image-turner");

    if(isTurned){
        imageTurner.src = "images/o.png";
    } else{
        imageTurner.src = "images/x.png";
    }
    
    isTurned = !isTurned;
}
