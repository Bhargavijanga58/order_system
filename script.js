document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search');
  const suggestionsContainer = document.getElementById('suggestions');
  const suggestions = ['subway', 'McDonald`s', 'Pista house', 'Thai', 'Dunkin`', 'Chyu`s'];

  searchInput.addEventListener('input', function() {
      const searchValue = this.value.toLowerCase();
      suggestionsContainer.innerHTML = '';
      let hasMatch = false; // Flag to check if any suggestions match

      if (searchValue.length > 0) {
          suggestions.forEach(function(suggestion) {
              if (suggestion.toLowerCase().includes(searchValue)) {
                  const div = document.createElement('div');
                  div.textContent = suggestion;
                  div.addEventListener('click', function() {
                    searchInput.value = this.textContent; // Set the search input value to the clicked suggestion
                    window.location.href = 'order.html';
                    suggestionsContainer.style.display = 'none'; // Hide the suggestions container
                });
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
              suggestionsContainer.innerHTML = "Not yet updated"
              suggestionsContainer.style.padding = "10px"
              
          }
      }
      else {
        // Hide the suggestions container if no matches are found
        suggestionsContainer.style.display = 'None';
      }


  });



  // Close the suggestions list when clicking outside
  document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target)) {
          suggestionsContainer.style.display = 'none';
      }
  });
});
function handleCardClick() {
  window.location.href = "order.html";
 }
 
 const cardItems = document.querySelectorAll('.card');
 if (cardItems) {
  cardItems.forEach(function(cardItem) {
     cardItem.addEventListener('click', handleCardClick);
  });
 }
 

const toggleBtns = document.querySelectorAll('.toggle-btn');
const deliveryBtn = document.getElementById('deliveryBtn');
deliveryBtn.classList.add('active');
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.toggle('active');
  });
});

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

// Add event listener to the toggler button
var togglerButton = document.querySelector('[data-bs-toggle="offcanvas"]');
togglerButton.addEventListener('click', function () {
    offcanvas.toggle();
});

var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators2'), {
  interval: 10000, // Set the interval for the carousel to change slides (in milliseconds)
  wrap: true // Set to true if you want the carousel to loop back to the first slide after reaching the last slide
});

