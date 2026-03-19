fetch("../src/partials/menu.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("menu").innerHTML = html;
  })
  .catch((err) => {
    console.error("Failed to load menu:", err);
  });
