import {fetchCocktailByName} from "./fetch.js";

const tagColorsMap = {
    Sweet: 'sweet',
    Classic: 'classic',
    Citrus: 'citrus',
    Strong: 'strong',
    Fruity: 'yellow',
    Refreshing: 'fresh',
    Bitter: 'sour',
    Creamy: 'creamy',
    Spicy: 'spicy',
    Sour: 'green'
};

export async function createCocktailCard(name) {
    const cocktail = await fetchCocktailByName(name);

    console.log('cocktail:', cocktail);

    const tags = [];
    for (const tag of cocktail.tags) {
        const color = tagColorsMap[tag.name]
        tags.push({ name: tag.name.toLowerCase(), color });
    }

    const ingredients = [];
    for (const item of cocktail.ingredients) {
        const name = item.ingredientName;
        const amount = item.amount;
        ingredients.push(`${name} — ${amount}`);
    }

    const card = document.createElement('article');
    card.className = 'cocktail-card';

    const imageSrc = cocktail.image;
    const strength = cocktail.strength;

    card.innerHTML = `
        <img src="${imageSrc}" alt="${cocktail.name}" class="cocktail-image"/>
        <div class="cocktail-card-info">
            <div class="cocktail-card-header">
                <p class="cocktail-name">${cocktail.name}</p>
                <p class="cocktail-strength">${strength}%</p>
            </div>
            <div class="tags"></div>
            <ul class="ingredient-list"></ul>
            <p class="recipe">${cocktail.recipe}</p>
        </div>
    `;

    const tagsContainer = card.querySelector('.tags');
    for (const tag of tags) {
        const tagElement = document.createElement('div');
        tagElement.className = `tag ${tag.color}`;
        tagElement.textContent = tag.name;
        tagsContainer.append(tagElement);
    }

    const ingredientsList = card.querySelector('.ingredient-list');
    for (const ingredientElement of ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredientElement;
        ingredientsList.append(li);
    }

    return card;
}
