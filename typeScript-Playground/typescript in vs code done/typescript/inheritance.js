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
    Person.prototype.display = function () {
        return this.fname + " " + this.lname;
    };
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(fname, lname, age, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.age = age;
        _this.salary = salary;
        return _this;
    }
    Employee1.prototype.displayEmp = function () {
        return this.fname + " " + this.lname + " " + this.age + " " + this.salary;
    };
    return Employee1;
}(Person));
var person1 = new Person("sani", "kumar");
console.log(person1.display());
var employee = new Employee1("kumkum", "sharma", 23, 45000);
console.log(employee.displayEmp());
