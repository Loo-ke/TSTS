/*
왜 타입스크립트를 배워야 하나??
- 자바스크립트에 타입을 추가하고 자바스크립트가 실행되고 브라우저 런타임에서 에러가 발생하기 전에 코드의 에러를 개발자가 미리 식별할 수 있다.
즉, 런타임 에러로 인해 발생하는 에러를 초기 개발 과정에서 발견, 수정 가능
*/
// let number = 5;
// // let number:number = 5;
// // let number:number ='5';
// // 실행을 하기 전 오류를 명시적으로 알 수 있다.
// console.log(typeof number);
// console.log(number);
/*
단점 !!
- 타입 스크립트는 브라우저와 같은 자바스크립트 환경에서 실행 불가.
자바스크립트를 실행할 수 있는 환경에는 타입스크립트가 지원되지 않는다. node 파일명.확장자 -> 이거 실행 안됨
node.js, 브라우저에서 실행 불가.
실행하려면 = ts-node 파일명.확장자
내가 작성한 코드가 자바스크립트로 어떻게 구현 되는지 보려면 = tsc 파일명.확장자
*/
//JS
// function add(n1, n2) {
//   return n1 + n2;
// }
// function add(n1, n2) {
//   //이런 식으로 추가해도 되지만 개발 도중에 이런 오류를 포착하기 위해 타입 스크립트를 사용하는 것을 권장~!
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   }
// }
// //불필요한 조건문을 생략할 수 있다~!
// console.log(add(1, 2)); //3 -> type : number
// console.log(add(1, "2")); //12 -> type : string
//TS
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// console.log(add(1, 2)); //3 -> type : number
// console.log(add(1, "2")); //12 -> type : string
//객체------------------
// const person = {
//   name: "luke",
//   age: 19,
// };
// const person: { name: string; age: number } = {
//   name: "luke",
//   age: 19,
// };
// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };
// 배열---------------------
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(favoriteActivities);
/*
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Luke",
  age: 19,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
*/
//tuple-----------------------
//배열이랑 비슷함!!!!! 길이와 타입이 지정된 배열을 튜플이라고 함!!
//일반 자바스크립트~
// const person = {
//   name: "Luke",
//   age: 19,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], //이제 role 배열에서 첫번째 요소는 항상 숫자형, 두번쨰는 문자형이 와야한다고 가정해보자!
//   //srting | numbe의 타입을 가질 수 있는 배열 (union타입)
// };
// person.role.push("admin");
// person.role[1] = 10;//자바스크립트는 이를 허용
//타입
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Luke",
//   age: 19,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// person.role.push("admin");
// // person.role[1] = 10;
// // person.role = [0, "admin", "zzz"]; //error
//enum--------------------
// 열거형 변수로 정수를 하나로 합칠 때 편리한 기능!!
// 임의의 숫자, 문자열을 할당할 수 있음
// 키값으로 숫자형이 올 수 없다!
//JS
// const admin = 0;
// const readOnly = 1;
// const guest = 2;
// const person = {
//   name: "Luke",
//   age: 19,
//   hobbies: ["Sports", "Cooking"],
//   role: guest,
// };
// // if (person.role === "READ-ONLY") {// 다른 문자열이기 때문에 출력 안됨~!~!
// //   console.log("read only~!~!~!");
// // }
// if (person.role === admin) {
//   console.log("you are admin");
// }
// switch (person.role) {
//   case admin:
//     console.log("admin");
//     break;
//   case readOnly:
//     console.log("read");
//     break;
//   case guest:
//     console.log("guest");
//     break;
// }
//TS
// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = "READ",
//   AUTHOR = "AUTHOR",
// }
// const person = {
//   name: "Luke",
//   age: 19,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN,
// };
// const enum vs enum
//enum은 자바스크립트로 변환할 때 복잡하게 된다!!
/*
TS
export enum MOBILE_OS {
  IOS,
  ANDROID
}

// 문자열을 할당한 경우
export enum MOBILE_OS {
  IOS = 'iOS',
  ANDROID = 'Android'
}
*/
/*
JS
export var MOBILE_OS;
(function (MOBILE_OS) {
    MOBILE_OS[MOBILE_OS["IOS"] = 0] = "IOS";
    MOBILE_OS[MOBILE_OS["ANDROID"] = 1] = "ANDROID";
})(MOBILE_OS || (MOBILE_OS = {}));

// 문자열을 할당한 경우
export var MOBILE_OS;
(function (MOBILE_OS) {
    MOBILE_OS["IOS"] = "iOS";
    MOBILE_OS["ANDROID"] = "Android";
})(MOBILE_OS || (MOBILE_OS = {}));
 */
// TS
// const enum MOBILE_OS {
//   IOS = "iOS",
//   ANDROID = "Android",
// }
// const ios = MOBILE_OS.IOS;
/*
JS
const ios = "iOS" ;
*/
//Key-Value간의 양방향 Mapping이 필요 없는 상황에서, Object의 Key로 접근하여 Value만을 가져와서 그 값을 Type으로 정해주고 싶을 때 주로 사용된다. 그냥 Value 값을 받아오는게 아니라, 그 Value 값을 Type으로 정해주기 위해서 const enum과 같은 문법이 필요한 것.
// any -----------
var arr = ["text", 1, true];
console.log(arr);
