// function endsVowel(str){
//     for (let i of "aeiou"){
//         if (str.endsWith(i)){
//             return true;
//         }
//     }
//     return false;
// }
// const sa = endsVowel('sami');
// console.log(sa);



function password(obj){
    const year = obj.birthYear;

    //console.log(year.toString().length);

   if(obj.birthYear.toString().length!==4){
    return 'invalid';
   }

if(!obj.birthYear || !obj.name || !obj.siteName){
    return 'invalid';
}
   

   //console.log(obj);    

   const man = obj.siteName+ '#' +obj.name+ '@' + obj.birthYear;
   return man;
}
const object = password({name:'kolimuddin',birthYear:1999,siteName:'google'});
console.log(object);
