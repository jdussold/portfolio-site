const checkboxes = document.querySelectorAll(".checkbox");
const projects = document.querySelectorAll(".project");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProjects);
});

function updateProjects() {
  const selectedTechnologies = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  projects.forEach((project) => {
    const technologies = project.getAttribute("data-technologies").split(" ");
    const matches =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.every((tech) => technologies.includes(tech));
    project.classList.toggle("is-hidden", !matches);
  });

  document.querySelectorAll(".project-group").forEach((group) => {
    const allHidden = Array.from(group.querySelectorAll(".project")).every(
      (p) => p.classList.contains("is-hidden")
    );
    group.classList.toggle("is-hidden", allHidden);
  });

  checkboxes.forEach((checkbox) => {
    checkbox.closest("li").classList.toggle("selected", checkbox.checked);
  });
}

// Mobile menu toggle
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const container = document.querySelector(".projects-page-container");

toggleButton.addEventListener("click", () => {
  const expanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", String(!expanded));
  navbarLinks.classList.toggle("active");
  container.classList.toggle("blur-effect");
});
