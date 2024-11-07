document.querySelectorAll('.overlay-container').forEach(container => {
  container.addEventListener('mouseover', () => {
    container.querySelector('.overlay').style.opacity = 1;
  });
  container.addEventListener('mouseout', () => {
    container.querySelector('.overlay').style.opacity = 0;
  });
}); 