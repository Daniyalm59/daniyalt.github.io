var books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        publicationYear: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationYear: 1960
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publicationYear: 1997
    }
];
console.log("Information about Books:");
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Genre: ".concat(book.genre));
    console.log("Publication Year: ".concat(book.publicationYear));
    console.log("---------------------------");
}
