// Question 1. Declare and initialise a variable with a string value.//

var animal = "Donkey";
console.log (animal);

// Question 2. Create an object variable called person and give it two properties (a key and a value) of your choice. //

var person = {
    firstName: "Thomas"
};

// Question 3. Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock. If it is true, console log "Out of stock". Otherwise log "In stock". //

outOfStock = true;

if (outOfStock === true){
    console.log("Out of Stock");
} else {
    console.log("In stock");
}

// Question 4. Create an array of five numbers. Loop through the array and console log each value. //

var numbers = [11, 22, 33, 44];
var arrayLength = numbers.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(numbers[i]);
}

// Question 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop. //

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20. //

for(var i = 15; i < 20; i++) {
    console.log(i);
}

// Question 7. Create an array of two objects. Each object must have the same three properties (with different values). //

var person = [
{  
    name: "Tim",
    age: 53,
    likesFruit: true
},
{   
    name: "Elena",
    age: 27,
    likesFruit: false 
}
];

for(var i = 0; i < person.length; i++) {
    console.log(person[i].age);
    console.log(person[i].likesFruit);
};

// Question 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument. //

function whatIDontLike(bugsIDontLike) {
console.log( "I dont like "+ bugsIDontLike);
}

whatIDontLike("spiders.");


// Question 9. Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.//

function number(x, y) {
    console.log(x - y);
}

number(13, 4);

// Question 10. Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array. Call the function and pass in a value of any type. //

var emptyArray = [];

function functionArray(x){
for(var i=0; i < emptyArray.length; i++)
    console.log(emptyArray[i]);
}

functionArray();
