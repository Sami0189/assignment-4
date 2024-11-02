//problem - 1

// function calculateMoney(ticketSale){
//   if(ticketSale<0){
//     return 'invalid number';
//   }
    
//    const perTicketPrice =  120;
//    const janitorFee = 500;
//    const totalStafFee = 8 * 50;

//    const otherExpenses = janitorFee + totalStafFee;

//    const profitByTicket = ticketSale * perTicketPrice;

//    const total = profitByTicket - otherExpenses;
//    return total; 
// }
// const total= calculateMoney(1055);
// console.log(total);



//problem-2

// function checkName(name){
//   if(name !=='string'){
//     return 'invalid';
//   }
//   for(let i of "ayieouAYIEOUW"){
//     if(name.endsWith(i)){
//       return 'good name';
//     } 
// }
//   return 'bad name';
// }
// const output = checkName(199);
// console.log(output);



//problem-3

// function deleteINvalids(array){
//     if(array!=='array'){
//       return 'invalid Array';
//     }

//   let numbers = [];
//     for(const number of array){
//       if(typeof number==='number' && !isNaN(number)){
//         numbers.push(number); 
//       }
//     }return numbers;
// }


// const numbers = deleteINvalids({num:[1,2,3]});
// console.log(numbers);



//['NaN',1,12,0,-1,'undefined']
//['sami','fsadf']
//{num:[1,2,3]}
//[1,2,-3]
//['1',{num:2},'NaN']


//Problem-4


// function password(obj){
   
//  const year = obj.birthYear;
  
//  console.log(year.toString().length);
 
//  if(obj.birthYear.toString().length!==4){
//   return 'invalid';
// }

// if(!obj.siteName || !obj.name || !obj.birthYear){
//   return 'invalid';
// }
 

//   console.log(obj);
//  const demopass = obj.siteName+'#'+obj.name+'@'+obj.birthYear;
 
//  return demopass;
   
// } 

// const man = password({name:'Kolimuddin',birthYear:1999,siteName:'google'});
// console.log(man);




//Problem-5


// function monthSaving(arr,livingCost){
// if(arr!=='array'){
//   return 'invalid input';
// }
// else if(livingCost!=='number'){
//   return 'invalid input';
// }

//     let tot = 0;
// for(const earn of arr){
//   if(earn>=3000){
//     let totalEarn = earn - (earn * 20 / 100);
//   tot  = tot + totalEarn;
//   }
//   else{
//     tot= tot + earn;
//   }
  
  
// }
// const total = tot - livingCost;

// if(total<0){
//   return 'earn more';
// }
// return total;
// }
// const saving = monthSaving(100,[900,2700,3400]);
//   console.log(saving);