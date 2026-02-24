const routes = {
  "/": () => import("./pages/home.js"),
  "/portfolio": () => import("./pages/portfolio.js"),
  "/design-system": () => import("./pages/case-studies/design-system.js"),
};

const app = document.getElementById("app");

async function loadPage(path) {
  const loader = routes[path] || routes["/"];

  const module = await loader();

  app.innerHTML = module.render();

  if (module.init) {
    module.init();
  }
}

function navigate(path) {
  history.pushState({}, "", path);
  loadPage(path);
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  navigate(link.getAttribute("href"));
});

window.addEventListener("popstate", () => {
  loadPage(location.pathname);
});

loadPage(location.pathname);
