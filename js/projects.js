// Get all the checkboxes
const checkboxes = document.querySelectorAll(".checkbox");

// Get all the project elements
const projects = document.querySelectorAll(".project");

// Add event listeners to the checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProjects);
});

// Function to update the displayed projects
function updateProjects() {
  const selectedTechnologies = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  const filteredProjects = Array.from(projects).filter((project) => {
    const technologies = project.getAttribute("data-technologies").split(" ");
    return (
      selectedTechnologies.length === 0 ||
      selectedTechnologies.every((tech) => technologies.includes(tech))
    );
  });

  // Clear the existing projects
  const projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = "";

  // Add the filtered projects back to the container
  filteredProjects.forEach((project) => {
    projectsContainer.appendChild(project);
  });
}
