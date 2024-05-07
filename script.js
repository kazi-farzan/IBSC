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
    });
  });
});
