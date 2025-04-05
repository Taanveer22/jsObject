const mobile = {
    brand : 'xiaomi',
    chipset : 'snapdragon',
    camera : 12,
    memory : 32,
}
// console.log(mobile);


// looping through an object using for---in loop
for(let element in mobile) {
    console.log(element);
    console.log(mobile[element]);
    console.log(element, ':', mobile[element]);
}


// looping trough an object using for--of loop
//  by making the object keys into an array
let mobileKeys = Object.keys(mobile);
console.log(mobileKeys);

for(let item of mobileKeys){
    console.log(item);
    console.log(mobile[item]);
    console.log(item, ":", mobile[item]);
}
