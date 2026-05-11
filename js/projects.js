const checkboxes = Array.from(document.querySelectorAll(".checkbox"));
const projectGroups = Array.from(document.querySelectorAll(".project-group")).map(
  (group) => ({
    group,
    projects: Array.from(group.querySelectorAll(".project")).map((project) => ({
      project,
      technologies: project.getAttribute("data-technologies").split(" "),
    })),
  })
);
const checkboxItems = checkboxes.map((checkbox) => ({
  checkbox,
  listItem: checkbox.closest("li"),
}));

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProjects);
});

function updateProjects() {
  const selectedTechnologies = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  projectGroups.forEach(({ group, projects }) => {
    let visibleCount = 0;
    projects.forEach(({ project, technologies }) => {
      const matches =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.every((tech) => technologies.includes(tech));
      project.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount++;
    });
    group.classList.toggle("is-hidden", visibleCount === 0);
  });

  checkboxItems.forEach(({ checkbox, listItem }) => {
    listItem.classList.toggle("selected", checkbox.checked);
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
