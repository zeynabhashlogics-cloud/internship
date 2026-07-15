const prompt=require("prompt-sync")();
let c=Number(prompt("enter num = "));

function cel(c)
{
   return c*(9/5)+32;
}
console.log("temp in fahrenheit is = " + cel(c));