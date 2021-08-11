interface IPerson2 {
  name: string;
  age?: number;
}

// IPerson2로 상속받은 IKorean 은 IPerson2의 name, age가 기본포함됨.
interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "홍인열",
  city: "화성시",
};

console.log(k.name);
// => 홍인열
console.log(k.city);
// => 화성시
