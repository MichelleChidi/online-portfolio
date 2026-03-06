import "../../styles/css/partials/contact.css";

export function render() {
  return `
    <ul class="contact-links">
        <li id="contact-link-mail">
            <a href="mailto:michellenjemanze@yahoo.com" class="contact-info">
            <img
                src="../assets/icons/mail.svg"
                height="32"
                width="32"
                alt=" "
            />
            <span>michellenjemanze@yahoo.com</span>
            </a>
        </li>
        <li id="contact-link-linkedin">
            <a
                href="https://www.linkedin.com/in/michelle-chidi-njemanze"
                class="contact-info"
            >
            <img
                src="../assets/icons/linkedin.svg"
                height="32"
                width="32"
                alt=" "
            />
            <span>LinkedIn</span></a
            >
        </li>
        <li id="contact-link-cv">
            <a href="mailto:michelle.njemanze@yahoo.com" class="contact-info">
            <img
                src="../assets/icons/download.svg"
                height="32"
                width="32"
                alt=" "
            />
            <span>Download my CV</span>
            </a>
        </li>
    </ul>
  `;
}
