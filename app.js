function showSuggestions(inputValue) {
    const input = inputValue.toLowerCase();
    const suggestionBox = document.getElementById('suggestion-box');
    const suggestionList = document.getElementById('suggestions-list');
    suggestionList.innerHTML = '';

    if(input) {
       const filteredDestination = destinations.filter(destination => 
        destination.name.toLowerCase().startsWith(input));
    if(filteredDestination.length > 0) {
        suggestionBox.style.display = 'block'; 
    filteredDestination.forEach(destination => {
        const li = document.createElement('li');
        li.classList.add('suggession-item');

        //creating structure for each destination
        li.innerHTML = `<div class="destination-info">
             <img src="${destination.image}" alt="${destination.name}" class="destination-image"></img>
             <p>${destination.description}</p>
             <h3>${destination.name}</h3>
             <button class="visit-button">Visit</button>
        </div>`
        suggestionList.appendChild(li);
    })
} else {
    // No matching destinations found, hide the suggestion box
    suggestionBox.style.display = 'none';
}

    } else {
        suggestionBox.style.display = 'none'; // Hide the suggestion box if input is empty
    }
}

// Function to handle click on search button
document.querySelector('.search-button').addEventListener('click', function () {
    const input = document.getElementById('search-input').value;
    showSuggestions(input); // Call the showSuggestions function with the input
});

document.querySelector('.clear-button').addEventListener('click', function () {
    
    document.getElementById('search-input').value = '';
    document.getElementById('suggestion-box').style.display = 'none';
});