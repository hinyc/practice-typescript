"use strict";
//implements 를 이용해 interface의 내용을 바탕으로 class을 생성
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}
const person = new Person("Hinyc");
person.hello();
console.log(person.name);
