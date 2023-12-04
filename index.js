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
        return;
    }