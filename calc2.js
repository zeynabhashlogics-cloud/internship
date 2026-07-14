const prompt = require("prompt-sync")();

let a =Number(prompt("first number = "));
let b= Number(prompt("second number = "));

let add = a+b;
let sub =a-b;
let div=a/b;
let mul =a*b;

console.log("addition = " + add);
console.log("subtraction = " + sub);
console.log("multiplication = " + mul);
console.log("division = " + div);