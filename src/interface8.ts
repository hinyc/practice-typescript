interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
  //readonly 읽기전용으로 수정이 불가능하도록 설정.
}

const p81: Person8 = {
  name: "Hinyc",
  gender: "male",
  //gender 속성은 읽기전용으로 수정이 불가함.
};

// p81.gender = "female";
//gender의 값을 변경하려하면 error 발생.
