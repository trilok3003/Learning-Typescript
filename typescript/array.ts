//  Using square brackets
let programmingLangs : string[] = ['C', 'C++', 'Java', 'JavaScript'];
// Using a generic array type, Array<elementType>.
let programmingLangs1: Array<string> = ['C', 'C++', 'Java', 'JavaScript'];
// Add an element to an array
programmingLangs.push('Python');
programmingLangs.push('Kotlin');
// loop
// forEach()
for(let element of programmingLangs){
    console.log(element);
}
for (var i = 0; i < programmingLangs.length; i++) {
    console.log(programmingLangs[i]);    
}
// clone array
let numbers :number[] = [10, 20, 30, 40,50];   
let clonedNumbers = [...numbers];
numbers.push( 60 );
numbers.push( 70 );
console.log(numbers);       // [ 10, 20, 30, 40, 50, 60, 70 ]
console.log(clonedNumbers);     // [ 10, 20, 30, 40, 50 ]
// Merge Arrays
let numbers1 :number[] = [10, 20, 30, 40,50];   
let numbers2 :number[] = [60, 70, 80, 90];  
let mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers); // [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]