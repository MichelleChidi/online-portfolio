fetch("../partials/mobile-menu.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("mobile-menu").innerHTML = html;
  })
  .catch((err) => {
    console.error("Failed to load menu:", err);
  });

document.addEventListener("click", (e) => {
  const link = e.target.closest("button[data-nav-button]");
  if (!link) return;

  e.preventDefault();
  const mobileMenu = document.getElementById("mobile-nav-menu");
  console.log({ link });

  if (mobileMenu.dataset.expanded === "true") {
    mobileMenu.dataset.expanded = "false";
    link.ariaLabel = "Expand menu";
  } else {
    mobileMenu.dataset.expanded = "true";
    link.ariaLabel = "Collapse menu";
  }
});
