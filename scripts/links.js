const baseURL = "https://vbarindelli.github.io/wdd230/";
const linksURL = "https://vbarindelli.github.io/wdd230/data/links.json";
const weeksId = document.querySelector('#weekDesc');
const line = document.querySelector('#weekLine');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks(linksURL);

const displayLinks = (weeks) => {

    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let weekLine = document.createElement('li');
        weekLine.setAttribute('id', 'weekLine');


        week.links.forEach((link) => {
            let actLink = document.createElement('a'); // fill in the blank

            actLink.setAttribute('href', link.url);
            actLink.innerText = `${link.title}`;
            line.appendChild(actLink);
        });


        weekLine.setAttribute('src', week.links);
        weekLine.textContent = `${week.week}: `;

        weeksId.appendChild(weekLine);
    }); // end of arrow function and forEach loop
}

