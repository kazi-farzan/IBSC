document.addEventListener('DOMContentLoaded', function() {
  const stepButtons = document.querySelectorAll('.step-title');

  stepButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.classList.toggle('visible');

      // Close other step contents
      document.querySelectorAll('.step-content').forEach(function(element) {
        if (element !== content) {
          element.classList.remove('visible');
        }
      });

      // Apply animation delay to each list item
      const listItems = content.querySelectorAll('li');
      let delay = 0;
      listItems.forEach(function(item) {
        setTimeout(function() {
          item.style.animationDelay = `${delay}s`;
        }, 50); // Adjust the delay between each item as needed
        delay += 0.1; // Adjust the delay increment as needed
      });
    });
  });

  // Hamburger menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.hamburger-sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('hidden');
  });

  sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.add('hidden');
  });
});
