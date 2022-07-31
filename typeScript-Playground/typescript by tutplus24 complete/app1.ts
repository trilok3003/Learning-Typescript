// array
var array1:string[]=["ram","shyaam","ravi"];
console.log(array1);
var array2:Array<string>=["ram","shyaam","ravi"];
console.log(array2);
var array3:number[]=[2,3,4,5];
console.log(array3);
var array4:Array<number>=[2,3,4,5];
console.log(array4);
//enum
enum my{
    pi=3.14,
    e=345
}
console.log(my.pi);
console.log(my.e);
enum my1{
    pi,
    e,
}
console.log(my1.pi);
console.log(my1.e);

enum my2{
    a,
    b=6,
    c,
    d
}
console.log(my2.a);
console.log(my2.b);
console.log(my2.c);
console.log(my2.d);
// interface
interface Person{
    name:string;
    age:number;
    salary?:number;
}
var person1:Person={
    name:"shivi",
    age:20,
    salary:34000
}
console.log(person1);
var employees:Person[]=[];
employees.push({
    name:"amit",
    age:20,
    salary:34000
});
employees.push({
    name:"anil",
    age:30,
    salary:24000
});
console.log(employees);
for(var employee of employees){
    console.log(employee.name+" "+employee.age+" "+employee.salary);
}
function calArea(a:{radius:number}){
  console.log(Math.PI * a.radius * a.radius);
}
let myfigure={shape:"circle",radius:2}
calArea(myfigure);
           //or
interface Circle{
    radius:number;
}
function calArea1(a:Circle){
    console.log(Math.PI * a.radius * a.radius);
  }
  let myfigure1={shape:"circle",radius:2}
  calArea1(myfigure);

  interface Point{
      readonly x:number;
      y:number;
  }
  let p1:Point={
      x:4,
      y:9
  }
  p1.y=7;
  console.log(p1.y);