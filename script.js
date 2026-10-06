const root = document.documentElement;
const year = document.querySelector("#year");
const toggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (prefersDark) {
  root.dataset.theme = "dark";
}

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});
