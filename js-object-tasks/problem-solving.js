// problem 01
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);


// problem 02
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
car['passenger capacity'] = 5;
console.log(car);


// problem 03
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
console.log(student['physics']['marks']);


// problem 04
const artist = {
    name: 'Ariana Grande',
    age: 31,
    city: 'New York',
    hasAlbum: true,
};
const artistProperties = Object.keys(artist);
console.log(artistProperties);
const numberOfProperties = Object.keys(artist).length;
console.log(numberOfProperties);


// problem 05
const person = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,

};

for(let key in person){

    // console.log(key);
    // console.log(person[key]);

    console.log('key : ', key, '| type : ', typeof person[key] );
}