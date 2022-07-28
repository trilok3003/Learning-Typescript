/**
 * 1 : string based enums
 *  2: number based enums
 * 3: Heterogeneous Enum
 * 4: const enums
 * 5:  Enum with static functions 
 */

 enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction['Up']);
console.log(Direction['Down']);
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(Weekday.Sunday);
console.log(Weekday['Sunday']);
console.log(Weekday[0]);
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
const enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}