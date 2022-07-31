class Employee2 {
    private _id: number;
    private _fullName: string;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }
}

// create Employee class object
let employee = new Employee2();
employee.id = 200;
employee.fullName = 'Ramesh Fadatare';
console.log(employee);
console.log(employee.fullName);