//1
function mySum(n1, n2) {
    return n1 + n2;
}
console.log(mySum(4, 7));
//2
function mySum1(n1, n2) {
    return n1 + n2;
}
console.log(mySum1(4, 7));
//3
function mySum2(n1, n2) {
    return n1 + n2;
}
console.log(mySum2(4, 7));
console.log(typeof (mySum2(4, 7)));
//4
function mySum3(n1, n2) {
    return n1 + " " + n2;
}
console.log(mySum3("hello", 7));
console.log(typeof (mySum3("hello", 7)));
//5
function mySum4(n1) {
    return n1;
}
console.log(mySum4('4'));
console.log(typeof (mySum4('4')));
//6
function mySum5(n1, n2) {
    return parseInt(n1) + n2;
}
console.log(mySum5("4", 7));
console.log(typeof (mySum5("4", 7)));
//7  default value
function mySum6(n1, n2) {
    if (n2 === void 0) { n2 = 5; }
    return n1 + n2;
}
console.log(mySum6(7));
console.log(mySum6(6, 7));
//8 optional parameter
function mySum8(n1, n2) {
    if (n2 == undefined)
        return n1 + n1;
    return n1 + n2;
}
console.log(mySum8(7));
console.log(mySum8(6, 7));
function result(x) {
    if (typeof x == "number") {
        return x * x;
    }
    else if (typeof x == "string") {
        return x;
    }
}
console.log(result(4));
console.log(result("hello"));
//10 without generics
function gen(arg) {
    return arg;
}
console.log(gen(6));
//11 with generics
function gen1(arg) {
    return arg;
}
var mygen = gen1(5);
console.log(mygen);
var mygen1 = gen1("hello");
console.log(mygen1);
