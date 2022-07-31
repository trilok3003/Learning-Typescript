/**
 * The definition of the Builder Pattern is a separation of the 
 * construction of a complex object from its representation.
 * 
 */
 export class House {
    address: string;
    floorNumber: number;
    city: string;
    isHavingParking: boolean;
    isHavingGarden: boolean;
    
    constructor(houseBuilder: HouseBuilder) {
        this.address = houseBuilder.address;
        this.city = houseBuilder.city;
        this.floorNumber = houseBuilder.floorNumber;
        this.isHavingParking = houseBuilder.isHavingParking;
        this.isHavingGarden = houseBuilder.isHavingGarden;
    }
}

/**
 * HouseBuilder implementation
 */
export class HouseBuilder {

    private readonly _address: string;
    private _floorNumber: number = 0;
    private _isHavingParking: boolean = false;
    private _city: string;
    private _isHavingGarden: boolean = false;

    constructor(address: string) {
        this._address = address;
    }

    setFloor(floor: number) {
        this._floorNumber = floor;
        return this;
    }

    setCity(city: string){
        this._city = city;
        return this;
    }

    makeParking() {
        this._isHavingParking = true;
        return this;
    }

    makeGarden() {
        this._isHavingGarden = true;
        return this;
    }

    build() {
        return new House(this);
    }

    get isHavingParking() {
        return this._isHavingParking;
    }

    get isHavingGarden() {
        return this._isHavingGarden;
    }

    get address() {
        return this._address;
    }

    get floorNumber() {
        return this._floorNumber;
    }

    get city(){
        return this._city;
    }
}

function clientCode() {
    const myHouse = new HouseBuilder('Ramesh Fadatare, Street: Katraj')
    .setCity("Pune")
    .setFloor(5)
    .makeGarden()
    .makeParking()
    .build();

    console.log(myHouse);
}

clientCode();