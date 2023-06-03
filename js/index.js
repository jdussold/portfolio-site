// Typing effect
window.addEventListener("DOMContentLoaded", () => {
  const typingDelay = 100;
  const cursorDelay = 1200;
  const textElement = document.querySelector(".typing-text");
  const cursorElement = document.querySelector(".cursor");
  const textToType = "John Dussold";
  let charIndex = 0;

  function typeNextCharacter() {
    if (charIndex < textToType.length) {
      textElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextCharacter, typingDelay);
    } else {
      setTimeout(() => {
        cursorElement.style.display = "none";
      }, cursorDelay);
    }
  }

  setTimeout(() => {
    typeNextCharacter();
  }, 1000); // 1-second delay before starting the typing effect

  // Code for dynamic text change
  const codeBlock = document.querySelector(".code-block");
  const comment1 = codeBlock.children[0];
  const comment2 = document.createElement("span");
  comment2.className = "comment";
  comment2.textContent =
    "// don't forget to play the game and see it on my Github";
  const githubLink = codeBlock.querySelector("a");

  function updateCodeBlockText() {
    if (window.innerWidth <= 999) {
      comment1.textContent = "// find my profile on Github:";
      if (codeBlock.contains(comment2)) {
        codeBlock.removeChild(comment2);
      }
      githubLink.href = "https://github.com/jdussold";
      githubLink.textContent = "https://github.com/jdussold";
    } else {
      comment1.textContent = "// welcome to my portfolio";
      if (!codeBlock.contains(comment2)) {
        codeBlock.insertBefore(comment2, codeBlock.children[1]);
      }
      githubLink.href = "https://github.com/jdussold/space-invaders";
      githubLink.textContent = "https://github.com/jdussold/space-invaders";
    }
  }

  // Call the function initially to set correct text
  updateCodeBlockText();

  // Call the function whenever the window is resized
  window.addEventListener("resize", updateCodeBlockText);

  // Toggle responsive navbar
  const toggleButton = document.getElementsByClassName(`toggle-button`)[0];
  const navbarLinks = document.getElementsByClassName(`navbar-links`)[0];

  toggleButton.addEventListener("click", () => {
    console.log("Toggle button clicked");
    navbarLinks.classList.toggle("active");
  });
});
