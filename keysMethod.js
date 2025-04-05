const computer = {
    motherboard : 'msi',
    processor : 'amd',
    ram : 16,
    ssd : 512,
    powerSupply : 'corsair',
    cabinet : 'gigabyte',
}

// acess all the keys of object by keys() method
let computerKeys = Object.keys(computer);
console.log(computerKeys);