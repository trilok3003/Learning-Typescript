var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Wheels(numOfWheels) {
    console.log('-- decorator factory invoked --');
    return function (constructor) {
        console.log('-- decorator invoked --');
        constructor.prototype.wheels = numOfWheels;
    };
}
var Vechical = /** @class */ (function () {
    function Vechical(make) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
    Vechical = __decorate([
        Wheels(4)
    ], Vechical);
    return Vechical;
}());
console.log('-- creating an instance --');
var vechical = new Vechical("Nissan");
console.log(vechical);
console.log(vechical['wheels']);
console.log('-- creating another instance --');
vechical = new Vechical("Toyota");
console.log(vechical);
console.log(vechical['wheels']);