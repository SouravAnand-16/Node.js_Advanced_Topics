// Book class representing a book in the library
var Book = /** @class */ (function () {
    function Book(title, author, ISBN, genre) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.genre = genre;
        this.available = true;
    }
    // Method to mark the book as borrowed
    Book.prototype.borrowBook = function () {
        if (this.available) {
            this.available = false;
            return true;
        }
        else {
            return false;
        }
    };
    // Method to mark the book as returned
    Book.prototype.returnBook = function () {
        this.available = true;
    };
    return Book;
}());
// Member class representing a library member
var Member = /** @class */ (function () {
    function Member(name, address, email, contactNumber) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.contactNumber = contactNumber;
        this.borrowedBooks = [];
    }
    // Method to borrow a book
    Member.prototype.borrowBook = function (book) {
        if (this.borrowedBooks.length < 3 && book.borrowBook()) {
            this.borrowedBooks.push(book);
            return true;
        }
        else {
            return false; // Exceeded borrowing limit or book is unavailable
        }
    };
    // Method to return a book
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            return true;
        }
        else {
            return false; // Book not found in borrowed books
        }
    };
    return Member;
}());
// Library class representing the library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    // Method to add a new book to the library's collection
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // Method to register a new member
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
    };
    // Method to search for books by title, author, genre, and availability status
    Library.prototype.searchBooks = function (query) {
        return this.books.filter(function (book) {
            return book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                book.genre.toLowerCase().includes(query.toLowerCase()) ||
                (query.toLowerCase() === 'available' && book.available) ||
                (query.toLowerCase() === 'unavailable' && !book.available);
        });
    };
    return Library;
}());
// Example usage:
var library = new Library();
// Adding books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Fiction"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", "Fiction"));
// Registering members
var member1 = new Member("John Doe", "123 Main St", "john@example.com", "555-1234");
var member2 = new Member("Jane Smith", "456 Elm St", "jane@example.com", "555-5678");
library.registerMember(member1);
library.registerMember(member2);
// Member borrows a book
member1.borrowBook(library.books[0]);
// Searching for books
var searchResults = library.searchBooks("Great Gatsby");
console.log("Search Results:", searchResults);
// Member returns a book
member1.returnBook(library.books[0]);
