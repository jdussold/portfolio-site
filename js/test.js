// Get the form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Get the code example element
const codeExample = document.querySelector(".cp-message-code-example");

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
<span style="color: #C98BDF;">const</span> button = document.querySelector(<span style="color: #FEA55F;">'#sendBtn'</span>);
    
<span style="color: #C98BDF;">const</span> message = {
  name: <span style="color: #FEA55F;">"${nameInput.value}"</span>,
  email: <span style="color: #FEA55F;">"${emailInput.value}"</span>,
  message: <span style="color: #FEA55F;">"${messageInput.value}"</span>,
  <span style="color: #607b96;">date</span>: <span style="color: #FEA55F;">"${formattedDate}"</span>,
};
    
button.addEventListener(<span style="color: #C98BDF;">'click'</span>, <span style="color: #C98BDF;">()</span> => {
  form.send(message);
});
</code></pre>
  `;
  codeExample.innerHTML = code;
}

// Event listeners for input fields
nameInput.addEventListener("input", updateCodeExample);
emailInput.addEventListener("input", updateCodeExample);
messageInput.addEventListener("input", updateCodeExample);

// Initial update of the code example
updateCodeExample();
