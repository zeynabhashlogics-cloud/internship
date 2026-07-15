const prompt=require("prompt-sync")();
let n=Number(prompt("enter amount in pkr = "));
let rate =280;

function conversion(n,rate)
{
    return n/rate;
}
function remaining(n,rate)
{
    return n%rate;
}
console.log("amount in usd = "+conversion(n,rate));
console.log("remaining amount = "+remaining(n,rate));