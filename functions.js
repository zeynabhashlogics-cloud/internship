const prompt = require("prompt-sync")();

let a = Number(prompt("enter number 1 = "));
let b = Number(prompt("enter number 2 = "));

function add(a,b)
{
   return a+b;
}
function sub(a,b)
{
   return a-b;
}
function div(a,b)
{
   return a/b;
}
function mul(a,b)
{
   return a*b;
}
function percent(a,b)
{
   return  (a/b)*100;
}
console.log("addition = " + add(a,b));
console.log("subtraction = " + sub(a,b));
console.log("multiplication = " + mul(a,b));
console.log("division = " + div(a,b));
console.log("percentage = " + percent(a,b));
