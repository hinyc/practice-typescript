"use strict";
// function hello1(person: { name: string; age: number }): void {
//   console.log(`안녕하세요! ${person.name} 입니다.`);
// }
function hello1(person) {
    console.log(`p1 안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: "hinyc",
    age: 31,
};
hello1(p1);
