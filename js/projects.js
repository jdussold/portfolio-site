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

  projects.forEach((project) => {
    const technologies = project.getAttribute("data-technologies").split(" ");
    const projectGroup = project.closest(".project-group");

    if (
      selectedTechnologies.length === 0 ||
      selectedTechnologies.every((tech) => technologies.includes(tech))
    ) {
      project.style.display = "block";
      projectGroup.style.display = "block";
    } else {
      project.style.display = "none";
      projectGroup.style.display = Array.from(
        projectGroup.querySelectorAll(".project")
      ).every((p) => p.style.display === "none")
        ? "none"
        : "block";
    }
  });

  // Update the color and brightness of the list item
  checkboxes.forEach((checkbox) => {
    const listItem = checkbox.closest("li");
    if (checkbox.checked) {
      listItem.style.color = "#FFFFFF";
      listItem.style.filter = "brightness(150%)";
    } else {
      listItem.style.color = "";
      listItem.style.filter = "";
    }
  });
}
