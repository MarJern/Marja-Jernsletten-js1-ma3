// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getItems () {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.all;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">
        ${facts[i].text}
        </div>`;
    }

}

getItems ();

// As far I can see, I cannot get this to work properly, because of some error with my api url. the rest of the code builds on the "const url" and so nothing gets executed. I think my coding up to this is more or less correct, but I cannot see the html for the page, and I am unsure as to how I can display name, rating and amount of tags when I have nothing to "select" as I cant find the code.