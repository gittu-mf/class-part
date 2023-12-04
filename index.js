function searchMeals() {
    // Get the user input
    const userInput = document.getElementById('searchInput').value;

    // API URL for meal lookup
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    const resultContainer = document.getElementById('result-container');

    // Clear previous results
    resultContainer.innerHTML = '';

    // Check if there are any results
    if (data.meals === null) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Display the first 5 results
    for (let i = 0; i < 5; i++) {
        const meal = data.meals[i];

        // Create a card for each meal
        const mealCard = document.createElement('div');
        mealCard.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 200px; height: 150px;">
            <p>${meal.strInstructions}</p>
        `;

        resultContainer.appendChild(mealCard);
    }
}
