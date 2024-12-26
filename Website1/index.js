// console.log("Hello World!");
// console.log("Hello World number 2");
// console.log("Hello World number 3");

// let x = 100;
// const y = 5;

// console.log(x);
//console.log(y);

// let myName = "Jestaly";
// let age = 20;
// let salary = 75095.34;

// console.log("Name: " + myName);
// console.log("Age: " + age);
// console.log("Salary: " + salary);

//Use template to allow variable insertion
// const x = 5;
// const y = 0;
// let result = x % y;
// console.log(typeof y)
// console.log(`the number ${result} is the result`)
// console.log("x: " + x);
// console.log("y: " + y);
// console.log(result)

// let myName = window.prompt("type your name");

// console.log(`Welcome ${myName }`);
// console.log(`Welcome ${myName}`); 

// function countEven() {

//     for (let i = 0; i <= 10; i += 2) {
//         console.log(i);
//     }

// }
// countEven();
//===============================================//

console.log("Menu");
    console.log("[1] Create Array");
    console.log("[2] Insert Elements");
    console.log("[3] Search");
    console.log("[4] Display");
    console.log("[5] Delete");
    console.log("[0] Stop");
    

function enterChoice(){   
let choicePrompt = window.prompt("Enter Choice:")
return choicePrompt;
}
function menu(){
    while(enterChoice() != 0){
    console.log("Menu");
    console.log("[1] Create Array");
    console.log("[2] Insert Elements");
    console.log("[3] Search");
    console.log("[4] Display");
    console.log("[5] Delete");
    console.log("[0] Stop");
    enterChoice();
    }
}

menu();




















