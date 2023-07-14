// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import me from "./images/Me.JPG"
// Projects Images (add your images to the images directory and import below)
//import Logo from "./images/logo.svg";
import Resume from "./images/KaikanesResume.5.0.docx"
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/light3.jpg";
import HeroDark from "./images/space.png";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "lacnoskillz" 
// "calebcarnett" , "RosalvaMartinez", "hmustain";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =

 "I am a highly motivated and ambitious web developer with a strong desire to learn and grow within the dynamic field. My passion for creating innovative and captivating digital experiences fuels my pursuit of excellence in this ever-evolving industry. My ultimate goal is to establish myself as a full-time web developer while continually expanding my knowledge and skills. With a specialized focus on HTML, CSS, and JavaScript, I possess a solid foundation in front-end development. Additionally, I am well-versed in popular web frameworks such as React and Node.js, allowing me to effectively tackle both client-side and server-side development tasks. In addition to my technical skills, I am a creative problem solver with a keen eye for design. Outside of coding, I enjoy playing the guitar, piano, reading about new technological innovations, skateboarding, playing board games and video games. These hobbies keep me grounded and help me stay focused on my goals. Overall, I am a dedicated and enthusiastic individual who is constantly looking to learn new skills and improve my craft. I am excited about the future of web development and the many possibilities it holds.";


/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="fa6-brands:npm" className="display-4" />,
    name: "Express",
  },
  {
    id: 11,
    skill: <Icon icon="fa-brands:node" className="display-4" />,
    name: "Node",
  },
  {
    id: 12,
    skill: <Icon icon="devicon-plain:mysql" className="display-4" />,
    name: "MySQL",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = Resume;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
//export const filteredProjects = [ "Doggy-Daze", "Kaikanes-weather-dashboard","Kaikanes-tech-blog",];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "Kaikanes-tech-blog",
    image: me,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xayzryzj";
