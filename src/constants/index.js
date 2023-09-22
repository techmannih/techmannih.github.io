import {
  calculator,
  github,
  linkedin,
  password,
  people01,
  people02,
  people03,
  send,
  shield,
  star,
  temp,
  twitter,
  website,pootfolio, video,
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
  // {
  //   id: "experiences",
  //   title: "Experience",
  // },
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
    link: "https://github.com/techmannih?tab=repositories",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
    link: "https://github.com/techmannih?tabMczlyFrTyKinit=repositories",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    link: "https://github.com/techmannih?tab=repositories",
  },
];

export const stats = [
  {
    title: "Skills",
  },
];

// export const statsss = [
//   {

//     title: "Experiences",

//   },

// ];

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

export const feedback = [
  {
    id: "feedback-1",
      // "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Temprature-convertor",
   
    img: temp,
    Code:"",
    Live:"",
  },
  // {
  //   id: "feedback-2",
  //   content:
  //     "Money makes your life easier. If you're lucky to have it, you're lucky.",
  //   name: "Firebase-Contact",
  //   title: "Live",
  // live:"live",
  //  link: "https://twitter.com/techmannih",
  //   img: people02,
  // },
  {
    id: "feedback-2",
    name: "Todo List ",
    Code:"",
    Live:"",
    link: "https://twitter.com/techmannih",
    img: "",
  },
  {
    id: "feedback-4",
    name: "Calculator",
    Code:"",
    Live:"",
    link: "https://twitter.com/techmannih",
    img: calculator,
  },
  {
    id: "feedback-5",
    name: "Password Generator",
    Code:"",
    Live:"",
    img: password,
    live: "live",
  },
  // {
  //   id: "feedback-3",
  //   content:
  //     "It is usually people in the money business, finance, and international trade that are really rich.",
  //   name: "First-Dapp",
  //   title: "Live",
  // live:"live",
  //  link: "https://twitter.com/techmannih",
  //   img: people03,
  // },
  {
    id: "feedback-6",
    name: "My Portfolio",
    Code:"",
    Live:"",
    img: pootfolio,
  },
  {
    id: "feedback-3",
    name: "Video conferencing",
    Code:"",
    Live:"",
    img: video,
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
