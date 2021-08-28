//darkmode button
const body = document.body;
const button = document.getElementsByTagName("button")[0];
const buttonColorMode = document.querySelector("button#colorMode");

buttonColorMode.addEventListener("click", function() {
  body.classList.toggle("white");
  body.classList.toggle("dark");
  button.classList.toggle("white");
  button.classList.toggle("dark");
});
