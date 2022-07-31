export interface Employee{
    firstName: string;
    lastName?: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "trilok",
    lastName: "singh",
    fullName(): string{
        return this.firstName + " " + this.lastName;
    }
}
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());
interface Point {
    readonly x: number;
    readonly y: number;
}

interface IAddress {
    address: string;
} 

interface IPerson extends IAddress{
    firstName: string;
    lastName: string;
}


interface Employee1 {
    name: string;
    paymentPerHour: number;
    workingHours: number;
    calculateSalary(): number;
}

class Contractor implements Employee1 {
    name: string;
    paymentPerHour: number;
    workingHours: number;
    constructor(name: string, paymentPerHour: number, workingHours: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
        this.workingHours = workingHours;
    }

    calculateSalary(): number {
        return this.paymentPerHour * this.workingHours;
    }
}

class FullTimeEmployee implements Employee1 {
    name: string;
    paymentPerHour: number;
    workingHours: number;

    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    calculateSalary(): number {
        return this.paymentPerHour * 8;
    }
}

let contractor: Employee1;
let fullTimeEmployee: Employee1;
contractor = new Contractor('Ramesh contractor', 10, 5);
fullTimeEmployee = new FullTimeEmployee('Ramesh full time employee', 8);

console.log(contractor.calculateSalary());
console.log(fullTimeEmployee.calculateSalary());

interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);

// Array which return string
interface ProLangArray {
    [index:number]:string
}

// use of the interface  
let progLangArray : ProLangArray = ['C', 'C++', 'Java', 'Python'];
console.log(progLangArray);