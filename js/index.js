// Prevent us from attempting to use variables
// that are not declared


"use strict";

/*
// Array of popcorn types
const popcornTypes = ['Butter', 'Cheese', 'Caramel', 'Chocolate', 'Salted'];

// Basic loop syntax
for (let i = 0; i < popcornTypes.length; i++) {
    console.log(popcornTypes[i]); // Output: Butter, Cheese, Caramel, Chocolate, Salted
}

// Using "for...of" syntax
for (const type of popcornTypes) {
    console.log(type); 
    // Output: Butter, Cheese, Caramel, Chocolate, Salted
}

// Using Array.forEach() method
popcornTypes.forEach(type => {
    console.log(type); 
    // Output: Butter, Cheese, Caramel, Chocolate, Salted
});

// Attempt to assign new values using "for...of"
for (const type of popcornTypes) {
    type = 'Gourmet'; 
    // This won't change the original array
}
console.log(popcornTypes); 
    // Output: Butter, Cheese, Caramel, Chocolate, Salted

// Attempt to assign new values using Array.forEach()
popcornTypes.forEach((type, index, array) => {
    array[index] = 'Gourmet'; 
    // This will change the original array
});
console.log(popcornTypes); 
    // Output: Gourmet, Gourmet, Gourmet, Gourmet, Gourmet

// Using "for...in" loop
for (const index in popcornTypes) {
    console.log(index + ': ' + popcornTypes[index]); 
    // Output: 0: Gourmet, 1: Gourmet, 2: Gourmet, 3: Gourmet, 4: Gourmet
}
*/
