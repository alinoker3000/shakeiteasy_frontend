import { createCocktailCard } from './createCocktailCard.js';

const cocktailName1 = 'Mojito'
const cocktailName2 = 'Margarita'

document.getElementById('title1').textContent = cocktailName1;
document.getElementById('title2').textContent = cocktailName2;

async function createCocktailCards() {
    const card1 = await createCocktailCard(cocktailName1);
    document.getElementById('cocktail1').appendChild(card1);

    const card2 = await createCocktailCard(cocktailName2);
    document.getElementById('cocktail2').appendChild(card2);
}

await createCocktailCards();
