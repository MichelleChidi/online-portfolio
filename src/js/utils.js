export async function headerInit() {
  const header = document.getElementById("main-header");
  const loader = () => import("./partials/header");
  const module = await loader();

  header.innerHTML = module.render();
}

export async function contactInit() {
  const contact = document.getElementById("contact-info-container");
  const loader = () => import("./partials/contact");
  const module = await loader();

  contact.innerHTML = module.render();
}
