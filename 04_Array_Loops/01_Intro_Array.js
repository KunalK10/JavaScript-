// Creating Array 

let tasks = ["Workout", "Coding", "Meditation", "Problem Solving"];

let names = new Array("Kunal", "Hitesh", "Abhishek");

console.log(names);

// Access an Array item using the index position

let firstItem = tasks[0];

console.log(firstItem);

// Loops over an Array

tasks.forEach(function(item, index, tasks) {
    console.log(item, index);
})

// Add an item at end of Array

let AddItems = tasks.push("Project");

// console.log(AddItems);
console.log(tasks);

// Remove an items at the end of Array

let removeItems = tasks.pop()

console.log(removeItems);

// Remove an item from begininng of an array

tasks.shift()

console.log(tasks);

// Add an items in an begining 

tasks.unshift("Running")

console.log(tasks);

// find the index of an items in Array

let fruits = ["Mango", "Kalingad", "Sitaphal", "Kel"]

let pos = fruits.indexOf("Mango");
let noItems = fruits.indexOf("new")

console.log(pos);
console.log(noItems);

// Remove an items froom index position 

let Items = ["ITEM00", "ITEM01", "ITEM02", "ITEM03", "ITEM04", "ITEM05", "ITEM06"];

let removedItems = Items.splice(1, 2)

console.log(Items);

// Copy an Array

let shallowCopy = Items.slice()

console.log(shallowCopy);

let animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));

console.log(animals.slice(2, 4));
