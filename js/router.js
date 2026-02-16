import routes from "../utils/routes.json" with { type: "json" };

function loadCSS(href) {
  // Remove previous css stylesheet if needed
  const existing = document.querySelector("link[data-stylesheet]");
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.stylesheet = "true";
  document.head.appendChild(link);
}

async function loadPage(path) {
  const file = routes.pages[path] || routes.pages["/"];
  const cssFile = routes.css[path] || routes.css["/"];
  const res = await fetch(file);
  const html = await res.text();
  loadCSS(cssFile);
  document.getElementById("app").innerHTML = html;
}

function navigate(path) {
  history.pushState({}, "", path);
  loadPage(path);
}

// Intercept link clicks
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  navigate(link.getAttribute("href"));
});

// Handle back/forward buttons
window.addEventListener("popstate", () => {
  loadPage(location.pathname);
});

// Initial load
loadPage(location.pathname);
