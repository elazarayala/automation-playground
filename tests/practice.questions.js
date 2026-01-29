
Object + Function 
const student = {
    name: "Mike",
    age: 22,
    grade: 95
};

function printStudent(student) {
    console.log(`${student.name} is ${student.age} years old and has grade ${student.grade}`);
}

printStudent(student);

Array + Loop
// יש לך רשימת שמות:
const names = ["Mike", "Ayala", "Alon"];

// עברי עליהם והדפיסי:
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

Array + Objects
// עכשיו 2 סטודנטים (לא 4!):
const students = [
    { name: "Mike", grade: 95 },
    { name: "Ayala", grade: 88 }
];

// הדפיסי את השם של הסטודנט הראשון:
console.log(students[0].name);  // Mike

// הדפיסי את הציון של הסטודנט השני:
console.log(students[1].grade);  // 88

Objects + Array + Loop
const students2 = [
    { name: "Mike", grade: 95 },
    { name: "Ayala", grade: 88 }
];

// עברי על כל הסטודנטים והדפיסי אותם:
for (let i = 0; i < students2.length; i++) {
    console.log(`${students[i].name} has grade ${students[i].grade}`);
}


const students3 = [
    { name: "Mike", age: 22, grade: 95 },
    { name: "Ayala", age: 23, grade: 88 }
];

for ( let i = 0; i < students3.length; i ++ ) {
    console.log(`${students[i].name} has grade ${students[i].grade}`);
}

