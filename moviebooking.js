const prompt=require("prompt-sync")();
let ticketamt=Number(prompt("enter amount of tickets = "));
let ticketprice=Number(prompt("enter price of ticket = "));
let taxonticket =Number(prompt("enter tax = "));

function ticketsubtotal(ticketamt,ticketprice)
{
    return ticketamt*ticketprice;
}
function taxamount(ticketamt,ticketprice,taxonticket)
{
    return ticketsubtotal(ticketamt,ticketprice)*taxonticket/100;
}
function totalamount(ticketamt,ticketprice,taxonticket)
{
    return taxamount(ticketamt,ticketprice,taxonticket)+ticketsubtotal(ticketamt,ticketprice);
}
console.log("total tax = "+taxamount(ticketamt,ticketprice,taxonticket));
console.log("subtotal"+ ticketsubtotal(ticketamt,ticketprice));
console.log("total amount with tax = "+totalamount(ticketamt,ticketprice,taxonticket));