const year = document.querySelector("#currentyear");
const today = new Date();
const msToDays = 86400000;
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const url = 'https://vbarindelli.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');



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
if (welcomeMsgElement) {
    welcomeMsgElement.innerHTML = welcomeMsg;
}


localStorage.setItem("lastVisitDate", Date.now());

// let tmps = document.querySelector("#timeS");
// tmps.value = today;

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getMemberData(url);

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        // let name = document.createElement('h2');
        let memberImg = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let memberUrl = document.createElement('a');

        memberImg.setAttribute('src', member.image);
        memberImg.setAttribute('alt', `corporate image of ${member.name}`);
        memberImg.setAttribute('loading', 'lazy');
        memberImg.setAttribute('width', '340');
        memberImg.setAttribute('height', '440');

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        memberUrl.setAttribute('href', member.url);
        memberUrl.innerText = `${member.url}`;

        card.appendChild(memberImg);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(memberUrl);

        cards.appendChild(card);


    })
}

