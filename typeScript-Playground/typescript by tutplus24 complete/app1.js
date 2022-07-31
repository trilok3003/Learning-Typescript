// array
var array1 = ["ram", "shyaam", "ravi"];
console.log(array1);
var array2 = ["ram", "shyaam", "ravi"];
console.log(array2);
var array3 = [2, 3, 4, 5];
console.log(array3);
var array4 = [2, 3, 4, 5];
console.log(array4);
//enum
var my;
(function (my) {
    my[my["pi"] = 3.14] = "pi";
    my[my["e"] = 345] = "e";
})(my || (my = {}));
console.log(my.pi);
console.log(my.e);
var my1;
(function (my1) {
    my1[my1["pi"] = 0] = "pi";
    my1[my1["e"] = 1] = "e";
})(my1 || (my1 = {}));
console.log(my1.pi);
console.log(my1.e);
var my2;
(function (my2) {
    my2[my2["a"] = 0] = "a";
    my2[my2["b"] = 6] = "b";
    my2[my2["c"] = 7] = "c";
    my2[my2["d"] = 8] = "d";
})(my2 || (my2 = {}));
console.log(my2.a);
console.log(my2.b);
console.log(my2.c);
console.log(my2.d);
var person1 = {
    name: "shivi",
    age: 20,
    salary: 34000
};
console.log(person1);
var employees = [];
employees.push({
    name: "amit",
    age: 20,
    salary: 34000
});
employees.push({
    name: "anil",
    age: 30,
    salary: 24000
});
console.log(employees);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    console.log(employee.name + " " + employee.age + " " + employee.salary);
}
function calArea(a) {
    console.log(Math.PI * a.radius * a.radius);
}
var myfigure = { shape: "circle", radius: 2 };
calArea(myfigure);
function calArea1(a) {
    console.log(Math.PI * a.radius * a.radius);
}
var myfigure1 = { shape: "circle", radius: 2 };
calArea1(myfigure);
var p1 = {
    x: 4,
    y: 9
};
p1.y = 7;
console.log(p1.y);
