/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/*
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
*/

const html = document.querySelector("html");
// console.log(html);

/*
function handleClick() {
  alert("Ouch! Stop poking me!");
}

html.addEventListener("click", handleClick);
*/

/*
html.onclick = function handleClick() {
  alert("Ouch! Stop poking me!");
};
*/

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src"); // 요소의 속성 값을 가져오는 방식이다.
  if (mySrc === "images/eye.webp") {
    myImage.setAttribute("src", "images/nature.jpg");
  } else {
    myImage.setAttribute("src", "images/eye.webp");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*
function setUserName() {
  let myName = prompt("Please enter yourname.", "");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
} // 이것만 사용하면 새로고침 시 제거된다.

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
*/
