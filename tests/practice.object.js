
// instead of:
let userName = "Sarah";
let userAge = 25;
let userCity = "Tel Aviv";

// use an object to group related data together:
let user = {
    name: "Sarah",
    age: 25,
    city: "Tel Aviv"
};

let person = {
    firstName : 'Ayala',
    lastName : 'Elazar',
    age : 30,
    city : 'ashdod'
};

console.log(person.firstName); // Accessing object property
console.log(person['lastName']); // Another way to access object property
console.log(person); 

let car = {
    make : 'Toyota',
    model : 'Corolla',
    year : 2020,
    color : 'blue'
}

console.log(car.model);
console.log(car['year']); 


//object with function
let person1 = {
    name : 'Aviv',
    age : 30,
};

function personInfo ( name , age){
    console.log("Name: " + name + ", Age: " + age);
}

let product = 'Laptop';
let price = 1220; 

let message = `The price of the ${product} is $${price}.`;

let city = "Tel Aviv";
let temperature = 28;

console.log(`The temperature in ${city} is ${temperature}°C.`);

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;


let newMassage = `${num1} + ${num2} = ${sum}.`;
console.log(newMassage);

let book = {
    title: 'marryMe',
    author: 'Ayala Elazar',
    pages: 80,
    year: 1998
};

function newBook(book) {
    let message = `The book ${book.title} by ${book.author} has ${book.pages} pages and was published in ${book.year}`;
    console.log(message);
}

newBook(book);



let restaurant = {
	name :  'Goda' , 
	type : 'italian',
	rating : 4.2,
};

function printRestaurant ( restaurant ) {
	let message = ` a new restaurant ${restaurant.name} as open and this is ${restaurant.type} place with ${restaurant.rating} rating`
	console.log ( message) 

};

printRestaurant (restaurant)


let movie = {
    title : 'You',
    director : 'Ayala elazar',
    year : 2020,

};

function printMovie ( movie ) {
    let message = `The movie ${movie.title} was directed by ${movie.director} and released in ${movie.year}.`;
    console.log(message);
}

printMovie(movie);


