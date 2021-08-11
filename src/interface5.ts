interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

//implements 를 이용해 interface의 내용을 바탕으로 class을 생성
class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

const person = new Person("Hinyc");

person.hello();

console.log(person.name);
