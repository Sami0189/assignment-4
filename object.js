const student = {
    name :'sami',
    id:121,
    address:'movie',
    issingle:true,
    friends:['opu','sam','salman','aamir'],
    movies:[{name:'no-1',year:2015},{name:'king khan',year:2018}],
    act:function(){
        console.log('acting like sakib khan')
    },
    car:{
        brand:'tesla',
        price:400000,
        made:2024,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask'
        }
    }
}
//console.log(student.car.price);
console.log(student.act);
student.act();
