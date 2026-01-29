
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);  // apple (1!)
console.log(fruits[1]);  // banana (2)
console.log(fruits[2]);  // orange (3)


let colors = ["red", "green", "blue", "yellow"];
console.log(colors[0]); // red
console.log(colors[3]); // yellow
console.log(colors.length); // 4


let shoppingList = ["milk", "bread", "eggs"];
shoppingList.push("cheese");
console.log(shoppingList);   
shoppingList.pop();
console.log(shoppingList);


//Loop 
let fruits2 = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let colors2 = ["red", "green", "black"];

for (let x = 0; x < colors2.length; x++) {
    console.log(colors2[x]);
}

let names = ["Aviv", "Sarah", "John", "Emma"];

for ( let i = 0; i <  names.length;  i ++ ) {
    console.log(names[i]);
}

let students2 = ["Alice", "Bob", "Charlie"];

for ( let i = 1; i < students2.length; i++ ) {
    console.log(students2[i]);
    console.log(students2[i]);



}


//Async/Await
// // async = מאפשרת לפונקציה להשתמש ב-await
//  await = חכה שהפעולה תסתיים לפני שממשיכים
//  ב-Playwright תשימי await לפני כל פעולה!


//Arrow Function:

function multiply(a, b) {
    return a * b;
}

const multiply = (a , b) => {
    return a * b;

}

const multiply = (a, b) => a * b;


function greet(name) {
    console.log("Hello " + name);
}

const greet = (name) => {
    console.log("Hello " + name);
}


const students = [
    {
        name: "Mike",
        age: 22,
        course: "Playwright",
        grade: 95
    },
    {
        name: "Ayala",
        age: 23,
        course: "Playwright",
        grade: 56
    },
    {
        name: "Alon",
        age: 24,
        course: "Playwright",
        grade: 78
    },
    {
        name: "Mika",
        age: 21,
        course: "Playwright",
        grade: 88
    }
];


console.log(students);  
console.log(students[0]);  
console.log(students[0].name);

function printStudentInfo(student) {
    console.log (` Name : ${student.name} , Age: ${student.age} , Course: ${student.course} , Grade: ${student.grade} `);
};


