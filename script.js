function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const projectCategory = card.getAttribute('data-category');
    if (category === 'all' || category === projectCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
