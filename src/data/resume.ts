import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import linkedinProfile from "@/imgs/parth-linkedin-profile.jpg";
import profileImg from "@/imgs/profile-page.jpg";
import acmaLogo from "@/imgs/acma-logo.png";
import dropboxLogo from "@/imgs/dropbox-logo.png";
import msuLogo from "@/imgs/msu-logo.png";

export const DATA = {
  name: "Parth Patel",
  initials: "PP",
  url: "https://parthknowsai.com",
  location: "New York City, NY",
  locationLink: "https://www.google.com/maps/place/new+york",
  description:
    "Software Engineer turned AI Engineer helping people understand AI through simple, visual explanations.",
  summary: `
  After completing my double degree in Computer Science and Information Technology, I spent time teaching, tutoring, and working as a TA. ✨ That’s where I discovered two things I love: helping people learn & exploring the world of AI. I loved helping students understand complex ideas 💡 and discovered that AI was the field where my curiosity and creativity truly came alive.
  
  
  I began my career as an intern at Dropbox but quickly realized that large corporate tech roles felt limiting and lacked the innovation I craved. That realization led me to join a smaller startup in the pharmaceutical space, where I found my calling. Today, I’m proud to contribute to the mission at the ACMA, helping shape the future of medical affairs through technology
  `,
  avatarUrl: linkedinProfile.src,
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ParthKnowsAI (Influencer)",
      badges: [],
      location: "Remote",
      title: "Educating the world about AI",
      logoUrl: profileImg.src,
      start: "August 2025",
      end: "Present",
      description:
        "I translate cutting-edge AI research into clear, visual explanations that anyone can follow. No PhD required, no technical background needed. Just real insights about the AI innovations shaping our world.",
    },
    {
      company: "ACMA",
      badges: [],
      location: "Remote",
      title: "Helping raise the bar in the life sciences industry",
      logoUrl: acmaLogo.src,
      start: "January 2019",
      end: "Present",
      description:
        "I started as a junior engineer and gradually progressed to a senior full-stack engineer, eventually moving up to director of full-stack development. I treat ACMA as my own company and have contributed to building a learning management system, as well as numerous ML and AI tools that have helped drive exponential revenue growth year after year.",
    },
    {
      company: "Dropbox",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: dropboxLogo.src,
      start: "April 2018",
      end: "September 2018",
      description:
        "I worked as a software engineering intern at Dropbox, contributing to frontend and backend development. I built user interface components, developed API endpoints, debugged and optimized code, and collaborated with the team to improve application performance. During this time, I gained hands-on experience with Next.js, TypeScript, AWS, and other modern development tools, deepening my understanding of real-world software engineering practices",
    },
    {
      company: "Montclair State University",
      badges: [],
      location: "San Jose, CA",
      title: "Educator, TA, Tutor",
      logoUrl: msuLogo.src,
      start: "May 2016",
      end: "April 2018",
      description:
        "I worked at Montclair State University as an educator, teaching assistant, and tutor, helping students grasp complex machine learning concepts with clarity and creativity. I frequently used analogies, real-world examples, and hands-on exercises to make challenging topics approachable and engaging. My support was in such high demand that a dedicated queue system had to be implemented to manage student appointments, reflecting the impact and trust I built with learners.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: Icons.globe,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: Icons.github,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
