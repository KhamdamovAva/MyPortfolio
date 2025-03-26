import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Frontend Developer with strong skills in HTML, CSS/SASS, JavaScript, and React.js. I have experience working with Figma, GitHub, Tailwind, and Bootstrap. I am always learning new things and improving my skills by exploring the latest web technologies and best practices. I enjoy solving complex problems and applying my knowledge to real projects that make a difference. My goal is to grow as a professional and contribute to meaningful projects while constantly improving.`;

export const ABOUT_TEXT = `I am a goal-oriented and versatile Frontend Developer passionate about creating efficient and user-friendly web applications. I have experience working with various technologies, including Vite, React, Next.js, and MySQL. My journey in web development began with a deep curiosity about how things work, which has evolved into a constant drive to learn and adapt to new challenges. I enjoy collaborating with teams, solving complex problems, and building high-quality solutions. I love staying active, exploring new technologies, and contributing to meaningful projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    course: "CodeClass iT",
    description: `Studied and developed responsive web applications using HTML, CSS/SASS, and JavaScript. Created user-friendly interfaces with Bootstrap and optimized styles for better performance. Worked in a team with other students, collaboratively implementing projects and improving user experience. Edited and enhanced visual assets using Photoshop.`,
    technologies: ["HTML", "CSS/SASS", "JavaScript", "Bootstrap", "Photoshop"]

  },
  {
    year: "2024 - 2025",
    course: "Astrum iT Academy",
    description: `Developed and designed user interfaces for web applications using React.js and Next.js. Collaborated closely with backend developers to integrate frontend components with APIs via Axios. Used Tailwind CSS and Figma to create modern and responsive designs. Optimized frontend performance with Vite, improved SEO, and managed code versions using Git/GitHub.`,
    technologies: ["React.js", "Next.js", "Git/GitHub", "Vite", "Tailwind CSS", "Figma", "SEO", "API/Axios"]

  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
