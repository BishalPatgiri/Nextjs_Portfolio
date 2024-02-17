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
  faYarn,
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

export const ProjectsList = [
  {
    image:
      "https://user-images.githubusercontent.com/103960628/193427517-21406fb5-b47e-430e-a1c9-000ff89e303e.png",
    git: "https://github.com/BishalPatgiri/Toggl-Track-Clone",
    text: "Toggl Track is a time tracking and project management website. We have cloned this website within 5 days where we used ReactJS, Css, ExpressJS, NodeJS and MongoDB to create the whole Frontend and the Backend. We deployed the website on Netlify",
    deployed: "https://clone-toggl-track.netlify.app/",
    title: "toggl.com Clone",
  },
  // {image:"ImageLink",git:"GithubLink",text:"Description 2",deployed:"",title:"Project 2"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 3",deployed:"",title:"Project 3"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 4",deployed:"",title:"Project 4"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 5",deployed:"",title:"Project 5"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 6",deployed:"",title:"Project 6"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 7",deployed:"",title:"Project 7"},
  // {image:"ImageLink",git:"GithubLink",text:"Description 8",deployed:"",title:"Project 8"},
];
