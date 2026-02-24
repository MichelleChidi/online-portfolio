import "../../styles/css/pages/home.css";

export function render() {
  return `
    <div class="page-home">
  <div class="page-line">
    <div class="line"></div>
  </div>
  <div class="content">
    <header id="main-header"></header>
    <section aria-labelledby="about-title" class="about">
      <h2 id="about-title" class="visually-hidden">About me</h2>

      <p>
        Hi there, I’m a senior <strong>Front-end developer</strong> and a
        <strong>UX/UI designer</strong> with 6+ years of experience in
        designing, building and testing complex user-friendly applications.
        Intent on delivering the best products with the highest standards of
        <span class="text-bold">user experience</span>,
        <span class="text-bold">web design</span>,
        <span class="text-bold">accessibility</span> and
        <span class="text-bold">performance</span> with
        <span class="text-bold">best practices</span> I have the privilege of
        working in diverse work environments on various types of products like
        Maijet. I am currently working at Voordeeluitjes.nl as senior frontend
        developer and UI/UX designer delivering the best experiences for our
        users
      </p>

      <div class="contact-info-container">
        <a href="mailto:michellenjemanze@yahoo.com" class="contact-info">
          <img
            src="../assets/icons/mail.svg"
            class="contact-mail-icon"
            height="24"
            width="24"
            alt=" "
          />
          <span>michellenjemanze@yahoo.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/michelle-chidi-njemanze"
          class="contact-info"
        >
          <img
            src="../assets/icons/linkedin.svg"
            class="contact-linkedin-icon"
            height="24"
            width="24"
            alt=" "
          />
          <span>LinkedIn</span></a
        >
        <a href="mailto:michelle.njemanze@yahoo.com" class="contact-info">
          <img
            src="../assets/icons/download.svg"
            class="contact-download-icon"
            height="24"
            width="24"
            alt=" "
          />
          <span>Download my CV</span>
        </a>
      </div>
    </section>
  </div>
</div>
  `;
}

export async function init() {
  const header = document.getElementById("main-header");
  const loader = () => import("../partials/header");
  const module = await loader();

  header.innerHTML = module.render();

  if (module.init) {
    module.init();
  }
}
