import routes from "../utils/routes.json" with { type: "json" };

function loadCSS(href) {
  const existing = document.querySelector("link[data-stylesheet]");
  if (existing) {
    existing.remove();
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.stylesheet = "true";
  document.head.appendChild(link);
}

function loadJS(src) {
  const existing = document.querySelector("script[data-js]");
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.type = "module";
  script.src = src;
  script.dataset.js = "true";
  document.body.appendChild(script);
}

async function loadPage(path) {
  const htmlFile = routes.pages[path] || routes.pages["/"];
  const cssFile = routes.css[path] || routes.css["/"];
  const jsFile = routes.js[path] || routes.js["/"];
  const res = await fetch(htmlFile);
  const html = await res.text();
  if (cssFile) {
    loadCSS(cssFile);
  }

  if (jsFile) {
    loadJS(jsFile);
  }

  document.getElementById("app").innerHTML = html;
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
