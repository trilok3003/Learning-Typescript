class Employee1 {
    // public id: number;
    private id: number;
    public firstName: string;
    public lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// create Employee class object
let employee = new Employee1(100, 'Ramesh', 'Fadatare');
// employee.id = 100;
console.log(employee);
console.log(employee.getFullName());