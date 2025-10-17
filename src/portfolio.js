/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amine",
  title: "Salut, je suis Amine 👋",
  subTitle: emoji(
    "Étudiant en ingénierie informatique et réseaux, expert en développement logiciel.  \nPassionné par l'intersection Web3 et IA, je me spécialise dans la sécurité des blockchains et l'analyse de données on-chain"
  ),
  resumeLink: "/cv-Aitoufkir-amine (3).pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Amine-aitoufkir",
  linkedin: "https://www.linkedin.com/in/amine-ait-oufkir-5aa4062a9/",
  gmail: "atmine7@gmail.com",
  instagram: "https://www.instagram.com/atmine7/",
  twitter: "https://x.com/atmine7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mon expertise",
  subTitle: "EXPERT EN DÉVELOPPEMENT BACKEND & TECHNOLOGIES WEB3",
  skills: [
    emoji("🌐 Backend & APIs - Architectures robustes et systèmes distribués"),
    emoji("🔐 Blockchain - Smart contracts, protocoles DeFi, sécurité"),
    emoji("📈 Data - Analyse on-chain, oracles, intelligence blockchain"),
    emoji("⚡ DevOps - Déploiement et monitoring d'applications décentralisées")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "UML",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ECOLE MAROCCAINE DES SCIENCES DE L'INGÉNIEUR",
      logo: "/emsi-logo.JPEG",
      url: "https://emsi.ma/",
      formations: [
        {
          subHeader: "Cycle d'ingénieur en informatique",
          duration: "2023 – PRESENT"
        },
        {
          subHeader: "Années Préparatoires",
          duration: "2021 – 2023"
        }
      ]
    },
    {
      schoolName: "Lycée Pythagore",
      logo: "/pi.png",
      url: "https://groupescolairepythagore.com/",
      formations: [
        {
          subHeader: "Baccalauréat en sciences physiques",
          duration: "2019 – 2020"
        }
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Projet de Fin d'Année – Plateforme de vente de jeux digitaux",
      company: "Python & Django",
      companylogo: "/pd.png",
      date: "2024",
      desc: "Conception d'un site e-commerce permettant d'acheter et télécharger des jeux numériques en toute sécurité. Le projet m'a permis d'appliquer Django pour la gestion des utilisateurs, des paiements et du catalogue de jeux.",
      descBullets: []
    },
    {
      role: "Projet DeFi – Plateforme de prêt et d'emprunt décentralisée",
      company: "Solidity & React",
      companylogo: "/def.jpg",
      date: "2025",
      desc: "Développement d'un protocole DeFi permettant de déposer, emprunter et rembourser des actifs numériques en toute transparence via des smart contracts Solidity. L'application frontend, conçue en React et Ethers.js, permet aux utilisateurs d'interagir avec le contrat sur le testnet Sepolia à travers une interface moderne et intuitive."
    },
    {
      role: "Projet Développement Mobile – Smart Presence",
      company: "Android",
      companylogo: "/and.webp",
      date: "2025",
      desc: "Conception d'une application Android de gestion des absences pour l'EMSI, permettant le suivi en temps réel des présences des étudiants. L'application intègre l'authentification, la consultation des horaires et la notification automatique des absences, offrant une solution moderne et efficace pour la digitalisation du contrôle de présence."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et certifications 🏆"),
  subtitle:
    "Mes certifications professionnelles et formations complétées",

  achievementsCards: [
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      subtitle: "IBM",
      image: "/Do.png",
      imageAlt: "Docker Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/docker.pdf"
        }
      ]
    },
    {
      title: "Virtual Networks in Azure",
      subtitle: "Whizlabs",
      image: "/Azu.png",
      imageAlt: "Azure Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/Azure.pdf"
        }
      ]
    },
    {
      title: "React Basics",
      subtitle: "Meta",
      image: "/rea.png",
      imageAlt: "React Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/React.pdf"
        }
      ]
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      subtitle: "University of Pennsylvania",
      image: "/ja.png",
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/java.pdf"
        }
      ]
    },
    {
      title: "Introduction to HTML5",
      subtitle: "University of Michigan",
      image: "/ml.png",
      imageAlt: "HTML5 Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/html5.pdf"
        }
      ]
    },
    {
      title: "Introduction to CSS3",
      subtitle: "University of Michigan",
      image: "/cs.png",
      imageAlt: "CSS3 Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/css3.pdf"
        }
      ]
    },
    {
      title: "Introduction à la programmation orientée objet (en C++)",
      subtitle: "École Polytechnique Fédérale de Lausanne",
      image: "/C.svg",
      imageAlt: "C++ Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/c++.pdf"
        }
      ]
    },
    {
      title: "Interactivity with JavaScript",
      subtitle: "University of Michigan",
      image: "/jsc.png",
      imageAlt: "JavaScript Logo",
      footerLink: [
        {
          name: "Voir la certification",
          url: "/js.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Étudiant en ingénierie informatique et réseaux | Passionné par la convergence IA & Web3",
  number: "+212-621542328",
  email_address: "atmine7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
