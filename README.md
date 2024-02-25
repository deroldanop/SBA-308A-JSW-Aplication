# Dog Gallery Web Application

This web application allows users to explore images of various cat breeds. Users can search for specific cat breeds, view random cat images, and load more random cat images. The application utilizes an external API, the Cat API, to fetch cat data and images.

## Features
- **Search Feature:** Users can search for specific cat breeds using the search input. The application will display images of the searched breed if found, otherwise, it will display random cat images.
- **Paginated Gallery:** The gallery displays cat images in a paginated format. Users can load more random cat images by clicking the "Show More Random Cats" button.
- **API Integration:** The application communicates with the Cat API using the fetch API to retrieve data and images of cat breeds. It supports GET requests for fetching data and images and uses POST requests for searching cat breeds.
- **Modular JavaScript:** The JavaScript code is organized into multiple modules:
  - `async.js`: Contains functions for interacting with the Cat API asynchronously, including searching for cat breeds and fetching random cat images.
  - `disp.js`: Defines a function for displaying cat images in the gallery.
  - `main.js`: Implements the main functionality of the application, including event listeners for user interactions.

## Usage
1. Open the `index.html` file in a web browser.
2. Enter a cat breed name in the search input to display images of that specific breed.
3. Click the "Show More Random Cats" button to load additional random cat images.
4. Explore the gallery to view the displayed cat images.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## External API
The application uses the Cat API (https://thecatapi.com/) to fetch cat data and images. The API provides endpoints for searching cat breeds and retrieving random cat images.


This web application was created by Roldan Ordaz.

