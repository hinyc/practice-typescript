// // type alias 타입의 별칭을 지정

// // ### function

// // type alias
// type EatType = (food: string) => void;
// // interface
// interface = IEat {
//   // (food: string): void => ;
// }

// // ### array

// // type alias
// type PersonList = string[];
// // interface
// interface IPersonList {
//   [index: number]: string;
// }

// // ### intersection

// interface ErrorHandling {
//   success: boolean;
//   error?: { message: string };
// }

// interface ArtistsData {
//   artist: { name: string }[];

// // type alias
// // type ArtistsResponseType = ArtistsData & ErrorHandiling;
// // interface
// // interface IArtistsResponse extends ArtistsData, ErrorHandling {}

// // let art: ArtistsResponseType;
// // let iar: IArtistsResponse;

// // ### union type

// // interface Bird {
//   fly(): void;
//   layEggs(): void;
// }

// interface Fish {
//   swim(): void;
//   layEggs: void;
// }

// // type alias
// // type PetType = Bird | Fish;

// // interface
// // interface IPet extends PetType {}
// //인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.ts(2312)

// class Pet implements PetType{}
// //클래스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 구현할 수 있습니다.ts(2422)

// // ### Declaration Merging - interface

// interface MergingInterface {
//   a: string;
// }

// interface MergingInterface {
//   b: string;
// }

// let mi: MergingInterface;
// mi.
// //아래의 그림처럼 동일한 이름의 interface를 사용하더라도 사용시 하나로 합처지며 선택할 수 있다.
// // type alias의 경우 동일이름의 type생성이 불가능함.

// // type alisa = type을 부르는 명칭
// // interface = 새로운 type을 만들어냄
