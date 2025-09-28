const fabContainer = document.querySelector('.social-fab-container');
const fabToggle = document.querySelector('.social-fab-toggle');

fabToggle.addEventListener('click', () => {
    fabContainer.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".categories button");
  const sections = document.querySelectorAll(".food-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Quitar 'active' de todos los botones
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      sections.forEach(section => {
        if (filter === "all" || section.dataset.category === filter) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
