/*
const admin = "John";
const name = admin;
alert(admin);
*/

let admin, name; // let은 한번에 2개 변수 설정이 가능하다.
// console.log(admin, name);
name = "John";
admin = name;
// console.log(name, admin);

alert(admin);

const planet = "Earth";
const ourPlanetName = "Earth";

let currentUserName = "John"; // 나타내고자 하는 값의 의미를 담아서 변수 이름을 설정해주기.

// 생일은 const를 이용해서 대문자 상수가 가능하지만, 나이는 계속 변하기 때문에 let을 이용해줘야 하고, 대문자 상수가 불가하다.

let userName = "Ilya";

alert(`Hello, ${1}`); // 중괄호 안에 있는 것이 나온다.
alert(`Hello, ${"userName"}`); // 중괄호 안에 있는 것이 나온다.
alert(`Hello, ${userName}`); // 변수 안에 있는 것이 나온다.

let askUserName = prompt("당신의 이름이 무엇입니까?", "");
alert(`당신의 이름은 ${askUserName} 입니다.`); // prompt를 사용한 변수 자체를 받아와야 한다.
