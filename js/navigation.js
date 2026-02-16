import routes from "../utils/routes.json" with { type: "json" };

async function loadPage(path) {
  const file = routes[path] || routes["/"];
  const res = await fetch(file);
  const html = await res.text();
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
