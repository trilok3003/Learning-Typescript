/**
 * abstarct class example
 * abstaction (Abstraction means hiding lower-level details and exposing only the essential and relevant details to the users.)
 */
abstract class Employee {
    name: string;
    paymentPerHour: number;
    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }
    public abstract calculateSalary(): number;
}
class Contractor extends Employee {
    workingHours: number;
    constructor(name: string, paymentPerHour: number, workingHours: number) {
        super(name, paymentPerHour);
        this.workingHours = workingHours;
    }
    calculateSalary(): number {
        return this.paymentPerHour * this.workingHours;
    }
}
class FullTimeEmployee extends Employee {
    constructor(name: string, paymentPerHour: number) {
        super(name, paymentPerHour);
    }

    calculateSalary(): number {
        return this.paymentPerHour * 8;
    }
}

let contractor: Employee;
let fullTimeEmployee: Employee;
contractor = new Contractor('Abc', 10, 5);
fullTimeEmployee = new FullTimeEmployee('xyz', 8);
console.log(contractor.calculateSalary());
console.log(fullTimeEmployee.calculateSalary());
// https://www.javaguides.net/p/typescript-tutorial-with-examples.html