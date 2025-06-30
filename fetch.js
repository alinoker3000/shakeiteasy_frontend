const URL = 'http://localhost:8080/api/cocktails';

export async function fetchCocktailByName(name) {
    const url = `${URL}?name=${encodeURIComponent(name)}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Ошибка загрузки коктейля');
    return response.json();
}

export async function fetchCocktailsByTag(tag) {
    const url = `${URL}?tag=${encodeURIComponent(tag)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при загрузке по тегу');
    return response.json();
}