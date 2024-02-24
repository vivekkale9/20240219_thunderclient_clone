document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-row a");
    var searchButton = document.querySelector("button#search-button");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Remove 'selected' class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove("selected");
            });

            // Add 'selected' class to the clicked link
            link.classList.add("selected");
        });
    });
});

// Flag to check if it's the initial pair
let initialPairAdded = false; // Flag to track if the initial pair is added

// Function to add a new checkbox pair
function addCheckboxPair() {
    const checkboxContainer = document.querySelector('.checkbox-container');

    const newCheckboxPair = document.createElement('div');
    newCheckboxPair.innerHTML = `
        <div class="checkbox" style="border: 1px solid #636363;
         height: 16px; border-radius: 18%; width: 14px; display: flex;
         align-items: center; justify-content: center; margin-top: 10px;">
         <input type="checkbox" style="position: absolute; border: none; opacity: 0.1">
        </div>
        <input type="text" placeholder="parameter" style="margin-left: 13px;
         background-color: transparent; border-bottom: 1px solid #636363;
         border-right: 0; width: 331px; color: white;">
        <input type="text" placeholder="value" style="margin-left: 13px;
         background-color: transparent; border-bottom: 1px solid #636363;
         border-right: 0; width: 331px; color: white;">
    `;

    checkboxContainer.appendChild(newCheckboxPair);

    // After the initial pair is added, change flex-direction to column
    if (!initialPairAdded) {
        checkboxContainer.style.flexDirection = 'column';
        initialPairAdded = true;
    }
}

// Function to display content after the anchor is clicked
function showContent(content) {
    // Replace content based on the clicked anchor
    document.querySelector('.anchor-content').innerHTML =
        `<p style="color: white; font-size: 22px; margin-top: 8px;
         margin-bottom: 11px; margin-left: 20px;">Query parameters</p>
        <div class="checkbox-container" style="display:flex;
         flex-direction: row; margin-left: 20px;">
        <div class="initial-container" style="display:flex; flex-direction: row">
            <div class="checkbox" style="border: 1px solid #636363;
             height: 16px; border-radius: 18%; width: 14px; display: flex;
             align-items: center; justify-content: center; margin-top: 10px;">
                <input type="checkbox" style="position: absolute; border: none; opacity: 0.1">
            </div>
            <input type="text" placeholder="parameter" style="margin-left: 13px;
             background-color: transparent; border-bottom: 1px solid #636363;
             border-right: 0; width: 331px; color: white;">
            <input type="text" placeholder="value" style="margin-left: 13px;
             background-color: transparent; border-bottom: 1px solid #636363;
             border-right: 0; width: 331px; color: white;">
        </div>
        </div>
        <button onclick="addCheckboxPair()">Add</button>`;
}

// Function to send an api request to get the requested information
function sendRequest() {
    const dropdown = document.getElementById('dropdown');
    const selectedMethod = dropdown.options[dropdown.selectedIndex].value;

    const searchInput = document.getElementById('search');
    const searchParam = encodeURIComponent(searchInput.value);

    const apiUrl = `http://localhost:3600/search?productName=${searchParam}&method=${selectedMethod}`;

    fetch(apiUrl, { method: selectedMethod })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data from the API
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error.message);
        });
}
