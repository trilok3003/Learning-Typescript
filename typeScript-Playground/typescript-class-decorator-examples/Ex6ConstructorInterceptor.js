var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Listener(listener) {
    return function (constructorFunction) {
        //new constructor function
        var newConstructorFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var func = function () {
                return new (constructorFunction.bind.apply(constructorFunction, [void 0].concat(args)))();
            };
            func.prototype = constructorFunction.prototype;
            var result = new func();
            listener.onObjectCreation(result);
            return result;
        };
        newConstructorFunction.prototype = constructorFunction.prototype;
        return newConstructorFunction;
    };
}
var MyObjectListener = /** @class */ (function () {
    function MyObjectListener() {
    }
    MyObjectListener.prototype.onObjectCreation = function (obj) {
        console.log("Object created: " + JSON.stringify(obj));
    };
    return MyObjectListener;
}());
var TaskRunner = /** @class */ (function () {
    function TaskRunner(taskName) {
        this.taskName = taskName;
    }
    TaskRunner = __decorate([
        Listener(new MyObjectListener())
    ], TaskRunner);
    return TaskRunner;
}());
console.log("creating an instance");
var taskRunner = new TaskRunner("test");