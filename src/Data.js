import profileImage from './Images/profile.jpg'
import {FaFacebookSquare,FaInstagram,FaTwitter,FaLinkedin, FaNodeJs, FaReact, FaGithub, FaPython} from 'react-icons/fa';
import { DiHeroku, DiJavascript, DiJavascript1, DiMongodb, DiNodejs, DiPhp } from 'react-icons/di';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiAmazonaws, SiDocker, SiJavascript, SiMocha, SiMysql, SiPostgresql } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FcLinux } from 'react-icons/fc';

export const data = {
    navLinks:['Works','Blog','Contact'],
    Introduction:{
        heading:'Hi, I am Siddhant,',
        heading2:'Full Stack Developer',
        paragraph:'In the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
        buttonText:'Download Resume',
        profileImage:profileImage,
        skills:[<AiFillHtml5 color="#e34c26"/>,<IoLogoCss3 color="#264de4"/>,<DiJavascript color="#f0db4f"/>,<FaNodeJs color="#3c873a"/>,<DiPhp/>,<FaPython color="#FFD43B"/>,<FaReact color="#61dafb"/>,<DiMongodb color="#13aa52"/>,<SiMysql color="#4479a1"/>,<SiPostgresql color="#336791"/>,<FaGithub color="#24292e"/>,<SiMocha color="#8d6748"/>,<FcLinux/>,<SiDocker color="#007bff"/>,<SiAmazonaws color="#4d5360"/>,<DiHeroku color='#79589F'/>]
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