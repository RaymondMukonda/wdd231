import { getData } from "./storage.js";

const runBtn = document.querySelector("#runCode");
const input = document.querySelector("#codeInput");
const output = document.querySelector("#output");
const savedLessonsDropdown = document.querySelector("#savedLessons");
const lessonSnippetDiv = document.querySelector("#lessonSnippet");

// Starter code snippets for lessons, ill extend them in the near futer
const lessonSnippets = {
  "HTML Basics": "<h1>Hello World!</h1>",
  "Tags": "<p>This is a paragraph tag.</p>",
  "Forms": "<form><input type='text' placeholder='Your name'></form>",
  "CSS Intro": "<style>h1 { color: blue; }</style><h1>Styled Heading</h1>",
  "Selectors": "<style>.highlight { color: red; }</style><p class='highlight'>Selected text</p>",
  "JS Basics": "<script>console.log('Hello JS!');</script>",
  "Variables": "<script>let name = 'Raymond'; console.log(name);</script>",
  "Functions": "<script>function greet(){ alert('Hello!'); } greet();</script>"
};

// Populate dropdown with saved lessons
function loadSavedLessons() {
  const saved = getData("saved") || [];
  savedLessonsDropdown.innerHTML = "<option value=''>-- Select a lesson --</option>";
  saved.forEach(title => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    savedLessonsDropdown.appendChild(option);
  });
}

// When user selects a lesson, show snippet under "Try Coding"
savedLessonsDropdown.addEventListener("change", () => {
  const selected = savedLessonsDropdown.value;
  if (selected && lessonSnippets[selected]) {
    lessonSnippetDiv.innerHTML = `
      <h3>${selected} Example</h3>
      <pre><code>${lessonSnippets[selected].replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      <p>Copy this into the editor below or type it out  and run it!</p>
    `;
  } else {
    lessonSnippetDiv.innerHTML = "";
  }
});

// Run code button
runBtn.addEventListener("click", () => {
  output.srcdoc = input.value;
  localStorage.setItem("code", input.value);
});

// Restore last code on page load
window.onload = () => {
  // input.value = localStorage.getItem("code") || "";
  loadSavedLessons();
};

// Modal logic for my pop up dont forget to style 
const modal = document.querySelector("#modal");
document.querySelector("#openModal").onclick = () => modal.showModal();
document.querySelector("#closeModal").onclick = () => modal.close();
