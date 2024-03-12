// TASK 1
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Create an array of strings using array constructor generic type
var strings = ["apple", "banana", "orange"];
// Create a tuple that keeps a string as the first value and a boolean as the second
var tuple = ["Hello", true];
// Create an enum
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 0] = "User";
    UserRole[UserRole["SuperUser"] = 1] = "SuperUser";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 3] = "SuperAdmin";
})(UserRole || (UserRole = {}));
// Create a function that takes 2 arguments, x, y both numbers, and returns the product of the 2 numbers
function multiply(x, y) {
    return x * y;
}
// Create a function that takes 2 arguments, x, y both numbers, and divides x by y
function divide(x, y) {
    return x / y;
}
// Create a function that takes a name and prints it without returning anything
function printName(name) {
    console.log(name);
}
// Create a function getName
function getName(obj) {
    if (obj.lastname) {
        return "".concat(obj.firstname, " ").concat(obj.lastname);
    }
    else {
        return obj.firstname;
    }
}
// Create a function PhoneBook
function PhoneBook(details) {
    // Implementation
}
// Create an array of objects expecting PersonDetails objects
var persons = [];
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
