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









