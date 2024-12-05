const year = document.querySelector("#currentyear");
const today = new Date();
const msToDays = 86400000;
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;



const lastModified = document.querySelector("#lastModified");
let modified = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modified}</span>`;

const mainnav = document.querySelector('.navigation');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburger.classList.toggle('show');
})

let welcomeMsg = "Welcome! Let us know if you have any questions.";
lastVisitObj = window.localStorage.getItem("lastVisitDate");


//TEST validations:
//lastVisitObj = null;
//lastVisitObj = new Date(Date.UTC(1, 1, 1));
if (lastVisitObj) {
    let lastVisitDate = new Date(Number(lastVisitObj));
    let todayDate = Date.now();
    let daysDiff = (todayDate - lastVisitDate) / msToDays;
    if (daysDiff < 1) {
        welcomeMsg = "Back so soon! Awesome!";
    }
    else {
        welcomeMsg = `You last visited ${daysDiff.toFixed(0)} days ago.`;
    }
}

const welcomeMsgElement = document.querySelector("#lastVisit");
welcomeMsgElement.innerHTML = welcomeMsg;


localStorage.setItem("lastVisitDate", Date.now());

let timestamp = document.querySelector("#timestamp");
timestamp.value = new Date();

