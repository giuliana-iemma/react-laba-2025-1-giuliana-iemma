let toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function () {
  // Change the body to dark-mode
  document.body.classList.toggle('dark-mode');

  // Find the container

  const container = document.getElementById('container');
  container.classList.toggle('dark-mode');

  // Theme icon
  const hiddenIcon = document.querySelector('#theme-toggle .theme-toggle__image--hidden');
  const shownIcon = document.querySelector('#theme-toggle .theme-toggle__image');

  if (shownIcon && hiddenIcon) {
    // Check if the icons exist.
    // If they do, reset the className and toggle it to the initial classes
    /* shownIcon.className = 'theme-toggle__image';  
    hiddenIcon.className = 'theme-toggle__image--hidden';   */

    // Alternate the classes to show or hide the icon
    hiddenIcon.classList.toggle('theme-toggle__image--hidden');
    shownIcon.classList.toggle('theme-toggle__image--hidden');
  }
});
