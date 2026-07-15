const prompt = require("prompt-sync")();

let price = Number(prompt("Enter price = "));
let quant = Number(prompt("Enter quantity = "));
let shipping = Number(prompt("Enter shipping charges = "));
let tax = Number(prompt("Enter tax = "));

function subtotal(price, quant) 
{
    return price * quant;
}

function totaltax(price, quant) 
{
    return subtotal(price, quant) * tax / 100;
}

function total(price, quant, shipping) 
{
    return subtotal(price, quant) + totaltax(price, quant) + shipping;
}

console.log("Subtotal = " + subtotal(price, quant));
console.log("Shipping Charges = " + shipping);
console.log("Tax = " + totaltax(price, quant));
console.log("Total = " + total(price, quant, shipping));