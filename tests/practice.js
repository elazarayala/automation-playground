// // Function 1: Calculate sum of two numbers
// function calculateSum(a, b) {
//     return a + b;
//   }
  
//   // Test it:
//   console.log(calculateSum(5, 3)); // Should print: 8
  
  
//   // Function 2: Reverse a string
//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Test it:
//   console.log(reverseString('hello')); // Should print: olleh
  
  
//   // Function 3: Filter even numbers from an array
//   function filterEvenNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0);
//   }
  
//   // Test it:
//   console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Should print: [2, 4, 6]


function calculateSum (input1 , input2) {
    let result = input1 - input2;
    return result;
  }

let myResult = calculateSum(10, 5);
console.log(myResult);

function multiply (num1, num2) {
    return num1 * num2;
}

console.log(multiply(4, 5));

function addThree (a,b,c){
    return a + b + c;
}

console.log(addThree(1,2,3));

function divide ( x,y){
    return x / y;
}

console.log(divide(20,4));

function multiplyByTen (number){
    return number * 10;
}

console.log(multiplyByTen(7));

function sayHello ( name ){
    return "Hello, " + name + "!";
}

console.log(sayHello("Ayala")); 

function isGreaterThan100 (number){
    return number > 100;
}

console.log(isGreaterThan100(150));
console.log(isGreaterThan100(50));

function calculateAverage ( num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

console.log(calculateAverage(10,20,30));

function culatePerimeter (length, width) {
    return (length + width) * 2 ;
}
console.log(culatePerimeter(5,10));

function createFullName ( firstName, lastName){
    return firstName + " " + lastName;
}

console.log(createFullName("Ayala", "Elazar"));