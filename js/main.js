import { displayCats } from './disp.js';

document.addEventListener('DOMContentLoaded', async () => {
    let cats = await fetchRandomCats();
    displayCats(cats, 'Random cats');

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', async (event) => {
        const query = event.target.value.trim();
        const breedName = query.length > 0 ? query : 'Random cats';

        const searchResults = query.length > 0 ? await searchCatsByBreed(query) : cats;
        displayCats(searchResults, breedName);
    });

    const showMoreButton = document.getElementById('showMoreButton');
    showMoreButton.addEventListener('click', async () => {
        const moreCats = await fetchRandomCats();
        displayCats(moreCats, 'Random cats');
    });
});