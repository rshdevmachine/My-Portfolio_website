import project1 from "../assets/projects/erplogo.png";
import project2 from "../assets/projects/fitnesslogo.png";
import project3 from "../assets/projects/portfolio.png";
import bitmesra from "../assets/BIT.png"
import dps from "../assets/school_logo.jpg"
import { DiPostgresql } from "react-icons/di";

export const HERO_CONTENT = `I am a Computer Science Engineering student at BIT Mesra with a strong foundation in full-stack web development, utilizing React.js, Node.js, Express.js  and databases like MongoDB. I have contributed to developing scalable solutions that improve user experience and system performance. Alongside my technical expertise, I have held leadership roles in student organizations, enhancing my interpersonal and management skills. Driven by a passion for technology and continuous learning, I am committed to contributing to innovative projects that push the boundaries of software development.`;

export const ABOUT_TEXT = `As I advance in my career, my focus remains on expanding my technical expertise while staying up-to-date with the latest trends in software engineering. I actively pursue opportunities that challenge me to apply my problem-solving abilities and technical knowledge to real-world scenarios, ensuring that I continue to grow as a developer. My leadership roles have further developed my communication, adaptability, and decision-making skills, which help me effectively collaborate with teams on complex projects. Looking ahead, I am eager to explore new frontiers in technology, contribute to cutting-edge advancements, and make a meaningful impact through innovative solutions. My commitment to continuous learning and passion for software development drives me to seek out challenging opportunities where I can apply my skills and contribute to meaningful, long-lasting improvements. Ultimately, I aim to create solutions that not only address current needs but also push the boundaries of what technology can achieve in the future.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2026",
    image: bitmesra,
    role: "BTech - Computer Science & Engineering",
    company: "Birla Institute of Technology, Mesra",
    description: `Pursuing a Bachelor of Technology (BTech) in Computer Science Engineering at Birla Institute of Technology, Mesra, with a current GPA of 8.61/10.00 (Absolute). Currently in the pre-final year, I am honing my skills in software development.`,
    technologies: ["Data Structures & Algorithms", "OOPS", "Operating Systems", "DBMS"],
  },
  {
    year: "2020 - 2022",
    image: dps,
    role: "Intermediate (Class XII)",
    company: "Jawahar Vidya Mandir Shyamali School, Ranchi",
    description: `Achieved an impressive 96.60% overall, with Computer Science as a key subject, and diligently studied Physics, Chemistry, and Mathematics, showcasing a robust academic foundation and a strong commitment to academic excellence.`,
    technologies: [],
  },
  {
    year: "2018 - 2020",
    image: dps,
    role: "Matriculate (Class X)",
    company: "Jawahar Vidya Mandir Shyamali School, Ranchi",
    description: `With a strong focus on both Science and Mathematics, I earned an impressive 95.20% in my board exams, showcasing a deep understanding of key subjects and reflecting exceptional academic dedication and achievement.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "College-ERP",
    image: project1,
    description:
      "Developed a comprehensive College ERP System to streamline administrative and academic operations and created modules for student registration, attendance tracking, grade management, fee collection, and faculty management.",
    technologies: ["Tailwind", "HTML", "React", "MongoDB", "Javascript", "Node.js", "Express.js", "JWT"],
  },
  {
    title: "Fitness-tracker",
    image: project2,
    description:
      "Architected a Fitness Tracker Website to help users monitor and track their daily physical activities, workouts and nutrition.Implemented features for goal setting, calorie tracking, and exercise logging with progress visualization through dynamic charts.",
    technologies: ["Tailwind", "React", "MongoDB", "Node.js", "Express.js", "HTML", "Javascript"],
  },
 {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Vite","Javascript"],
  },
];

export const CONTACT = {
  address: "Friends Compound, Ranchi, Jharkhand, India ",
  phoneNo: "+91 8073590461 ",
  email: "arshahmedkhan71@gmail.com",
};
