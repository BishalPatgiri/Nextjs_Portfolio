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
  faUbuntu
} from "@fortawesome/free-brands-svg-icons";

import { faFileExcel,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
  { src: faFacebook, alt: "Facebook Logo",link:'https://www.facebook.com/bishal.p.9' },
  { src: faTwitter, alt: "Twitter Logo",link:'https://x.com/BishalP5' },
  { src: faLinkedin, alt: "LinkedIn Logo",link:'https://www.linkedin.com/in/bishal-patgiri-a80704198/' },
  { src: faTelegram, alt: "Telegram Logo",link:'/404' }
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

export const contactMeOption=[
  { medium:'Phone',icon:faPhone,detail:"+91 8638299172"},
  { medium:'Email',icon:faEnvelope,detail:"bishalpatgiri67@gmail.com"},
]

export const certificates = [
  {
    name: "Full Stack Web Development - Masai School",
    recognizedBy: "Masai School",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    link: "/certificates/Masai_Passout_Certificate.pdf",
    issuedDate: "2022",
    credentialId: "MASAI-FS-2022",
    skills: ["Full Stack", "React.js", "Node.js", "MongoDB", "MERN Stack"],
    category: "Professional Training",
    priority: 1
  },
  {
    name: "Machine Learning & Python",
    recognizedBy: "Online Learning Platform",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    link: "/certificates/Machine_learning and Python.pdf",
    issuedDate: "2023",
    credentialId: "ML-PYTHON-2023",
    skills: ["Machine Learning", "Python", "Data Science", "AI"],
    category: "AI & Machine Learning",
    priority: 2
  },
  {
    name: "Machine Learning for All",
    recognizedBy: "Educational Institution",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=500&h=300&fit=crop",
    link: "/certificates/Machine Learning for all certificate.pdf",
    issuedDate: "2023",
    credentialId: "ML-ALL-2023",
    skills: ["ML Fundamentals", "AI Concepts", "Data Analysis"],
    category: "AI & Machine Learning",
    priority: 3
  },
  {
    name: "Embedded System Design with ARM",
    recognizedBy: "NPTEL - IIT/IISc",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    link: "/certificates/NPTEL Certification for Embedded System Design with ARM.pdf",
    issuedDate: "2023",
    credentialId: "NPTEL-ARM-2023",
    skills: ["ARM Architecture", "Embedded Systems", "IoT", "Hardware Design"],
    category: "Embedded Systems",
    priority: 4
  },
  {
    name: "Machine Learning: Predict Poisonous Mushrooms using R",
    recognizedBy: "Data Science Training",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    link: "/certificates/Machine Learning Predict Poisonous Mushrooms using R.pdf",
    issuedDate: "2023",
    credentialId: "ML-R-2023",
    skills: ["Random Forest", "R Programming", "Data Analysis", "Classification"],
    category: "AI & Machine Learning",
    priority: 5
  },
  {
    name: "Internet of Things (IoT) Training",
    recognizedBy: "IoT Academy",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=300&fit=crop",
    link: "/certificates/Internet of Things Training - Certificate of Completion.pdf",
    issuedDate: "2023",
    credentialId: "IOT-TRAIN-2023",
    skills: ["IoT", "Sensors", "Connected Devices", "Smart Systems"],
    category: "Embedded Systems",
    priority: 6
  },
  {
    name: "Basics of Web Development",
    recognizedBy: "Web Development Institute",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&h=300&fit=crop",
    link: "/certificates/Basics Web_Development.pdf",
    issuedDate: "2022",
    credentialId: "WEB-BASICS-2022",
    skills: ["HTML", "CSS", "JavaScript", "Web Fundamentals"],
    category: "Web Development",
    priority: 7
  },
  {
    name: "Introduction to HTML",
    recognizedBy: "Web Development Course",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop",
    link: "/certificates/Certificate Introduction to HTML.pdf",
    issuedDate: "2022",
    credentialId: "HTML-INTRO-2022",
    skills: ["HTML5", "Semantic HTML", "Web Structure"],
    category: "Web Development",
    priority: 8
  },
  {
    name: "Basics of Web Development Certificate Course",
    recognizedBy: "Educational Platform",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
    link: "/certificates/certificate-basics-of-web-development-certificate-course-60be613562c85c7521421464.pdf",
    issuedDate: "2021",
    credentialId: "WEB-DEV-2021",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Development",
    priority: 9
  },
  {
    name: "Digital Marketing Training",
    recognizedBy: "Digital Marketing Academy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    link: "/certificates/Digital Marketing Training - Certificate of Completion (2).pdf",
    issuedDate: "2023",
    credentialId: "DM-CERT-2023",
    skills: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"],
    category: "Marketing",
    priority: 10
  },
  {
    name: "DSA Ninja - Data Structures & Algorithms",
    recognizedBy: "Coding Platform",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
    link: "/certificates/DSA_ninja.pdf",
    issuedDate: "2023",
    credentialId: "DSA-NINJA-2023",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"],
    category: "Computer Science",
    priority: 11
  },
  {
    name: "Second Position - B.Tech ECE",
    recognizedBy: "Central Institute of Technology, Kokrajhar",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
    link: "/certificates/Securing_2nd_position_ECE_Btech.pdf",
    issuedDate: "2021",
    credentialId: "CIT-AWARD-2021",
    skills: ["Academic Excellence", "Electronics", "Communication Engineering"],
    category: "Academic Achievement",
    priority: 12
  },
  {
    name: "Largest Conference in Engineering",
    recognizedBy: "Engineering Conference",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    link: "/certificates/Largest_Conference_Engineering.pdf",
    issuedDate: "2023",
    credentialId: "CONF-ENG-2023",
    skills: ["Networking", "Knowledge Sharing", "Industry Exposure"],
    category: "Conference Participation",
    priority: 13
  }
];


export const achievements = [
  {
    title: "DSA Ninja",
    description: "Excellence in Data Structures and Algorithms",
    icon: "🥷",
    year: "2023",
    category: "Coding"
  },
  {
    title: "GATE 2022 Qualified",
    description: "Qualified Graduate Aptitude Test in Engineering",
    icon: "🎓",
    year: "2022",
    category: "Academic"
  },
  {
    title: "Second Position Holder - B.Tech ECE",
    description: "Secured 2nd position in Electronics & Communication Engineering",
    icon: "🏆",
    year: "2021",
    category: "Academic"
  }
];