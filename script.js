const scene = document.querySelector(".scene");
const openButton = document.getElementById("openLetter");
const openPrompt = document.getElementById("openPrompt");
const closeButton = document.getElementById("closeLetter");
const letter = document.getElementById("letter");
const intro = document.getElementById("intro");

function openLetter() {
  scene.classList.add("is-open");
  letter.setAttribute("aria-hidden", "false");
  openButton.setAttribute("aria-label", "Letter opened");
  intro.textContent = "A few words I wanted you to hear.";
  window.setTimeout(() => {
    if (scene.classList.contains("is-open")) {
      closeButton.focus({ preventScroll: true });
    }
  }, 800);
}

function closeLetter() {
  scene.classList.remove("is-open");
  letter.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-label", "Open the letter");
  intro.textContent = "Some things are easier to say when they're written down.";
  openButton.focus({ preventScroll: true });
}

openButton.addEventListener("click", openLetter);
openPrompt.addEventListener("click", () => {
  if (scene.classList.contains("is-open")) closeLetter();
  else openLetter();
});
closeButton.addEventListener("click", closeLetter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && scene.classList.contains("is-open")) closeLetter();
});
