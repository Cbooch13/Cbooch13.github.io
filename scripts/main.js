const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bitmoji.png") {
    myImage.setAttribute("src", "images/animated_profile_pic.jpg");
  } else {
    myImage.setAttribute("src", "images/bitmoji.png");

  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Thanks for checking out my resume, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };