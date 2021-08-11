"use strict";
const p41 = {
    name: "Hinyc",
    age: 31,
    hello: function () {
        console.log(`p41 안녕하세요 ${this.name} 입니다.`);
    },
};
const p42 = {
    name: "Hinyc",
    age: 31,
    hello() {
        console.log(`p42 안녕하세요 ${this.name} 입니다.`);
    },
};
// const p43: Person4 = {
//   name: "Hinyc",
//   age: 31,
//   hello: (): void => {
//     console.log(`p4 안녕하세요 ${this.name} 입니다.`);
//   },
// };
// arrow functio 사용시 this사용 불가.
p41.hello();
p42.hello();
