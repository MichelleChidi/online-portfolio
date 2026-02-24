import "../../../styles/css/pages/case-studies/design-system.css";

export function render() {
  return `
<div class="page-portfolio-design">
  <div class="page-line">
    <div class="line"></div>
  </div>
  <div class="content">
    <article aria-labelledby="case__name" class="case-design-system">
      <header>
        <div class="case__title">
          <div>
            <h1 id="case__name">Design System</h1>
            <p class="case__caption">With Figma and Storybook</p>
          </div>
          <img
            src="../assets/images/design-system.png"
            class="design-system-image"
            width="624"
            height="407"
            alt=" "
          />
        </div>
        <div class="case__intro">
          <dl class="case__details">
            <dt>Role</dt>
            <dd>Project lead – UX/UI designer</dd>

            <dt>Timeline</dt>
            <dd>April to October 2023</dd>

            <dt>Tools</dt>
            <dd>Figma and Storybook</dd>

            <dt>Team</dt>
            <dd>UX/UI Designer, Frontend Developer, Team Lead</dd>

            <dt>Product</dt>
            <dd>Voordeelijes</dd>
          </dl>
          <div class="case__description">
            <h2 class="case__description-title">Project goal</h2>
            <p>
              Create a simple, scalable design system that enables consistent UI
              design and efficient collaboration between designers and
              developers.
            </p>
          </div>
        </div>
      </header>
      <div class="case__content">
        <aside class="case__table-of-contents">
          <nav
            class="case__table-of-contents-links"
            aria-label="Section navigation"
          >
            <li>
              <a class="case__chapter-link" href="#case__chapter-problems">
                <b class="case__number">01</b>
                <span class="case__chapter-name">Problems</span>
              </a>
            </li>
            <li>
              <a class="case__chapter-link" href="#case__chapter-users">
                <b class="case__number">02</b>
                <span class="case__chapter-name">Users</span>
              </a>
            </li>
            <li>
              <a
                class="case__chapter-link"
                href="#case__chapter-design-strategy"
              >
                <b class="case__number">03</b>
                <span class="case__chapter-name">Design Strategy</span>
              </a>
            </li>
            <li>
              <a
                class="case__chapter-link"
                href="#case__chapter-design-implementation"
              >
                <b class="case__number">04</b>
                <span class="case__chapter-name">Design implementation</span>
              </a>
            </li>
            <li>
              <a
                class="case__chapter-link"
                href="#case__chapter-dev-implementation"
              >
                <b class="case__number">05</b>
                <span class="case__chapter-name">Dev implementation</span>
              </a>
            </li>
            <li>
              <a class="case__chapter-link" href="#case__chapter-results">
                <b class="case__number">06</b>
                <span class="case__chapter-name">Results</span>
              </a>
            </li>
          </nav>
        </aside>
        <div class="case__chapters">
          <section class="case__chapter" id="case__chapter-problems">
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Problems</h2>
              <div>
                Working without an established design system introduced problems
                such as:
                <ul>
                  <li>Inconsistent component behavior and visual patterns.</li>
                  <li>
                    Accessibility considerations being applied inconsistently.
                  </li>
                  <li>
                    Limited documentation of assets, components, and tokens.
                  </li>
                  <li>Poor communication with developers.</li>
                  <li>Slow design process.</li>
                  <li>
                    Designers manually maintained multiple component variants
                    across file.
                  </li>
                  <li>Difficulty onboarding new designers and developers.</li>
                </ul>
              </div>
            </div>
            <img
              src="../assets/images/website-problems.png"
              class="case__image"
              width="745"
              height="483"
              alt=" "
            />
          </section>
          <section class="case__chapter" id="case__chapter-users">
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Users</h2>
              <p>
                This project was not meant to only improve the usability of our
                components for our users but also to improve the work experience
                of the design team and development team.Given my background in
                front-end development and understanding of the challenges facing
                the team, one of my major goals was to bridge the gap between
                designers and developers.
              </p>
            </div>
            <img
              src="../assets/images/typography-system.png"
              class="case__image"
              width="500"
              height="645"
              alt=" "
            />
          </section>
          <section class="case__chapter" id="case__chapter-design-strategy">
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Design Strategy</h2>
              <div>
                With my directive, we followed the following guidelines:
                <ul class="case__guidelines">
                  <li>
                    <a href="https://atomicdesign.bradfrost.com/chapter-2/">
                      <span class="text-bold">
                        Atomic design by Brad Frost:
                      </span>
                    </a>
                    Adopted to create reusable, scalable components with clearly
                    defined relationships between UI elements.
                  </li>
                  <li>
                    <a href="https://www.w3.org/WAI/WCAG22/quickref/">
                      <span class="text-bold">WCAG 2.2:</span>
                    </a>
                    We strictly followed the guidelines set for accessibility at
                    this level.
                  </li>
                  <li>
                    <a
                      href="https://uxdesign.cc/the-4px-baseline-grid-89485012dea6"
                    >
                      <span class="text-bold">4px grid model:</span>
                    </a>
                    Used to ensureconsistent spacing, alignment, and visual
                    rhythm across all components.
                  </li>
                  <li>
                    <span class="text-bold">Naming convention:</span> Tokens
                    such as icons, colors, and texts follow a fixed naming
                    convention, making them easily identifiable.
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="../assets/images/atomic-system.png"
              class="case__image"
              width="631"
              height="387"
              alt=" "
            />
          </section>
          <section
            class="case__chapter"
            id="case__chapter-design-implementation"
          >
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Design implementation</h2>
              <div>
                <h3 class="case__subheading">Component anatomy</h3>
                <p>
                  I treated components were treated as modular building blocks.
                  Using the modal component as an example, I structured
                  components according to Atomic Design principles.
                </p>
              </div>
              <div>
                <h3 class="case__subheading">States and scenarios</h3>
                <p>
                  I treated components were treated as modular building blocks.
                  Using the modal component as an example, I structured
                  components according to Atomic Design principles.
                </p>
              </div>
              <div>
                <h3 class="case__subheading">Accessibility considerations</h3>
                <p>
                  Accessibility was integrated into each component by default,
                  rather than treated as an afterthought. WCAG-compliant color
                  contrast ratios Minimum interactive target size of 40×40px
                  Clear visual hierarchy to support scanability and focus
                </p>
              </div>
            </div>
            <img
              src="../assets/images/design_system_image.png"
              class="case__image"
              width="640"
              height="380"
              alt=" "
            />
          </section>
          <section class="case__chapter" id="case__chapter-dev-implementation">
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Development implementation</h2>
              <div>
                <p>
                  Components were built to be WCAG compliant and respect
                  semantic HTML design. I personally built some complex
                  components with the development team using Radix UI component
                  library. The library provides components that follow WAI-ARIA
                  accessibility standards, keyboard navigation, and screen
                  reader compatibility out of the box.
                </p>
              </div>
            </div>
            <img
              src="../assets/images/design_system_image.png"
              class="case__image"
              width="640"
              height="380"
              alt=" "
            />
          </section>
          <section class="case__chapter" id="case__chapter-results">
            <div class="case__chapter-text">
              <h2 class="case__chapter-title">Results</h2>
              <p>
                Working without an established design system introduced problems
                such as: Inconsistent component behavior and visual patterns.
                Accessibility considerations being applied inconsistently.
                Limited documentation of assets, components, and tokens. Poor
                communication with developers. Slow design process. Designers
                manually maintained multiple component variants across file.
                Difficulty onboarding new designers and developers.
              </p>
            </div>
            <img
              src="../assets/images/browser-header.png"
              class="case__image"
              width="640"
              height="380"
              alt=" "
            />
            <video
              class="case__image"
              width="320"
              height="240"
              autoplay
              playsinline
              muted
              loop
            >
              <source src="../assets/videos/storybook.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </div>
    </article>
  </div>
</div>
  `;
}

export async function init() {
  const sections = document.querySelectorAll(".case__chapter");
  const menuLinks = document.querySelectorAll(".case__chapter-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const menuItem = document.querySelector(
          `.case__chapter-link[href="#${id}"]`,
        );

        if (entry.isIntersecting) {
          menuLinks.forEach((link) => link.classList.remove("active"));

          menuItem.classList.add("active");
        }
      });
    },
    {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}
