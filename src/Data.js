import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaGitlab,
  FaReact,
  FaGithub,
  FaPython,
  FaVuejs,
  FaJenkins,
  FaWordpress,
} from 'react-icons/fa'
import {
  DiHeroku,
  DiJavascript,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPhp,
} from 'react-icons/di'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import {
  SiAmazonaws,
  SiDocker,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMocha,
  SiMysql,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { FcLinux } from 'react-icons/fc'
import profileImage from './Images/profile.jpg'
import shoppingWebsiteBanner from './Images/shopping-website/thumbnail.png'
import boxofficebanner from './Images/Box-Office/thumbnail.png'
import TicTacToeBanner from './Images/Tic-Tac-Toe/thumbnail.png'
import ninjaquizBanner from './Images/Ninja-Quiz/thumbnail.png'
import cameoBanner from './Images/cameo/thumbnail.png'
import lunchBoxBanner from './Images/LunchBox/thumbnail.JPG'
import portfolio2Banner from './Images/Portfolio2/thumbnail.PNG'
import FebaBanner from './Images/Feba/thumbnail.PNG'
import portfolio1Banner from './Images/Portfolio1/thumbnail.PNG'
import portfolio4Banner from './Images/portfolio4/thumbnail.png'
import aniketgift from './Images/aniket-gift/thumbnail.png'
import cinemaAkilBanner from './Images/cinema-akil/thumbnail.png'
import EcommerceBanner from './Images/Ecommerce-website/thumbnail.png'
import weatherAppBanner from './Images/weather_app/thumbnail.PNG'
import todolistBanner from './Images/Todo-List/thumbnail.PNG'
import chatAppJavascriptBanner from './Images/chat-app-javascript/thumbnail.PNG'
import chatAppBanner from './Images/chat-app/thumbnail.PNG'

export const data = {
  navLinks: ['Work', 'Blog', 'Contact'],
  Introduction: {
    heading: 'Hi, I am Siddhant,',
    heading2: ['Full Stack Developer', 'MERN Stack Developer'],
    paragraph:
      'A Web Designer, Web Developer and Digital Marketar from Mumbai in the India. I create websites to help people go further online ',
    buttonText: 'Download Resume',
    profileImage: profileImage,
    skills: [
      {
        text: 'NodeJS',
        icon: <FaNodeJs color="#3c873a" />,
      },
      {
        text: 'PHP',
        icon: <FaPhp color="#474A8A" />,
      },
      {
        text: 'Python',
        icon: <FaPython color="#FFD43B" />,
      },
      {
        text: 'VueJS',
        icon: <FaVuejs color="#41B883" />,
      },
      {
        text: 'ReactJS',
        icon: <FaReact color="#61dafb" />,
      },
      {
        text: 'MongoDB',
        icon: <DiMongodb color="#13aa52" />,
      },
      {
        text: 'MySQL',
        icon: <SiMysql color="#4479a1" />,
      },
      {
        text: 'PostgreSQL',
        icon: <SiPostgresql color="#336791" />,
      },
      {
        text: 'redis',
        icon: <SiRedis color="#D82C20" />,
      },
      {
        text: 'GitHub',
        icon: <FaGithub color="#24292e" />,
      },
      {
        text: 'GitLab',
        icon: <FaGitlab color="#FC6D27" />,
      },
      {
        text: 'Mocha',
        icon: <SiMocha color="#8d6748" />,
      },
      {
        text: 'Jest',
        icon: <SiJest color="#8d6748" />,
      },
      {
        text: 'Linux',
        icon: <FcLinux />,
      },
      {
        text: 'Jenkins',
        icon: <FaJenkins color="#335061" />,
      },
      {
        text: 'Docker',
        icon: <SiDocker color="#007bff" />,
      },
      {
        text: 'AWS',
        icon: <SiAmazonaws color="#4d5360" />,
      },
      {
        text: 'Heroku',
        icon: <DiHeroku color="#79589F" />,
      },
      {
        text: 'Firebase',
        icon: <SiFirebase color="#FFCB2B" />,
      },
      {
        text: 'WordPress',
        icon: <FaWordpress color="#00749c" />,
      },
    ],
  },
  Posts: [
    {
      name:
        'How to fix the Blank screen After a Static Deployment with create-react-app',
      date: '20 July 2021',
      tech: 'ReactJS',
      description: `It’s one of the most annoying situations after deploying a static React app: After all that work, you finally deployed your app for production. But as you visit the site — instead of your freshly deployed app — you see … nothing.
            A blank, white, screen.`,
      link:
        'https://medium.com/@siddhantahire98/how-to-fix-the-blank-screen-after-a-static-deployment-with-create-react-app-2e76983a5d5d',
    },
  ],
  Works: [
    {
      title: 'Cinema Akil',
      year: 2022,
      tech: [{ text: 'VueJS, PHP, MySQL, Redis, WordPress' }],
      description: `Cinema Akil is an independent cinema platform that brings quality films from across the world to the audiences in the UAE. Showcasing directors and filmmakers across the decades, Cinema Akil aims to create awareness and interest in film and the cinematic arts.`,
      image: cinemaAkilBanner,
      demo: 'https://www.cinemaakil.com/',
      code: '',
      featured: true,
      timeline: 8.2,
    },
    {
      title: 'Wedding Gift',
      year: 2022,
      tech: [{ text: 'ReactJS' }],
      description: `Unique gift for my friend at his wedding ( Created just for fun!)`,
      image: aniketgift,
      demo: 'https://siddhant-ahire.github.io/aniket-marriage-gift/',
      code: 'https://github.com/siddhant-ahire/aniket-marriage-gift',
      featured: false,
      timeline: 8.1,
    },
    {
      title: 'Shopping Website',
      year: 2019,
      tech: [{ text: 'NodeJS, MongoDB, Ejs, Bootstrap, Stripe, NodeMailer' }],
      description: `This is a simple shopping website. 
                        Its not a real shopping website this is just a portfolio project
                        I made this shopping website while learning NodeJS. Features:- Login/Registration, 
                        CRUD operations, Payment Option(work in progress..)`,
      image: shoppingWebsiteBanner,
      demo: 'https://nodejs-shopping-website.herokuapp.com/',
      code: 'https://github.com/siddhant-ahire/nodejs-shopping-website',
      featured: false,
      timeline: 2.1,
    },
    {
      title: 'Box-office',
      year: 2020,
      tech: [{ text: 'ReactJS, Styled Component' }],
      description: `A movie search app where you can search movies, shows very easily. You just need to 
            type movie name on search bar and then you will get results you can also save movies as favourite. 
            I created this website in My learning reactJS`,
      image: boxofficebanner,
      demo: 'https://siddhant-ahire.github.io/box-office/#/',
      code: 'https://github.com/siddhant-ahire/box-office',
      featured: false,
      timeline: 4,
    },
    {
      title: 'Tic-Tac-Toe',
      year: 2020,
      tech: [{ text: 'ReactJS' }],
      description: `Tic-tac-toe is a paper-and-pencil game for two players, X and O, 
            who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of 
            their marks in a horizontal, vertical, or diagonal row is the winner. I made this game while learning ReactJS.
            `,
      image: TicTacToeBanner,
      demo: 'https://siddhant-ahire.github.io/tic-toc-toe/dist/',
      code: 'https://github.com/siddhant-ahire/tic-toc-toe',
      featured: false,
      timeline: 3,
    },
    {
      title: 'Ecommerce Website',
      year: 2021,
      tech: [{ text: 'MERN Stack' }],
      description: `This is a Ecommerce website for sale and manage products online. Features: 1) login and Registration 2) Create Product and Category 3) Search Bar, Sorting options 4) Payment Option (card and paypal) 5) Manage Cart 6) Dashboard Admin and User more...`,
      image: EcommerceBanner,
      demo: 'https://siddhant-ahire.github.io/ecommerce-front/#/',
      code: '',
      featured: true,
      timeline: 6,
    },
    {
      title: 'Ninja-Quiz',
      year: 2018,
      tech: [{ text: 'HTML, CSS, JAVASCRIPT' }],
      description: `This is a simple quiz app in which to select the correct option from the given options for the question.
              I made this web page while learning javascript.`,
      image: ninjaquizBanner,
      demo: 'https://siddhant-ahire.github.io/anime-quiz/',
      code: 'https://github.com/siddhant-ahire/anime-quiz',
      featured: false,
      timeline: 1,
    },
    {
      title: 'Cameo',
      year: 2019,
      tech: [{ text: 'Bootstrap' }],
      description: `This is a landing page of cameo.
            I made this web page while learning Bootstrap.`,
      image: cameoBanner,
      demo: 'https://siddhant-ahire.github.io/Bootstrap-Cameo/',
      code: 'https://github.com/siddhant-ahire/Bootstrap-Cameo/',
      featured: false,
      timeline: 2,
    },
    {
      title: 'LunchBox',
      year: 2021,
      tech: [{ text: 'ReactJS, Bootstrap, Material-UI' }],
      description: `This is a restaurant website that i created for one of my client. Main purpose of the website 
                is giving good interface, interactive and secure payment to customer.`,
      image: lunchBoxBanner,
      demo: 'https://siddhant-ahire.github.io/LunchBox/#/',
      code: '',
      featured: true,
      timeline: 7,
    },
    {
      title: 'Portfolio2',
      year: 2020,
      tech: [{ text: 'ReactJS, Material-UI' }],
      description: `I have created this portfolio website to learn Material-UI with ReactJS. This just a simple portfolio
                website that uses material-UI components.`,
      image: portfolio2Banner,
      demo: 'https://siddhant-ahire.github.io/portfolio2/#/',
      code: 'https://github.com/siddhant-ahire/portfolio2',
      featured: false,
      timeline: 5,
    },
    {
      title: 'Portfolio4',
      year: 2021,
      tech: [{ text: 'ReactJS' }],
      description: `Portfolio website that shows your Education, Skill, Work, Blog
        `,
      image: portfolio4Banner,
      demo: 'https://siddhant-ahire.github.io/#/',
      code: '',
      featured: true,
      timeline: 8,
    },
    {
      title: 'feba.co.in',
      year: 2021,
      tech: [
        { text: 'ReactJS, Material-UI, ExpressJS, NodeJS, PostgresSQL, AWS' },
      ],
      description: `I have created CRM(Admin Dashboard) for the website , implementd login/register module(login with otp, simple login),
            created lead form for the website and solved lots of minor errors, bugs in the website and also deployed of all these
            changes on AWS Ec2 instance.`,
      image: FebaBanner,
      demo: 'https://www.feba.co.in/',
      code: '',
      featured: true,
      timeline: 6,
    },
    {
      title: 'Portfolio1',
      year: 2019,
      tech: [{ text: 'Bootstrap, NodeJS, Express, NodeMailer' }],
      description: `This is simple resume webpage to show your skills, projects, education and contact funtionality using nodemailer. `,
      image: portfolio1Banner,
      demo: '',
      code: '',
      featured: false,
      timeline: 2.2,
    },
    {
      title: 'weather_app',
      year: 2019,
      tech: [{ text: 'Javascript' }],
      description: `This is simple weather app using javascript, Html, Css`,
      image: weatherAppBanner,
      demo: 'https://siddhant-ahire.github.io/weather_app/',
      code: 'https://github.com/siddhant-ahire/weather_app',
      featured: false,
      timeline: 1.8,
    },
    {
      title: 'todo-list',
      year: 2019,
      tech: [{ text: 'Javascript' }],
      description: `This is simple todo list page using javascript, Html, Css`,
      image: todolistBanner,
      demo: 'https://siddhant-ahire.github.io/todo-list/',
      code: 'https://github.com/siddhant-ahire/todo-list',
      featured: false,
      timeline: 1.7,
    },
    {
      title: 'chat-app-javascript',
      year: 2019,
      tech: [{ text: 'Javascript' }],
      description: `This is simple chat room app using javascript, Html, Css`,
      image: chatAppJavascriptBanner,
      demo: 'https://siddhant-ahire.github.io/chat-app-javascript/',
      code: 'https://github.com/siddhant-ahire/chat-app-javascript',
      featured: false,
      timeline: 1.9,
    },
    {
      title: 'Chat-App',
      year: 2020,
      tech: [{ text: 'ReactJS, Firebase' }],
      description: `This is a online Chatting app similar to the discord and telegram webApp. 
            Features: 
            1) login with Facebook or Google 
            2) Create and Edit the room 
            3) Send Messages, Files(photo, video, etc...),voice recordings in any group 
            4) if you are admin of the group you can delete messages.
            I made this app while learning ReactJS.
            `,
      image: chatAppBanner,
      demo: 'https://chat-web-app-6b977.web.app/',
      code: '',
      featured: true,
      timeline: 5.1,
    },
  ],
  footer: {
    icons: [
      {
        link: 'https://facebook.com/siddhant.ahire.7731',
        icon: <FaFacebookSquare />,
      },
      {
        link: 'https://facebook.com/siddhant.ahire',
        icon: <FaInstagram />,
      },
      {
        link: 'https://facebook.com/siddhant.ahire',
        icon: <FaTwitter />,
      },
      {
        link: 'https://linkedin.in/in/siddhant-ahire',
        icon: <FaLinkedin />,
      },
    ],
    text: `Made with ❤️ by Siddhant Ahire`,
  },
}
