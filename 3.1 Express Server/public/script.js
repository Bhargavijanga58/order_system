
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the search input element
    const searchInput = document.querySelector('.search');
    // Select the container for displaying suggestions
    const suggestionsContainer = document.getElementById('suggestions');
    // Array of suggestions to be displayed
    const suggestions = ['subway', 'McDonald`s', 'Pista house', 'Thai', 'Dunkin`', 'Chyu`s'];
   
    // Add an event listener to the search input to handle input changes
    searchInput.addEventListener('input', function() 
    {
         // Convert the input value to lowercase for case-insensitive matching
         const searchValue = this.value.toLowerCase();
         // Clear the suggestions container
         suggestionsContainer.innerHTML = '';
         let hasMatch = false; // Flag to check if any suggestions match
   
         // Check if the search input has a value
         if (searchValue.length > 0) {
             // Iterate over each suggestion
             suggestions.forEach(function(suggestion) {
                 // Check if the suggestion includes the search value
                 if (suggestion.toLowerCase().includes(searchValue)) {
                    // Create a new div element for the suggestion
                    const div = document.createElement('div');
                    div.textContent = suggestion;
                    // Add a click event listener to the suggestion div
                    div.addEventListener('click', function() {
                       // Set the search input value to the clicked suggestion
                       searchInput.value = this.textContent;
                       // Navigate to the order page
                       window.location.href = 'order.html';
                       // Hide the suggestions container
                       suggestionsContainer.style.display = 'none';
                   });
                    // Append the suggestion div to the suggestions container
                    suggestionsContainer.appendChild(div);
                    hasMatch = true; // Set flag to true if a match is found
                 }
             });
   
            
             // Show the suggestions container if there's at least one match
             if (hasMatch) {
                 suggestionsContainer.style.display = 'block';
             } else {
                 // Hide the suggestions container if no matches are found
                 suggestionsContainer.style.display = 'block';
                 suggestionsContainer.innerHTML = "Not yet updated";
                 suggestionsContainer.style.padding = "10px";
             }
         }
         else {
           // Hide the suggestions container if no matches are found
           suggestionsContainer.style.display = 'None';
         }
    });
   
  // Add a keydown event listener to the search input to handle the Enter key press
  searchInput.addEventListener('keydown', function(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter' || event.keyCode === 13) {
        // Check if the input value exactly matches one of the suggestions
        const exactMatch = suggestions.find(s => s.toLowerCase() === this.value.toLowerCase());
        if (exactMatch) {
            // Navigate to order.html
            window.location.href = 'order.html';
        }
    }
  });
    // Close the suggestions list when clicking outside
    document.addEventListener('click', function(event) {
         if (!searchInput.contains(event.target)) {
             suggestionsContainer.style.display = 'none';
         }
    });
   });
   
   
   // Function to handle card click
   function handleCardClick() {
    window.location.href = "order.html";
   }
   
   // Select all card elements and add a click event listener to each
   const cardItems = document.querySelectorAll('.card');
   if (cardItems) {
    cardItems.forEach(function(cardItem) {
        cardItem.addEventListener('click', handleCardClick);
    });
   }
   
   // Select all toggle buttons and add a click event listener to each
   const toggleBtns = document.querySelectorAll('.toggle-btn');
   const deliveryBtn = document.getElementById('deliveryBtn');
   deliveryBtn.classList.add('active');
   toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
       toggleBtns.forEach(btn => btn.classList.remove('active'));
       btn.classList.toggle('active');
    });
   });
   
   // Add an input event listener to the search input to change the background image based on input
   document.querySelector('.search.root').addEventListener('input', function() {
       const inputValue = this.value.trim(); // Trim to remove leading/trailing whitespace
       
       if (inputValue) {
         this.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>')`;
       } else {
         this.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>')`;
       }
   });
   
   // Initialize the offcanvas component
   var offcanvasElement = document.getElementById('offcanvas');
   var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
   
   // Add event listener to the toggler button to toggle the offcanvas
   var togglerButton = document.querySelector('[data-bs-toggle="offcanvas"]');
   togglerButton.addEventListener('click', function () {
       offcanvas.toggle();
   });
   
   // Initialize the carousel with specific options
   var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators2'), {
    interval: 10000, // Set the interval for the carousel to change slides (in milliseconds)
    wrap: true // Set to true if you want the carousel to loop back to the first slide after reaching the last slide
   });
   