function endsVowel(str){
    for (let i of "aeiou"){
        if (str.endsWith(i)){
            return true;
        }
    }
    return false;
}
const sa = endsVowel('sami');
console.log(sa);