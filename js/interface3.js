"use strict";
function hello3(person) {
    console.log(`p3 안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: "hinyc",
    age: 31,
};
const p32 = {
    name: "lee",
    sisters: ["uk", "ik"],
};
const p33 = {
    name: "Woo",
};
hello3(p31);
hello3(p32);
hello3(p33);
