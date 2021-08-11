interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`안녕하세요! ${name} 입니다.`);
};
// '함수이름: interface' 형태로 interface를 사용할 수있으며, 함수에 사용되는 속성들은 할당된 interface의 속성과 동일해야함.

const helloPerson1: HelloPerson = function (name: string, age?: number) {
  console.log(`안녕하세요! ${age}살 ${name}입니다.`);
};

// const helloPerson2: HelloPerson = function (name: string, age: number) {
//   console.log(`안녕하세요! ${age}살 ${name} 입니다.`);
// };
// => 이경우 interface HelloPerson에 정의된 age의 타입과 다르기때문에 error 발생.
