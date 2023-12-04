function searchMeals() {
    const userInput = document.getElementById('searchInput').value;


    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    const resultContainer = document.getElementById('result-container');

    resultContainer.innerHTML = '';

 
    if (data.meals === null) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;}

    for (let i = 0; i < 5; i++) {
        const meal = data.meals[i];

     
        const mealCard = document.createElement('div');
        mealCard.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 200px; height: 150px;">
            <p>${meal.strInstructions}</p>
        `;

        resultContainer.appendChild(mealCard);
    }
}