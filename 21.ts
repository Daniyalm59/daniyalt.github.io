interface Book {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
}

let books: Book[] = [
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
for (const book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log("---------------------------");
}
