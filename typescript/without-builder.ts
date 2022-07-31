export class House {
    address: string;
    floorNumber: number;
    city: string;
    isHavingParking: boolean;
    isHavingGarden: boolean;

    constructor(address: string, floorNumber: number, city: string, isHavingParking: boolean, isHavingGarden: boolean){
        this.address = address;
        this.floorNumber = floorNumber;
        this.city = city;
        this.isHavingParking = isHavingParking;
        this.isHavingGarden = isHavingGarden;
    }
}

function clientCode() {
    const myHouse = new House("Ramesh Fadatare 4803111", 14, "Pune", true, true);    
}

clientCode();