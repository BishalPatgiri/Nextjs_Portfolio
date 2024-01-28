import { facebook, instagram, twitter } from "../assets/icons";
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
  faYarn
} from "@fortawesome/free-brands-svg-icons";

export const NavLinks = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-me", label: "Contact Me" },
    { href: "#contribution", label: "Contributions" },
];

export const Skills = [
    { src: faReact, text: "ReactJs" },
    { src: faAws, text: "AWS Lamda" },
    { src: faNodeJs, text: "Javascript" },
  { src: faNode, text: "NodeJS" },
  { src: faHtml5, text: "HTML" },
  { src: faCss3Alt, text: "CSS" },
  { src: faPython, text: "Python" },
  { src: faGit, text: "Git" },
  { src: faGithub, text: "Github" },
  { src: faDocker, text: "Docker" },
  { src: faYarn, text: "Yarn" },

];

export const SocialMedia = [
  { src: faFacebook, alt: "Facebook logo" },
  { src: faTwitter, alt: "Twitter logo" },
  { src: faLinkedin, alt: "LinkedIn logo" },
  { src: faTelegram, alt: "Telegram logo" },

];
export const products = [];

export const services = [
  // {
  //     imgURL: customer2,
  //     customerName: 'Lota Mongeskar',
  //     rating: 4.5,
  //     feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  // }
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

