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
});
