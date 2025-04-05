// system 01
const pen = {
    brand : 'econo',
    price : 5
}
console.log(pen);


// system 02
const pencil = new Object();
console.log(pencil);
pencil.brand = 'matador';
pencil.type = '2b';
console.log(pencil);


// system 03
const rubber = Object.create({});
console.log(rubber);
rubber.name = 'faber-castell';
rubber.cost = 5;
console.log(rubber);