const URL = 'http://localhost:8080/cocktails';

export async function fetchCocktailByName(name) {
    const response = await fetch(`http://localhost:8080/cocktails?name=${encodeURIComponent(name)}`);
    if (!response.ok) {
        throw new Error('Cocktail not found');
    }
    return await response.json();
}

export async function fetchCocktailByTag(tag) {
    const response = await fetch(`http://localhost:8080/cocktails?tag=${encodeURIComponent(tag)}`);
    if (!response.ok) {
        throw new Error('Cocktails by tag not found');
    }
    return await response.json();
}
