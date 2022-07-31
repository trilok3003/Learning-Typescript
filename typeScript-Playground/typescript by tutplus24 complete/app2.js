var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.displayName = function () {
        return this.fname + " " + this.lname;
    };
    Person.greet = function () {
        return "static function";
    };
    return Person;
}());
var person1 = new Person("shyam", "verma");
console.log(person1.fname);
console.log(person1.displayName());
console.log(Person.greet());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, age, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.age = age;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.empInfo = function () {
        return "Employee age is:" + this.age + " and salary is:" + this.salary;
    };
    return Employee;
}(Person));
var ravi = new Employee("ravi", "kumar", 23, 45900);
console.log(ravi.empInfo());
console.log(ravi.displayName());
console.log(ravi.fname);
console.log(ravi.age);
