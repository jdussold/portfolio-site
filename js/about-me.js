document.addEventListener("DOMContentLoaded", () => {
  let initialState = null;
  const totalLines = 120;

  // Generate line numbers
  const lineNumbers = document.querySelector(".line-numbers");
  for (let i = 1; i <= totalLines; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    lineNumbers.appendChild(span);
  }

  // Handle folder-item click event
  const folderItems = document.getElementsByClassName("folder-item");
  Array.from(folderItems).forEach((item) => {
    item.addEventListener("click", () => {
      const folderId = item.getAttribute("id");
      updateContent(folderId);
      selectFolderItem(folderId);
      if (
        folderId === "skills" ||
        folderId === "education" ||
        folderId === "resume"
      ) {
        generateLineNumbers();
      }
    });
  });

  // Handle icon click events
  const personalInfoIcon = document.querySelector(".personal-info-icon");
  personalInfoIcon.addEventListener("click", () => {
    if (initialState !== null) {
      updateContent(initialState.folderId);
      selectFolderItem(initialState.folderId);
    } else {
      const folderId = "bio";
      updateContent(folderId);
      selectFolderItem(folderId);
    }
  });

  const skillsIcon = document.querySelector(".skills-icon");
  skillsIcon.addEventListener("click", () => {
    const folderId = "skills";
    updateContent(folderId);
    selectFolderItem(folderId);
    generateLineNumbers();
  });

  const educationIcon = document.querySelector(".education-icon");
  educationIcon.addEventListener("click", () => {
    const folderId = "education";
    updateContent(folderId);
    selectFolderItem(folderId);
    generateLineNumbers();
  });

  const briefcaseIcon = document.querySelector(".briefcase-icon");
  briefcaseIcon.addEventListener("click", () => {
    const folderId = "resume";
    updateContent(folderId);
    selectFolderItem(folderId);
    generateLineNumbers();
  });

  // Simulate a mouse click on the personal-info-icon after a delay
  setTimeout(() => {
    personalInfoIcon.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
  }, 500);

  const updateContent = (folderId) => {
    const infoTabText = document.getElementById("info-tab-text");
    const infoSection = document.querySelector(".info-section");
    const examplesSection = document.querySelector(".examples-section");

    if (initialState === null) {
      initialState = {
        folderId,
        infoTabText: infoTabText.textContent,
        infoSectionContent: infoSection.innerHTML,
        examplesSectionContent: examplesSection.innerHTML,
      };
    }

    switch (folderId) {
      case "bio":
        infoTabText.textContent = initialState.infoTabText;
        infoSection.innerHTML = initialState.infoSectionContent;
        examplesSection.innerHTML = initialState.examplesSectionContent;
        attachBioEventListeners(
          "gist1-description",
          "gist1-description-icon",
          "gist1-details-text",
          "gist1-close-button"
        );
        attachBioEventListeners(
          "gist2-description",
          "gist2-description-icon",
          "gist2-details-text",
          "gist2-close-button"
        );
        break;
      case "skills":
        infoTabText.textContent = "skills";
        infoSection.innerHTML = getSkillsContent();
        examplesSection.innerHTML = getSkillsExamplesContent();
        createCarousel();
        break;
      case "education":
        infoTabText.textContent = "education";
        infoSection.innerHTML = getEducationContent();
        examplesSection.innerHTML = getEducationExamplesContent();
        createCarousel();
        break;
      case "resume":
        infoTabText.textContent = "resume";
        infoSection.innerHTML = getResumeContent();
        examplesSection.innerHTML = getResumeExamplesContent();
        break;
      default:
        break;
    }
  };

  const createCarousel = () => {
    const imgs = document.querySelectorAll(".education-examples-content img");
    imgs.forEach((img, i) => {
      img.style.animation = `carousel 15s ${i * 5}s infinite`;
    });
  };

  const selectFolderItem = (folderId) => {
    const folderItems = document.getElementsByClassName("folder-item");
    const folderItem = document.getElementById(folderId);
    if (folderItem) {
      Array.from(folderItems).forEach((item) => {
        item.classList.remove("active");
      });
      folderItem.classList.add("active");

      const personalInfoIcon = document.querySelector(".personal-info-icon");
      const skillsIcon = document.querySelector(".skills-icon");
      const educationIcon = document.querySelector(".education-icon");
      const briefcaseIcon = document.querySelector(".briefcase-icon");

      personalInfoIcon.src = "./img/personal-info.svg";
      skillsIcon.src = "./img/skills-icon.svg";
      educationIcon.src = "./img/education-icon.svg";
      briefcaseIcon.src = "./img/briefcase-icon.svg";

      switch (folderId) {
        case "bio":
          personalInfoIcon.src = "./img/personal-info-white.svg";
          break;
        case "skills":
          skillsIcon.src = "./img/skills-icon-white.svg";
          break;
        case "education":
          educationIcon.src = "./img/education-icon-white.svg";
          break;
        case "resume":
          briefcaseIcon.src = "./img/briefcase-icon-white.svg";
          break;
        default:
          break;
      }

      // Function to rotate chevron next to folder icons
      const collapsedFolderIcons = document.querySelectorAll(
        ".collapsed-folder-icon"
      );
      collapsedFolderIcons.forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
        icon.style.filter = "brightness(100%)";
        icon.style.transition = "transform 0.3s, filter 0.3s";
      });

      const activeCollapsedFolderIcon = folderItem.querySelector(
        ".collapsed-folder-icon"
      );
      if (activeCollapsedFolderIcon) {
        activeCollapsedFolderIcon.style.transform = "rotate(90deg)";
        activeCollapsedFolderIcon.style.filter = "brightness(300%)";
      }
    }
  };

  const generateLineNumbers = () => {
    const lineNumbers = document.querySelector(".line-numbers");
    lineNumbers.innerHTML = "";

    for (let i = 1; i <= totalLines; i++) {
      const span = document.createElement("span");
      span.textContent = i;
      lineNumbers.appendChild(span);
    }
  };

  const getSkillsContent = () => {
    return `
      <div class="top-section">
        <div class="info-tab">
          <span class="info-tab-text">skills</span>
          <img src="./img/close-button.svg" class="close-button" alt="close button">
        </div>
        <div class="info-tab-spacer"></div>
      </div>
      <div class="content-skills">
        <div class="line-numbers"></div>
        <div class="code-content">
          <p>/*</p>
          <p>Skills</p>
          <br>
          <p>
           Versatility defines my skill set, encompassing a diverse range of disciplines. I am constantly driven to expand my knowledge and expertise, fueling my personal and professional growth. With a passion for learning and a thirst for new challenges, I embrace the ever-evolving landscape of skills.</p>
          <p>*/</p>
        </div>
      </div>
    `;
  };

  const skillLevels = [
    { level: 0, label: "Exp:", isTitle: true },
    { level: 25, label: "Novice" },
    { level: 50, label: "Intermediate" },
    { level: 75, label: "Proficient" },
    { level: 100, label: "Specialist" },
  ];

  const skillSets = [
    {
      title: "Development",
      skills: [
        { name: "HTML5", level: 80 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "ReactJS", level: 60 },
        { name: "AngularJS", level: 40 },
        { name: "jQuery", level: 60 },
        { name: "NodeJS", level: 55 },
        { name: "REST API", level: 55 },
      ],
    },
    {
      title: "Productivity",
      skills: [
        { name: "Github", level: 60 },
        { name: "Microsoft Office", level: 90 },
      ],
    },
    {
      title: "Visual Arts and Animation",
      skills: [
        { name: "LightWave 3D", level: 95 },
        { name: "Photoshop", level: 80 },
        { name: "Procreate", level: 90 },
        { name: "Illustrator", level: 35 },
        { name: "Maya", level: 70 },
        { name: "Modo", level: 80 },
      ],
    },
  ];

  const getSkillsExamplesContent = () => {
    let skillLines = skillLevels
      .map(
        ({ level, label, isTitle }) => `
        <li class="skill-line skill-line--${level}">
          <span class="skill-line-label${isTitle ? " title" : ""}">
            ${label}
          </span>
        </li>`
      )
      .join("");

    let skillCharts = skillSets
      .map(
        ({ title, skills }) => `
        <div class="chart">
          <span class="chart-title">${title}</span>
          <ul class="chart-horizontal">
            ${skills
              .map(
                ({ name, level }) => `
              <li class="chart-bar" style="width: ${level}%;">
                <span class="chart-label">${name}</span>
              </li>`
              )
              .join("")}
          </ul>
        </div>`
      )
      .join("");

    return `
      <div class="examples-top-section"></div>
      <div class="skills-examples-content">
        <p>// Technical Skills:</p>
        <div class="skills-background">
          <div class="skills-container">
            <ul class="skill-lines">${skillLines}</ul>
            <div class="charts">${skillCharts}</div>
          </div>
        </div>
      </div>
    `;
  };

  const getEducationContent = () => {
    return `
      <div class="top-section">
        <div class="info-tab">
          <span class="info-tab-text">education</span>
          <img src="./img/close-button.svg" class="close-button" alt="close button">
        </div>
        <div class="info-tab-spacer"></div>
      </div>
      <div class="content-education">
        <div class="line-numbers"></div>
        <div class="code-content">
          <p>/*</p>
          <p>Education</p>
          <br>
          <p>
           During my college years, I pursued a major in 3-D computer animation and successfully earned a Bachelor's of Fine Arts degree from Missouri State University in 2003. After graduating, I was eager to enhance my animation expertise and had the opportunity to join the inaugural class of Animation Mentor. Now, I am actively focused on expanding my skill set in web development through Career Foundry's Full Stack Web Development Course.</p>
          <p>*/</p>          
        </div>
      </div>
    `;
  };

  const getEducationExamplesContent = () => {
    return `
      <div class="examples-top-section"></div>
      <div class="education-examples-content">
        <img src="./img/missouri-state-logo.svg" class="missouri-state-logo" alt="missouri state logo" />
        <img src="./img/animation-mentor-logo.svg" class="animation-mentor-logo" alt="animation mentor logo" />
        <img src="./img/career-foundry-logo.svg" class="career-foundry-logo" alt="career foundry logo" />
      </div>
    `;
  };

  const getResumeContent = () => {
    return `
      <div class="top-section">
        <div class="info-tab">
          <span class="info-tab-text">resume</span>
          <img src="./img/close-button.svg" class="close-button" alt="close button">
        </div>
        <div class="info-tab-spacer"></div>
      </div>
      <div class="content-resume">
        <div class="line-numbers"></div>
        <div class="code-content">
          <p>/*</p>
          <p>Resume</p>
          <br>
          <p>
          Curious about my adaptability and passion for conquering new challenges? I invite you to explore my resume, where you'll find a wealth of experience beyond web development and a showcase of my diverse skill set. From earning a Bachelor's of Fine Arts degree in 3-D computer animation to thriving in the realm of project management within eDiscovery.</p>
          <p>*/</p>
          <div class="resume-download">
          <a href="./docs/john-dussold-resume.pdf" id="resumeLink" class="resume-button" target="_blank" rel="noopener">download-resume</a>
          </div>       
        </div>
      </div>
    `;
  };

  const getResumeExamplesContent = () => {
    return `
      <div class="examples-top-section"></div>
      <div class="resume-examples-content">
      <img src="./img/animated-web-dev.svg" class="animated-web-dev" alt="animated web dev image" />  
      </div>
    `;
  };

  // Function to reattach event listeners to gist buttons when content is reloaded
  const attachBioEventListeners = (
    descriptionElementId,
    descriptionIconId,
    detailsTextId,
    closeButtonElementId
  ) => {
    const descriptionElement = document.getElementById(descriptionElementId);
    const descriptionIcon = document.getElementById(descriptionIconId);
    const detailsText = document.getElementById(detailsTextId);
    const closeButtonElement = document.getElementById(closeButtonElementId);

    const toggleDescription = () => {
      const isDescriptionVisible = descriptionElement.classList.contains(
        "description-visible"
      );
      descriptionElement.classList.toggle("description-visible");
      descriptionIcon.src = isDescriptionVisible
        ? "./img/description-icon.svg"
        : "./img/description-icon-white.svg";
      detailsText.textContent = isDescriptionVisible ? "details" : "hide";
      detailsText.style.color = isDescriptionVisible ? "" : "white";
      closeButtonElement.style.display = isDescriptionVisible
        ? "none"
        : "block";
      const descriptionSection = descriptionElement.parentElement;
      descriptionSection.style.borderTop = isDescriptionVisible
        ? ""
        : "2px solid #1e2d3d";
    };

    descriptionIcon.addEventListener("click", toggleDescription);
    detailsText.addEventListener("click", toggleDescription);
    closeButtonElement.addEventListener("click", toggleDescription);
  };

  // Fetch Gist details using fetch API
  const gistIdentifiers = [
    "870dca52f4b871f9ccdf4f6a54aa2668",
    "414edff2659a9375f09e14fbacfea9d9",
  ];

  gistIdentifiers.forEach((gistIdentifier, index) => {
    fetch(`https://api.github.com/gists/${gistIdentifier}`)
      .then((response) => response.json())
      .then((data) => {
        const files = data.files;
        let gistContent = "";

        for (const filename in files) {
          if (files.hasOwnProperty(filename)) {
            const fileContent = files[filename].content;
            gistContent += fileContent;
          }
        }

        const owner = data.owner;
        const username = owner.login;
        const avatarUrl = owner.avatar_url;
        const createdAt = new Date(data.created_at);
        const description = data.description;

        const createdDate = createdAt.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });

        const preElement = document.createElement("pre");
        preElement.innerHTML = syntaxHighlight(gistContent);
        preElement.style.backgroundColor = "#001221";
        preElement.style.color = "#607B96";
        preElement.style.whiteSpace = "pre-wrap";

        const detailsElement = document.getElementById(
          `gist${index + 1}-details`
        );
        detailsElement.innerHTML = `
          <div class="left-section">
            <div class="avatar-section">
              <img src="${avatarUrl}" alt="Avatar" class="avatar">
              <div class="username-section">
                <span class="username">@${username}</span>
                <p class="created-at">Created on ${createdDate}</p>
              </div>
            </div>
          </div>
          <div class="right-section">
            <div class="details-section">
              <div class="info-icons">
                <img id="gist${
                  index + 1
                }-description-icon" class="description-icon" src="./img/description-icon.svg" alt="Description Icon">
                <span id="gist${
                  index + 1
                }-details-text" class="details-text">details</span>
              </div>
            </div>
          </div>
        `;

        const contentElement = document.getElementById(
          `gist${index + 1}-content`
        );
        contentElement.appendChild(preElement);

        const descriptionElement = document.getElementById(
          `gist${index + 1}-description`
        );
        descriptionElement.textContent = description;

        const closeButtonElement = document.createElement("img");
        closeButtonElement.src = "./img/close-button.svg";
        closeButtonElement.id = `gist${index + 1}-close-button`;
        closeButtonElement.classList.add("description-close-button");
        descriptionElement.appendChild(closeButtonElement);

        if (index + 1 === 1) {
          attachBioEventListeners(
            "gist1-description",
            "gist1-description-icon",
            "gist1-details-text",
            "gist1-close-button"
          );
          attachBioEventListeners(
            "gist2-description",
            "gist2-description-icon",
            "gist2-details-text",
            "gist2-close-button"
          );
        }
      });
  });

  // Function to add specific syntax highlighting to displayed gists
  const syntaxHighlight = (code) => {
    const tokens = [
      { regex: /\b(scrollLeft|scrollRight)\b/g, style: "color: #C98BDF;" },
      { regex: /\b(void)\b/g, style: "color: #FEA55F;" },
      { regex: /\b(const)\b/g, style: "color: #FEA55F;" },
      { regex: /\b(genres|movieLists)\b/g, style: "color: #4D5BCE;" },
      { regex: /\b(indexOf|toArray)\b/g, style: "color: #C98BDF;" },
      { regex: /'smooth'/g, style: "color: #43D9AD;" },
      {
        regex: /"https:\/\/my-flix-db-jd.herokuapp.com\/movies"/g,
        style: "color: #43D9AD;",
      },
      { regex: /\b(fetch)\b/g, style: "color: #C98BDF;" },
      { regex: /\b(getMovies|return)\b/g, style: "color: #C98BDF;" },
      { regex: /`=`/g, style: "color: #43D9AD;" },
      { regex: /`=>`/g, style: "color: #43D9AD;" },
      { regex: /\b(headers)\b/g, style: "color: #4D5BCE;" },
      { regex: /\b(Authorization)\b/g, style: "color: #4D5BCE;" },
      { regex: /\b(json|then|map|sort)\b/g, style: "color: #C98BDF;" },
      { regex: /id: movie._id,/g, style: "color: #4D5BCE;" },
      {
        regex:
          /\b(title|Title|image|ImagePath|description|movie.Description|genre|movie.Genre.Name|director|movie.Director.Name|isFavorite|false)\b/g,
        style: "color: #4D5BCE;",
      },
      { regex: /\b(setMovies|setLoading)\b/g, style: "color: #C98BDF;" },
      { regex: /\b(catch|alert)\b/g, style: "color: #C98BDF;" },
      { regex: /\+/g, style: "color: #4D5BCE;" },
      { regex: /"An error occurred: " \+/g, style: "color: #4D5BCE;" },
    ];

    tokens.forEach((token) => {
      code = code.replace(
        token.regex,
        `<span style="${token.style}">$&</span>`
      );
    });

    return code;
  };

  // Toggle responsive navbar
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar-links");
  const container = document.querySelector(".container");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    container.classList.toggle("blur-effect");
  });
});
