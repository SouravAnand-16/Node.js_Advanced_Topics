// TASK 1

// Create an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Create an array of strings using array constructor generic type
const strings: Array<string> = ["apple", "banana", "orange"];

// Create a tuple that keeps a string as the first value and a boolean as the second
let tuple: [string, boolean] = ["Hello", true];

// Create an enum
enum UserRole {
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

// Create a function that takes 2 arguments, x, y both numbers, and returns the product of the 2 numbers
function multiply(x: number, y: number): number {
    return x * y;
}

// Create a function that takes 2 arguments, x, y both numbers, and divides x by y
function divide(x: number, y: number): number {
    return x / y;
}

// Create a function that takes a name and prints it without returning anything
function printName(name: string): void {
    console.log(name);
}

// TASK 2

// Create an interface for an object
interface MyObject {
    title: string;
    status: boolean;
    id: number;
}

// Create a function getName
function getName(obj: { firstname: string; lastname?: string }): string {
    if (obj.lastname) {
        return `${obj.firstname} ${obj.lastname}`;
    } else {
        return obj.firstname;
    }
}

// Create an interface Address
interface Address {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

// Create an interface for PersonDetails
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstname: string;
    lastname?: string;
    middlename?: string;
}

// Create a function PhoneBook
function PhoneBook(details: PersonDetails): void {
    // Implementation
}

// Create an array of objects expecting PersonDetails objects
const persons: PersonDetails[] = [];

// Push PersonDetails objects into the array
persons.push({
    firstname: "John",
    phones: [1234567890],
    addresses: [{
        houseNumber: "123",
        street: "Main St",
        city: "City",
        state: "State",
        postalCode: "12345",
        country: "Country"
    }]
});

persons.push({
    firstname: "Alice",
    lastname: "Smith",
    phones: [9876543210],
    addresses: [{
        houseNumber: "456",
        street: "First Ave",
        city: "Town",
        state: "State",
        postalCode: "54321",
        country: "Country"
    }]
});



