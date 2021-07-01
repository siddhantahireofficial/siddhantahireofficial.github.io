import profileImage from './Images/profile.jpg'
import {FaFacebookSquare,FaInstagram,FaTwitter,FaLinkedin, FaNodeJs, FaReact, FaGithub, FaPython} from 'react-icons/fa';
import { DiHeroku, DiJavascript, DiJavascript1, DiMongodb, DiNodejs, DiPhp } from 'react-icons/di';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiAmazonaws, SiDocker, SiFirebase, SiJavascript, SiMocha, SiMysql, SiPostgresql } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FcLinux } from 'react-icons/fc';

export const data = {
    navLinks:['Works','Blog','Contact'],
    Introduction:{
        heading:'Hi, I am Siddhant,',
        heading2:['Full Stack Developer','MERN Stack Developer'],
        paragraph:'A web designer and developer from Mumbai in the India. I create websites to help people go further online ',
        buttonText:'Download Resume',
        profileImage:profileImage,
        skills:[{
            text:"HTML",
            icon: <AiFillHtml5 color="#e34c26"/>
        },
        {
            text:"CSS",
            icon: <IoLogoCss3 text="CSS" color="#264de4"/>
        },
        {
            text:"JavaScript",
            icon: <DiJavascript color="#f0db4f"/>
        },
        {
            text:"NodeJS",
            icon: <FaNodeJs color="#3c873a"/>
        },
        {
            text:"Python",
            icon: <FaPython color="#FFD43B"/>
        },
        {
            text:"ReactJS",
            icon: <FaReact color="#61dafb"/>
        },
        {
            text:"MongoDB",
            icon: <DiMongodb color="#13aa52"/>
        },
        {
            text:"MySQL",
            icon: <SiMysql color="#4479a1"/>
        },
        {
            text:"PostgreSQL",
            icon: <SiPostgresql color="#336791"/>
        },
        {
            text:"GitHub",
            icon: <FaGithub color="#24292e"/>
        },
        {
            text:"Mocha",
            icon: <SiMocha color="#8d6748"/>
        },
        {
            text:"Linux",
            icon: <FcLinux />
        },
        {
            text:"Docker",
            icon: <SiDocker color="#007bff"/>
        },
        {
            text:"AWS",
            icon: <SiAmazonaws color="#4d5360"/>
        },
        {
            text:"Heroku",
            icon: <DiHeroku color='#79589F'/>
        },
        {
            text:"Firebase",
            icon: <SiFirebase color="#FFCB2B" />
        },
        ]
    },
    Posts:[
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'NodeJs, React', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'Mongo, Nodejs', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'NodeJs, React', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'NodeJs, React', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'NodeJs, React', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {name:'Making a design System from scratch',date:'12 Feb 2020', tech:'NodeJs, React', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
    ],
    Works:[
        {title:'Designing Dashboards', year:2020, tech:'ReactJS', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',image:profileImage},
        {title:'Designing Dashboards', year:2020, tech:'ReactJS', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',image:profileImage},
        {title:'Designing Dashboards', year:2020, tech:'ReactJS', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',image:profileImage},
        {title:'Designing Dashboards', year:2020, tech:'ReactJS', description:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',image:profileImage}
    ],
    footer:{
        icons:[<FaFacebookSquare/>, <FaInstagram/>, <FaTwitter/>, <FaLinkedin/>],
        text:`Made with ❤️ by Siddhant Ahire`
    }
}