function observeAnimations() {
  // Get all animated sections
  const animatedSections = document.querySelectorAll('.animated-section');

  // Create an Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  });

  // Observe each animated section
  animatedSections.forEach(section => {
    observer.observe(section);
  });
}

// Call observeAnimations when the page loads
window.addEventListener('load', observeAnimations);

// Call observeAnimations when clicking on sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', observeAnimations);
});

// Call observeAnimations when scrolling in the main content area
const mainContent = document.querySelector('.main');
mainContent.addEventListener('scroll', observeAnimations);
