const prompt = require("prompt-sync")();
let l=Number(prompt("enter the length = "));
let w=Number(prompt("enter width = "));


function area (l,w)
{
   return l*w;
}
function peri(l,w)
{
    return 2*(l+w);
}
console.log("perimeter = " + peri(l,w));
console.log("area = " + area(l,w));
