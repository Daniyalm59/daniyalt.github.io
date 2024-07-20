let Name_of_person1: string = "muhammad daniyal";

// Lowercase
console.log("Lowercase: " + Name_of_person1.toLowerCase());

// Uppercase
console.log("Uppercase: " + Name_of_person1.toUpperCase());

// Titlecase
console.log("Titlecase: " + Name_of_person1.replace(/\b\w/g, (char) => char.toUpperCase()));
