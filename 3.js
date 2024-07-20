var Name_of_person1 = "muHammad dAniYal";
// Lowercase
console.log("Lowercase: " + Name_of_person1.toLowerCase());
// Uppercase
console.log("Uppercase: " + Name_of_person1.toUpperCase());
// Titlecase
console.log("Titlecase: " + Name_of_person1.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
