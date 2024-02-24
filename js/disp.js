export function displayCats(cats, breedName) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    // Display breed name or "Random cats" above the filter input
    const statusText = document.getElementById('status-text');
    statusText.textContent = `Showing: ${window.currentBreed || 'Random cats'}`;

    cats.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;

        gallery.appendChild(img);
    });
}