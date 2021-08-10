// function hello1(person: { name: string; age: number }): void {
//   console.log(`안녕하세요! ${person.name} 입니다.`);
// }

// const p1: { name: string; age: number } = {
//   name: "hinyc",
//   age: 31,
// };

// hello1(p1);


interface person1 { 
  name: string; 
  age: number
 }

function hello1(person: person1 ): void{
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: person1 = {
  name: "hinyc",
  age: 31,
};

hello1(p1);