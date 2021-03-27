import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Bhavini Tina Patel',
  subtitle: 'Educator and Web Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.JPG',
  paragraphOne: "Welcome to my website! I love learning about web design and coding is fun for me. I love learning new ways to make code more effective and beautiful.",
  paragraphTwo: "In 2013, I graduated with my Bachelor's Degree in Human Biology from UC San Diego. I received my Single Subject Teaching Credential in Biology from CSU Dominguez Hills in 2017, and most recently I graduated from Western Governors University in June 2020 with my M.Ed in Learning and Technology.",
  paragraphThree: "Today, I am teaching high school Living Earth and AP Biology in San Diego, CA, while pursuing my Computer Science credential through CSU Dominguez Hills, set to graduate in 2021. I am also learning through NuCamp's Full-Stack Developer Bootcamp from January to June 2021.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project2.JPG',
    title: 'NuCampsite',
    info: 'A campsite reservation website made for NuCamp Coding Bootcamp. Uses React. Learned React Router, Single Page Applications, React Forms, Flow Architecture, Redux and Client-Server Communication.',
    info2: '',
    url: '',
    repo: 'https://github.com/bpatel1991/NuCampsiteReact', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.JPG',
    title: 'Bootstrap Portfolio Practice',
    info: 'A basic Bootstrap Portfolio page using scrollspy to listen to page scrolling and trigger slow scroll animation event. Jquery, Popper, Bootstrap, Panel.  ',
    info2: '',
    url: '',
    repo: 'https://github.com/bpatel1991/BootStrap-Portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.JPG',
    title: 'EyeScream',
    info: 'Ever feel like your eyes are SCREAMING for a break? We built a cute Google Chrome extension for AthenaHacks to remind the user to take frequent breaks from screen time.',
    info2: 'Built with JavaScript and Google Chrome notifications/alerts over Virtual Studio Code Live Share. Winning project for the Best Beginner category for AthenaHacks 2021.',
    url: 'https://devpost.com/software/eyes-cream',
    repo: 'https://github.com/ayushib4/Team63-AthenaHacks/blob/458550c8583e7a53b391eb9983490cd05dbb71bf/Ver1.0.0.zip', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? That's awesome!",
  btn: "Let's Talk",
  email: 'bhavini.patel91@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bhavini-tina-patel-m-ed-learning-and-technology-49486645/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bpatel1991',
    },
  ],
};