const laptop = {
    chipset : 'hp',
    processor : 'amd',
    ram : 16,
    ssd : 512,
    powerSupply : 450,
    battery : 45,
}

// access all the values of an object using values() method
let laptopValues = Object.values(laptop);
console.log(laptopValues);
