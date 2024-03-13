// Book class representing a book in the library
class Book {
    title: string;
    author: string;
    ISBN: string;
    genre: string;
    available: boolean;

    constructor(title: string, author: string, ISBN: string, genre: string) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.genre = genre;
        this.available = true;
    }

    // Method to mark the book as borrowed
    borrowBook(): boolean {
        if (this.available) {
            this.available = false;
            return true;
        } else {
            return false;
        }
    }

    // Method to mark the book as returned
    returnBook(): void {
        this.available = true;
    }
}

// Member class representing a library member
class Member {
    name: string;
    address: string;
    email: string;
    contactNumber: string;
    borrowedBooks: Book[];

    constructor(name: string, address: string, email: string, contactNumber: string) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.contactNumber = contactNumber;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book: Book): boolean {
        if (this.borrowedBooks.length < 3 && book.borrowBook()) {
            this.borrowedBooks.push(book);
            return true;
        } else {
            return false; // Exceeded borrowing limit or book is unavailable
        }
    }

    // Method to return a book
    returnBook(book: Book): boolean {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            return true;
        } else {
            return false; // Book not found in borrowed books
        }
    }
}

// Library class representing the library
class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    // Method to add a new book to the library's collection
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Method to register a new member
    registerMember(member: Member): void {
        this.members.push(member);
    }

    // Method to search for books by title, author, genre, and availability status
    searchBooks(query: string): Book[] {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.genre.toLowerCase().includes(query.toLowerCase()) ||
            (query.toLowerCase() === 'available' && book.available) ||
            (query.toLowerCase() === 'unavailable' && !book.available)
        );
    }
}

// Example usage:
const library = new Library();

// Adding books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Fiction"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", "Fiction"));

// Registering members
const member1 = new Member("John Doe", "123 Main St", "john@example.com", "555-1234");
const member2 = new Member("Jane Smith", "456 Elm St", "jane@example.com", "555-5678");
library.registerMember(member1);
library.registerMember(member2);

// Member borrows a book
member1.borrowBook(library.books[0]);

// Searching for books
const searchResults = library.searchBooks("Great Gatsby");
console.log("Search Results:", searchResults);

// Member returns a book
member1.returnBook(library.books[0]);

