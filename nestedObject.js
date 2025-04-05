const college = {
    name : 'ndc',
    location : 'motijheel',
    class : {
        students : {
            eleven : 400,
            twelve : 300,
        }
    },
    holidays : ['21 February', '26 march', '16 december'],
}

// property access by dot notation
console.log(college);
console.log(college.class);
console.log(college.class.students);
console.log(college.class.students.eleven);

// update property by dot notation
college.class.students.eleven = 600;
console.log(college);



// property access by square bracket notation
console.log(college);
console.log(college['class']);
console.log(college['class']['students']);
console.log(college['class']['students']['twelve']);

// update property by square bracket notation
college['class']['students']['twelve'] = 500;
console.log(college);

college.holidays[1] = '14 april';
console.log(college);


// delete object property
delete college.location;
console.log(college);