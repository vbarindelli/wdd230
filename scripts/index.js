const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;



const lastModified = document.querySelector("#lastModified");
let modified = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modified}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const myName = document.querySelector(".name");
const profilePic = document.querySelector(".profilePic")
const button = document.querySelector("#menu");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	myName.classList.toggle('dark-mode');
	profilePic.classList.toggle('dark-mode');
	button.classList.toggle('dark-mode');
});