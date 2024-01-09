const searchInput = document.querySelector("#searchInput");
const suggestionList = document.querySelector("#suggestionList");
const searchButton = document.querySelector("#search-button");
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Event handling for live user typing
searchInput.addEventListener("keyup", onType);

function onType (e){
    // Update the dropdown with real time prediction
    const predictionArray = search(e.target.value);
    showSuggestions(predictionArray, e.target.value);
}

function search(str) {
	
    // to ensure we are comparing the typed lower-case str with lowe-case fruitnames. This is to ensure case insensitivity.
    str = str.toLowerCase();
	return fruit.filter((fruitName) => fruitName.toLowerCase().includes(str));
}

function showSuggestions(results, input) {
    
    const suggestionsArray = [];

    // This is to prevent accumulation of suggestion from previous inputs
    suggestionList.innerHTML = '';

    // To prevent generating suggestions for empty string
    if (input !== ''){
        results.forEach((suggestion) => suggestionsArray.push(createLi(suggestion)));
        suggestionList.append(...suggestionsArray);
    }
}


// Event handling for user clicking on one of suggestion in the dropdown
suggestionList.addEventListener("click", useSuggestion);


function useSuggestion(e){

    // Populate the search box with the chosen suggestion
    if (e.target.tagName === "LI"){
        searchInput.value = e.target.innerText;
    }
    // clear the suggestion list
    suggestionList.innerHTML = '';
}


// Event handling for user cliking on the search button
searchButton.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    // display the appropriate page related to the result, while keep the search box displayed on top
}

