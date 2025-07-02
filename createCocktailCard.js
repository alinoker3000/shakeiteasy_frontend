import {fetchCocktailByName} from "fetch.js";

const tagColorsMap = {
    sweet: 'pink',
    sour: 'green',
    fruity: 'yellow'
};

async function createCocktailCard(name) {
    const cocktail = await fetchCocktailByName(name);

    const tags = [];
    for (const tag of cocktail.tags) {
        const color = tagColorsMap[tag.name.toLowerCase()]
        tags.push({ name: tag.name, color });
    }

    const ingredients = [];
    for (const item of cocktail.ingredients) {
        const name = item.ingredient.name;
        const amount = item.amount;
        ingredients.push(`${name} — ${amount}`);
    }

    const card = document.createElement('article');
    card.className = 'cocktail-card';

    const imageSrc = cocktail.image;
    const strength = cocktail.Strength;
    const volume = cocktail.Volume

    card.innerHTML = `
        <img src="${imageSrc}" alt="${cocktail.name}" />
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
