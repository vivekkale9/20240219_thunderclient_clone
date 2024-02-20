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

document.addEventListener('DOMContentLoaded', function () {
    const searchParam = encodeURIComponent('samsung');

    // Construct the URL with the search parameter
    const apiUrl = "http://localhost:3600/api/search?productName=vivek kale";

    // Fetch API call to your Express server endpoint with the search parameter
    fetch(apiUrl, { method: 'GET' })  
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
});

// the function to display content after the anchor is clicked
function showContent(content) {
    // Replace this with your logic to load different 
    //content based on the clicked anchor
    document.querySelector('.anchor-content').innerHTML =
     `<p style="color: white;
     font-size: 22px;
     margin-top: 8px;
     margin-bottom: 11px;">Query parameters</p>
     <label>
         <input type="checkbox">
     </label>
     <input type="text" placeholder="">
     <label>
         <input type="checkbox">
     </label>
     <input type="text" placeholder="">`;
}