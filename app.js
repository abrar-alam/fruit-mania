const searchInput = document.querySelector("#searchInput");
const suggestionList = document.querySelector("#suggestionList");
const searchButton = document.querySelector("#search-button");
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Event handling for live user typing
searchInput.addEventListener("input", onType);

function onType (e){
    // console.log(e.target.value);
    // Update the dropdown with real time prediction
    // search(e.target.value);
    console.log(search(e.target.value));
    const predictionArray = search(e.target.value);

    
    showSuggestions(predictionArray);
    
    
    


}

function search(str) {
	// let results = [];
    str = str.toLowerCase();
	return fruit.filter((fruitName) => fruitName.toLowerCase().includes(str))

	// return results;
}

function showSuggestions(results) {
    
    const suggestionsArray = [];

    // This is to prevent accumulation of suggestion from previous inputs
    suggestionList.innerHTML = '';

    results.forEach((suggestion) => suggestionsArray.push(createLi(suggestion)));
	
    suggestionList.append(...suggestionsArray);

}



// Event handling for user clicking on one of suggestion in the dropdown
suggestionList.addEventListener("click", handleClickSuggestion);


function handleClickSuggestion(e){
    // Populate the search box with the chosen suggestion

    // disappear the suggestion
}


// Event handling for user cliking on the search button
searchButton.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    // display the appropriate page related to the result, while keep the search box displayed on top
}

