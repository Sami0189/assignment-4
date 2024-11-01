//problem - 1

function calculateMoney(ticketSale){
  if(ticketSale<0){
    return 'invalid number';
  }
    
   const perTicketPrice =  120;
   const janitorFee = 500;
   const totalStafFee = 8 * 50;

   const otherExpenses = janitorFee + totalStafFee;

   const profitByTicket = ticketSale * perTicketPrice;

   const total = profitByTicket - otherExpenses;
   return total; 
}
const total= calculateMoney(1055);
console.log(total);



//problem-2

function checkName(name){
  if(typeof name !=='string'){
    return 'invalid';
  }
  for(let i of "ayieouAYIEOUW"){
    if(name.endsWith(i)){
      return 'good name';
    } 
}
  return 'bad name';
}
const output = checkName('Salman');
console.log(output);