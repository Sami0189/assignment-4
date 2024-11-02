const numbers = [45,65,23,98,19];

// for(let i = 0; i< numbers.length;i++){
//     const number = numbers[i];
//     console.log(number);
// }


//simple version
for(const number of numbers){
   //console.log(number);
}

const products = [
    {id:1,name:'walton phone',price:19000},
    {id:2,name:'samsung phone',price:1900},
    {id:3,name:'mi phone',price:190},
    {id:4,name:'oppo phone',price:18000},
    {id:5,name:'apple',price:12000},
    {id:6,name:'tesla ',price:13000},
    {id:7,name:'nokia',price:100},
    {id:8,name:'sky phone',price:1550},
    {id:8,name:'sky phone',price:1550},
];
for(const phone of products){
    //console.log(phone);
}

function matchedProducts(products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }return matched;
}
const result = matchedProducts(products,'sky');
console.log(result);