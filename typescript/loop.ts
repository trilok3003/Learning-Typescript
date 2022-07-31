/**
 * for loop
for..of loop
for..in loop
Difference between for..of vs. for..in statements
Using a forEach loop
 */

for(let i = 0; i < 5; i++){
    console.log("element " + i);
}
let array = [10, 20, 30, 40];
for (let val of array) {
    console.log(val); // prints values: 10, 20, 30, 40
}
let intArray = [10, 20, 30, 40];

for (var index in intArray) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(intArray[index]); // prints elements: 10, 20, 30, 40
}
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}
let programmingLangs2 : string[] = ['C', 'C++', 'Java', 'JavaScript'];

// using forEach() method
programmingLangs2.forEach(element => {
    console.log(element);
});