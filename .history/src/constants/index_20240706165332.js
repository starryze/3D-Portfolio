import { SubtractiveBlending } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    yearup,
    uap,
    ss,
    wsitm,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "HTML/CSS/JS",
      icon: web,
    },
    {
      title: "Python",
      icon: mobile,
    },
    {
      title: "Java",
      icon: backend,
    },
    {
      title: "MySQL",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    }
  ];
  
  const experiences = [
    {
      title: "Assistant Teaching Assistant",
      company_name: "Urban Arts",
      icon: uap,
      iconBg: "#383E56",
      date: "Jan 2018 - July 2019",
      points: [
        "Proctored exams for students and reviewed code for quality and function.",
        "Assisted coding educators in developing and conducting classroom lessons in C# and Unity",
        "Managed the monthly budget for staff and student lunches using Excel. ",
      ],
    },
    {
      title: "Computer Technician",
      company_name: "Seamless Shifts",
      icon: ss,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Feb 2021",
      points: [
        "Ensuring .",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "I.T Consultant",
      company_name: "Wall Street iT Management",
      icon: wsitm,
      iconBg: "#383E56",
      date: "Mar 2021 - Mar 2023",
      points: [
        "Highly skilled and detail-oriented Computer Technician with over 2 years of experience in providing technical support, troubleshooting hardware and software issues, and maintaining computer systems.",
        "Proven track record in diagnosing and resolving technical problems, installing and configuring software, and ensuring optimal performance of computer networks.",
        "Adept at managing both on-site and remote support, with strong communication and customer service skills.",
      ],
    },
    {
      title: "Software Development Trainee",
      company_name: "Year Up",
      icon: yearup,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Present",
      points: [
        "Learning different technologies and expanding my hard skills such as developing applications in Python, Java, JS.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };