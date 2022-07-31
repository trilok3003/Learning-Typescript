//Type annotations
function greeter(person:string){
    return "hello:"+" " + person;
}
let user ="shyaam"
console.log(greeter("ram"));
console.log(greeter(user));
//document.body.innerHTML = greeter("ram");
//document.body.innerHTML = greeter(user);

//Interfaces
interface Person{
    firstName:string,
    lastName:string
}
function greet(person:Person){
   return "Hello, " +person.firstName +" " +person.lastName;
}
let user1={firstName:"ram",lastName:"singh"};
console.log(greet(user1));
//document.body.innerHTML = greet(user1);

// class
class Student{
    fullname:string;
    constructor(public firstName:string,public lastName:string){
        this.fullname=firstName +" " +lastName;
    }
}
let user2=new Student("deven","verma");
console.log(greet(user2));
//document.body.innerHTML = greet(user2);