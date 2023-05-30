// ----------Toggle the form----------------------

// Get references to the form and thank you section
const form = document.getElementById("contact-form");
const thankYouSection = document.getElementById("thank-you-section");

// Hide the thank you section initially
thankYouSection.style.display = "none";

// Handle form submission
form.addEventListener("submit", function (event) {
  // Hide the form
  form.style.display = "none";

  // Show the thank you section
  thankYouSection.style.display = "flex";
  thankYouSection.style.flexDirection = "column";
  thankYouSection.style.justifyContent = "center";
  thankYouSection.style.alignItems = "center";
  thankYouSection.style.marginTop = "40%";

  // Adjust the spacing between heading and paragraph
  const heading = thankYouSection.querySelector("h2");
  const paragraph = thankYouSection.querySelector("p");
  heading.style.marginBottom = "10px";
  heading.style.color = "#FFFFFF";
  paragraph.style.color = "#607b96";
  paragraph.style.marginTop = "0";
});

// ---------Message form code preview--------------

// Get the form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Get the code example element
const codeExample = document.querySelector(".cp-message-code-example");

function generateLineNumbers() {
  const codeLines = document
    .querySelector(".cp-message-code-example code")
    .innerText.split("\n");

  let lineNumbers = "";
  for (let i = 1; i <= codeLines.length - 2; i++) {
    lineNumbers += `${i}\n`;
  }

  const lineNumberElement = document.createElement("pre");
  lineNumberElement.className = "line-numbers";
  lineNumberElement.innerText = lineNumbers;

  document.querySelector(".cp-message-code-example").prepend(lineNumberElement);
}

// Function to update the code example
function updateCodeExample() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const code = `
<pre><code>
<span style="color: #C98BDF;">const</span> <span style="color: #4453b9;">button</span> <span style="color: #C98BDF;">=</span> <span style="color: #4453b9;">document</span>.<span style="color: #4453b9;">querySelector</span>(<span style="color: #FEA55F;">'#sendBtn'</span>);
    
<span style="color: #C98BDF;">const</span> <span style="color: #4453b9;">message</span> <span style="color: #C98BDF;">=</span> {
  <span style="color: #4453b9;">name</span>: <span style="color: #FEA55F;">"${nameInput.value}"</span>,
  <span style="color: #4453b9;">email</span>: <span style="color: #FEA55F;">"${emailInput.value}"</span>,
  <span style="color: #4453b9;">message</span>: <span style="color: #FEA55F;">"${messageInput.value}"</span>,
  <span style="color: #607b96;">date</span>: <span style="color: #FEA55F;">"${formattedDate}"</span>,
};
    
<span style="color: #4453b9;">button.addEventListener</span>(<span style="color: #FEA55F;">'click'</span>, <span style="color: #C98BDF;">()</span> <span style="color: #C98BDF;">=></span> {
  <span style="color: #4453b9;">form</span>.<span style="color: #4453b9;">send</span>(<span style="color: #4453b9;">message</span>);
});
</code></pre>
  `;

  const lineNumberElement = document.querySelector(
    ".cp-message-code-example .line-numbers"
  );
  if (lineNumberElement) lineNumberElement.remove(); // Remove previous line numbers

  codeExample.innerHTML = code;

  generateLineNumbers();
}

// Event listeners for input fields
nameInput.addEventListener("input", updateCodeExample);
emailInput.addEventListener("input", updateCodeExample);
messageInput.addEventListener("input", updateCodeExample);

// Initial update of the code example
updateCodeExample();
