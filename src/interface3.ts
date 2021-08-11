//indexable type
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떤 이름의 index가 와도 되는 type.
}

function hello3(person: Person3): void {
  console.log(`p3 안녕하세요 ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "hinyc",
  age: 31,
};

const p32: Person3 = {
  name: "lee",
  sisters: ["uk", "ik"],
};

const p33: Person3 = {
  name: "Woo",
};

hello3(p31);
hello3(p32);
hello3(p33);
