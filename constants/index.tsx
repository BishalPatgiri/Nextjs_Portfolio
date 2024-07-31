import {
  faReact,
  faAws,
  faNodeJs,
  faNode,
  faHtml5,
  faCss3Alt,
  faPython,
  faGit,
  faGithub,
  faDocker,
  faFacebook,
  faTwitter,
  faLinkedin,
  faTelegram,
  faYarn,
  faNpm,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";

import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

export const aboutMe =
  // "A dynamic Full Stack Developer with a flair for innovation and a dedicated towards work. I bring a blend of passion and expertise to drive holistic development, actively contributing to key solutions using microservices architecture. A collaborative team player, I thrive in accelerating development through active participation. Always at the forefront of tech trends, I ensure every platform I built remains cutting-edge. Love to code. Elevate your team with a developer dedicated to excellence and innovation.";
"A passionate and innovative Full Stack Developer with expertise in microservices architecture. I excel in driving holistic development and delivering cutting-edge solutions. As a collaborative team player, I actively contribute to accelerating projects and keeping platforms at the forefront of technology. Dedicated to coding and staying ahead of tech trends, I'm committed to excellence and innovation in every project."
export const NavLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contribution", label: "Contributions" },
  { href: "#contact-me", label: "Contact Me" },
];

export const Skills = [
  { src: faReact, text: "ReactJs" },
  { src: faAws, text: "AWS Services" },
  { src: faNodeJs, text: "Javascript" },
  { src: faNode, text: "NodeJS" },
  { src: faNpm, text: "NPM" },
  { src: faHtml5, text: "HTML" },
  { src: faCss3Alt, text: "CSS" },
  { src: faPython, text: "Python" },
  { src: faUbuntu, text: "Ubuntu" },
  { src: faGit, text: "Git" },
  { src: faGithub, text: "Github" },
  { src: faDocker, text: "Docker" },
  { src: faYarn, text: "Yarn" },
  { src: faFileExcel, text: "Excel" },
];

export const SocialMedia = [
  { src: faFacebook, alt: "Facebook logo" },
  { src: faTwitter, alt: "Twitter logo" },
  { src: faLinkedin, alt: "LinkedIn logo" },
  { src: faTelegram, alt: "Telegram logo" },
];

export const ProjectsList = [
  {
    image:
      "https://user-images.githubusercontent.com/103960628/193427517-21406fb5-b47e-430e-a1c9-000ff89e303e.png",
    git: "https://github.com/BishalPatgiri/Toggl-Track-Clone",
    text: "Toggl Track is a time tracking and project management website. We have cloned this website within 5 days where we used ReactJS, Css, ExpressJS, NodeJS and MongoDB to create the whole Frontend and the Backend. We deployed the website on Netlify",
    deployed: "https://clone-toggl-track.netlify.app/",
    title: "toggl.com Clone",
  },
  {
    image:
      "https://user-images.githubusercontent.com/103960628/201537925-e145ca3b-6b69-449a-a3b4-549577dbbe38.png",
    git: "https://github.com/BishalPatgiri/Geekbuying-E-Commerce",
    text: "Geekbuying is also an E-Commerce website for electronic products. This website has all the small and big electronic machines that we need in our daily life.",
    deployed: "https://geekbuying-clone-app.netlify.app/",
    title: "geekbuying.com Clone",
  },
  {
    image:
      "https://user-images.githubusercontent.com/104014308/188278962-d6006f9a-c3d7-49f8-b2ec-2c560440f941.JPG",
    git: "https://github.com/BishalPatgiri/Clone-of-Booking.com",
    text: "This is an ticket booking website. We have done this project in a group. We have used ReactJS, Redux and Restfull apis to do different tasks in this project.",
    deployed: "https://booking-com-clone.netlify.app/",
    title: "booking.com Clone",
  },
  {
    image:
      "https://user-images.githubusercontent.com/103960628/198090451-5338ca63-2ed5-4160-ac99-04b0adae18c9.png",
    git: "https://github.com/BishalPatgiri/Naturesbasket-Clone",
    text: "Naturesbasket is an E-Commerce website where all the natural Groceries are available online.",
    deployed: "https://naturesbasket-clone.netlify.app/",
    title: "Netures Busket website Clone",
  },
];

export const certificates = [
  { name: "", recognizedBy: "", imageUrl: "", link: "" },
  { name: "", recognizedBy: "", imageUrl: "", link: "" },
  { name: "", recognizedBy: "", imageUrl: "", link: "" },
  { name: "", recognizedBy: "", imageUrl: "", link: "" },
];
