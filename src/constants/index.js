import {
  bharat,
  codding,
  github,
  linkedin,
  oasis,
  people01,
  people02,
  people03,
  send,
  shield,
  star,
  techfest,
  twitter,
  website
} from "../assets";
  
  export const navLinks = [
    {
      id: "Home",
      title: "Home",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experiences",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  export const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
     link:"https://github.com/techmannih?tab=repositories",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
     link:"https://github.com/techmannih?tabMczlyFrTyKinit=repositories",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
     link:"https://github.com/techmannih?tab=repositories",
    },
  ];
  
 
  
  export const stats = [
    {
    
      title: "Skills",
  
    },
    
  ];
  
  export const statsss = [
    {
    
      title: "Experiences",
  
    },
    
  ];
  
  export const statss = [
    {
    
      title: "Projects",
  
    },
    
  ];
  
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: website,
      link: "https://linktr.ee/Techmannih",
    },
    {
      id: "social-media-2",
      icon: github,
      link: "https://github.com/techmannih",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://twitter.com/techmannih",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/in/techmannih/",
    },
  ];
  
  
  
  export const experiences = [
    {
      title: "Campus Ambassador Intern",
      company_name: "Techfest,IIT Bombay",
      icon: techfest,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Bharat Intern",
      icon: bharat,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer & Designing Intern",
      company_name: "Coding Saathi",
      icon: codding,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using Star.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Web Developer & Designing Intern",
      company_name: "Oasis Infobyte",
      icon: oasis,
      iconBg: "#E6DEDD",
      date: "May 2023 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Login-Signup",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Firebase-Contact",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Todo List ",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Calculator",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Password Generator",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "First-Dapp",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "My Portfolio",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Video conferencing",
    title: "Founder & Leader",
    img: people03,
  },
];
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };