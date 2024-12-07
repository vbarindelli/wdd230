const baseURL = "https://vbarindelli.github.io/wdd230/";
const linksURL = "https://vbarindelli.github.io/wdd230/data/links.json";
const weeks = document.querySelector(".weekDesc");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let week = document.createElement('li');

        week.links.forEach(link => {
            let actLink = document.createElement('a'); // fill in the blank
            actLink.setAttribute('src', link.url);
            actLink.textContent = `${link.title}`;;
            week.appendChild(actLink);
        });

        // Build the image portrait by setting all the relevant attributes
        week.setAttribute('src', week.links);

        weeks.appendChild(week);
    }); // end of arrow function and forEach loop
}
