//Type annotations
function greeter(person) {
    return "hello:" + " " + person;
}
var user = "shyaam";
console.log(greeter("ram"));
console.log(greeter(user));
function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "ram", lastName: "singh" };
console.log(greet(user1));
//document.body.innerHTML = greet(user1);
// class
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + " " + lastName;
    }
    return Student;
}());
var user2 = new Student("deven", "verma");
console.log(greet(user2));
//document.body.innerHTML = greet(user2);
