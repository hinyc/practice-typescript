"use strict";
// ?가 붙은 age?는 없어도 되는 옵션이다.
function hello2(person) {
    console.log(`p2 안녕하세요! ${person.name} 입니다.`);
}
const p21 = {
    name: "hinyc",
    age: 31,
};
const p22 = {
    name: "hinyc",
};
//위의 두경우 모두 가능.
hello2(p21);
hello2(p22);
