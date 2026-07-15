// calculate the circumference
const prompt = require("prompt-sync")();
let r=Number(prompt("enter the radius = "));
function cir (r)
{
   return 2*3.14*r;
}
console.log("circumference is = " + cir (r));
