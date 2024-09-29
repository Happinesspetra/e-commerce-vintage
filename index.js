// Get the back to top button
const backToTopButton = document.querySelector('.back-to-top');

// Add an event listener to the button
backToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});