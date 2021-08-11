// function hello1(person: { name: string; age: number }): void {
//   console.log(`안녕하세요! ${person.name} 입니다.`);
// }

// const p1: { name: string; age: number } = {
//   name: "hinyc",
//   age: 31,
// };

// hello1(p1);

interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`p1 안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "hinyc",
  age: 31,
};

hello1(p1);
