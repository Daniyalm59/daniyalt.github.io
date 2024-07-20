// Muhammad Daniyal (16-feb-2024)
//This Program converts person name to Upper Lower and Titlecase

let Name_of_person2: string = "muhammad daniyal";

// Lowercase
console.log("Lowercase: " + Name_of_person2.toLowerCase());

// Uppercase
console.log("Uppercase: " + Name_of_person2.toUpperCase());

// Titlecase
console.log("Titlecase: " + Name_of_person2.replace(/\b\w/g, (char) => char.toUpperCase()));

// Muhammad Daniyal (16-feb-2024)
//This Program Does Simple calculation like addition,subtraction,multiplication,division,etc.

//Addition
console.log("\nAddition (5 + 3): ", 5 + 3);

//subtraction
console.log("\nSubtraction (11 - 3):", 11 - 3);

//Multiplication
console.log("\nMultiplication (2 * 4): ", 2 * 4);

//Division
console.log("\nDivision (16 / 2): ", 16 / 2);
