import "../../styles/css/pages/portfolio.css";

export function render() {
  return `
    <div class="page-portfolio">
  <div class="page-line">
    <div class="line"></div>
  </div>
  <div class="content">
    <header id="main-header"></header>
    <section aria-labelledby="about-title" class="about">
      <h2 id="about-title" class="visually-hidden">About me</h2>

      <p>
        Hi there, I’m a senior <b>Front-end developer</b> and a
        <b>UX/UI designer </b> with 6+ years of experience in designing,
        building and testing complex user-friendly applications. Intent on
        delivering the best products with the highest standards of
        <b>user experience</b>, <b>web design</b>, <b>accessibility</b> and
        <b>performance</b> with <b>best practices</b> I have the privilege of
        working in diverse work environments on various types of products like
        Maijet. I am currently working at Voordeeluitjes.nl as senior frontend
        developer and UI/UX designer delivering the best experiences for our
        users
      </p>

      <div>
        <h3 class="work-experience-heading">
          <img
            src="../assets/icons/handdrawn-arrow.svg"
            class="straight-arrow"
            height="36"
            width="36"
            alt=" "
          />
          <span>Work experience</span>
        </h3>
        <p class="work-experience-content">
          <span
            >2023 - 2024 UX/UI designer at Voordeeluitjes, Deventer UX/UI design
            UX research User analysis</span
          >
          <b>Tools:</b> Figma, Adobe Illustrator, Invision, Adobe XD, Mouseflow,
          Clarity, Google analytics, Google tag manager, Convert, Tally, Google
          forms, Storybook, Histoire.
        </p>
      </div>

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
    <section aria-labelledby="case-studies-title" class="case-studies">
      <h2 id="case-studies-title" class="visually-hidden">My case studies</h2>
      <div class="case-study">
        <div class="board bg-yellow">
          <img
            src="../assets/images/design_system_image.png"
            class="design-system-image"
            width="640"
            height="380"
            alt=" "
          />
          <a class="post-it bg-blue" href="/design-system" data-link="true">
            <div class="text">
              <h3 class="title">Creating a design sysytem</h3>
              <p class="subtitle">with Figma and storybook</p>
              <p>
                Creating reusable components and tokens with consistent design
                and accessibility considerations
              </p>
            </div>
            <div class="post-it-btn">
              View project
              <img
                src="../assets/icons/arrow-forward.svg"
                class="design-system-image"
                width="32"
                height="32"
                alt=" "
              />
            </div>
          </a>
        </div>
      </div>
      <div class="case-study multiple">
        <div class="board bg-magenta">
          <img
            src="../assets/images/steppers-image.png"
            class="design-system-image"
            width="340"
            height="445"
            alt=" "
          />
        </div>
        <div class="board bg-red">
          <img
            src="../assets/images/accommodation-facilities.png"
            class="design-system-image"
            width="340"
            height="445"
            alt=" "
          />
        </div>
        <a class="post-it bg-green" href="/design-system" data-link="true">
          <div class="text">
            <h3 class="title">Website redesign</h3>
            <p class="subtitle">with Figma</p>
            <p>
              Gradual redesign of an entire website. Consistent design and
              user-friendly optimizations.
            </p>
          </div>
          <div class="post-it-btn">
            View project
            <img
              src="../assets/icons/arrow-forward.svg"
              class="design-system-image"
              width="32"
              height="32"
              alt=" "
            />
          </div>
        </a>
      </div>
    </section>
  </div>
</div>
  `;
}

export async function init() {
  console.log("Home page JS loaded");

  const header = document.getElementById("main-header");

  const loader = () => import("../partials/header");

  const module = await loader();

  header.innerHTML = module.render();

  if (module.init) {
    module.init();
  }
}
