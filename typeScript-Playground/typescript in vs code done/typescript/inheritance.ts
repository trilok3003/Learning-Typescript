class Person{
    fname:string;
    lname:string;
    constructor(fname,lname){
      this.fname=fname;
      this.lname=lname;
    }
    display():string{
        return this.fname + " " +this.lname;
    }
}
class Employee1 extends Person{
    age:number;
    salary:number;
    constructor(fname,lname,age,salary){
        super(fname,lname);
        this.age=age;
        this.salary=salary;
    }
    displayEmp(){
        return this.fname +" " +this.lname+ " "+this.age+ " "+this.salary;
    }
}

let person1=new Person("sani","kumar");
console.log(person1.display());
let employee=new Employee1("kumkum","sharma",23,45000);
console.log(employee.displayEmp());