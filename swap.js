const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

function swap(a, b) 
{
    let temp = a;
    a = b;
    b = temp;

    console.log("After swapping:");
    console.log("First number = " +a);
    console.log("Second number = "+ b);
}

swap(a, b);