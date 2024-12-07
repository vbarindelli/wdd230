const baseURL = "https://vbarindelli.github.io/wdd230/";
const linksURL = "https://vbarindelli.github.io/wdd230/data/links.json";
const weeksId = document.querySelector('#weekDesc');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks(linksURL);

const displayLinks = (weeks) => {

    weeks.forEach((week) => {
      
        let weekLine = document.createElement('li');
        weekLine.innerText = `${week.week}: `;

        week.links.forEach((link) => {
            let actLink = document.createElement('a'); 

            actLink.setAttribute('href', link.url);
            actLink.innerText = `${link.title} | `;
            weekLine.appendChild(actLink);
        });




        weeksId.appendChild(weekLine);
    }); 
}

