var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(constructorFunction) {
    //new constructor function
    var newConstructorFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("before invoking: " + constructorFunction.name);
        var func = function () {
            return new (constructorFunction.bind.apply(constructorFunction, [void 0].concat(args)))();
        };
        func.prototype = constructorFunction.prototype;
        var result = new func();
        console.log("after invoking: " + constructorFunction.name);
        console.log('object created: ' + JSON.stringify(result));
        return result;
    };
    newConstructorFunction.prototype = constructorFunction.prototype;
    return newConstructorFunction;
}
var Task = /** @class */ (function () {
    function Task(taskName) {
        console.log('this constructor invoked');
        this.taskName = taskName;
    }
    Task = __decorate([
        log
    ], Task);
    return Task;
}());
console.log("creating an instance");
var task = new Task("test");
console.log('task created: ' + JSON.stringify(task));
console.log("instanceof Task: " + (task instanceof Task));