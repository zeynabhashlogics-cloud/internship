const prompt = require("prompt-sync")();
let salary =Number(prompt("enter salary = "));
let bonus=Number(prompt("enter bonus = "));
let deduction=Number(prompt("enter deduction = "));


function bonusamount(salary,bonus)
{
    return salary *bonus/100;
}
function deductionamount(salary,deduction)
{
    return salary *deduction/100;
}
function finalsal(salary,bonus,deduction)
{
    return salary + bonusamount(salary,bonus)- deductionamount(salary,deduction);
}
console.log("initial salary = "+salary);
console.log("bonus = "+bonus);
console.log("deduction = "+deduction);
console.log("bonus amount = "+bonusamount(salary,bonus));
console.log("deduction amount = "+deductionamount(salary,deduction));
console.log("final salary = "+finalsal(salary,bonus,deduction));

