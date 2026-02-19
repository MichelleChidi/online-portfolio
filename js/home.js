function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.stylesheet = "true";
  document.head.appendChild(link);
}

function loadJS(src) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = src;
  script.dataset.js = "true";
  document.body.appendChild(script);
}

const header = await fetch("../partials/header.html");
const headerHtml = await header.text();

loadCSS("../styles/css/partials/header.css");
loadJS("../js/partials/header.js");

document.getElementById("main-header").innerHTML = headerHtml;
