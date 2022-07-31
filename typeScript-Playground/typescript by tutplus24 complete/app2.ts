interface PersonName{
    fname:string;
    lname:string;
    displayName();
}
class  Person implements PersonName{
    //private,protected
    fname:string;
    lname:string;
    constructor(fname:string,lname:string) {
        this.fname=fname;
        this.lname=lname;
    }
    displayName():string{
        return this.fname +" " +this.lname;
    }
    static greet(){
        return "static function";
    }
}
var person1=new Person("shyam","verma");
console.log(person1.fname);
console.log(person1.displayName());
console.log(Person.greet());
class Employee extends Person{
    age:number;
    salary:number;
    constructor(fname:string,lname:string,age:number,salary:number){
      super(fname,lname);
      this.age=age;
      this.salary=salary;
    }
    empInfo(){
        return "Employee age is:" +this.age +" and salary is:" +this.salary;
    }
}
let ravi=new Employee("ravi","kumar",23,45900);
console.log(ravi.empInfo());
console.log(ravi.displayName());
console.log(ravi.fname);
console.log(ravi.age);




