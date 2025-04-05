// if we need many variable of a particular thing
let bottleExpensive = true;
let bottlePrice = 100;
let bottleBrand = "lotto";
let bottleColors = ['red', 'green', 'blue']
console.log(bottleExpensive, bottlePrice, bottleBrand, bottleColors);
console.log(typeof bottleExpensive,typeof bottlePrice,typeof bottleBrand,typeof bottleColors);


// we can declare it simply one line via object
// object is a non-primitive data type

const bottle = {
    isExpensive : false,
    price : 50,
    brand : 'puma',
}
console.log(bottle);
console.log(typeof bottle);


// we can declare non-primitive data types as like:
//  array and object inside an object
const subject = {
    name : 'biology',
    examDate : '10 April',
    chapters : [1, 2, 5, 7, 9],
    examType : {
        info : 'semester final',
        marks : 150,
        credit : 30,
    }
}
console.log(subject);
console.log(typeof subject);
