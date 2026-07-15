console.log("EMPLOYEE ID PROFILE");
const prompt=require("prompt-sync")();

let name =prompt("enter name = ");
let age =Number (prompt("age is = "));
let dept =prompt("enter department = ");
let experience =prompt("experience = ");
let city=prompt("enter city = ");
let salary =2000;
function annualsalary(salary)
{
   return salary *12;
}
console.log("annual salary = "+annualsalary(salary));
