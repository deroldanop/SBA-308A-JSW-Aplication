const API_KEY = 'live_W0zhLhG0byrE7RLNALDvIkld7bik7jD6Vjqdz24NNbiOlIIdtNegx8aznmDyESZD'; 
const API_URL = 'https://api.thecatapi.com/v1';


export async function searchCatsByBreed(breed) {
    const response = await fetch(`${API_URL}/breeds/search?q=${breed}`, {
        headers: {
            'x-api-key': API_KEY
        }
    });

    const breedData = await response.json();

    if (breedData.length === 0) {
        window.currentBreed = 'No breed found';
        return [];  // No results found for the given breed
    }

    const breedId = breedData[0].id;
    window.currentBreed = breedData[0].name;

    const imagesResponse = await fetch(`${API_URL}/images/search?breed_ids=${breedId}&limit=10`, {
        headers: {
            'x-api-key': API_KEY
        }
    });

    const imagesData = await imagesResponse.json();
    return imagesData;
}

export async function fetchRandomCats() {
    const response = await fetch(`${API_URL}/images/search?limit=10`, {
        headers: {
            'x-api-key': API_KEY
        }
    });
    const data = await response.json();
    return data;
}