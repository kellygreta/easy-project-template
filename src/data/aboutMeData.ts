import {
  User,
  MapPin,
  Calendar,
  Coffee,
  Code2,
  Palette,
  Zap,
  Github,
  Heart,
  BookOpen,
  Music,
  Camera,
  Gamepad2,
  Download,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";

  // Personal information - easily configurable
 export const personalInfo = {
    name: "Kelly Greta",
    title: "Junior Developer",
    location: "Somewhere in Italy",
    experience: "2+ years",
    avatar:
      "https://avatars.githubusercontent.com/u/91347408?v=4",
    bio: "I am a passionate developer with over 5 years of experience in building modern web applications. I enjoy creating elegant and user-friendly solutions that solve real-world problems.",
    email: "nome.cognome@email.com",
    resumeUrl: "/resume.pdf", // Resume link
    isAvailable: false,
  };

  // Social links
 export const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      platform: "GitHub",
      url: "https:/https://github.com/kellygreta",
      icon: Github,
      color: "hover:text-purple-400",
    },
    {
      platform: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "hover:text-red-500",
    },
  ];

  // Main skills
 export const skills = [
    {
      category: "Frontend",
      icon: Palette,
      technologies: [
        "React",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
      ],
      level: 90,
      color: "bg-blue-500",
    },
    {
      category: "Backend",
      icon: Code2,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
      level: 85,
      color: "bg-green-500",
    },
    {
      category: "Tools & Others",
      icon: Zap,
      technologies: ["Git", "Docker", "AWS", "Figma", "Vite"],
      level: 80,
      color: "bg-purple-500",
    },
  ];

  // Hobbies and interests
 export const interests = [
    {
      name: "Photography",
      icon: Camera,
      description: "Street and landscape photography",
    },
    { name: "Gaming", icon: Gamepad2, description: "Strategy and RPGs" },
    { name: "Reading", icon: BookOpen, description: "Sci-fi and tech books" },
    { name: "Music", icon: Music, description: "Rock and Electronic" },
  ];

  // Timeline/Journey
 export const journey = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      description:
        "Lead developer for enterprise projects with React and Node.js",
      type: "work",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Development of scalable web applications and RESTful APIs",
      type: "work",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "WebAgency",
      description: "Building responsive and user-friendly interfaces",
      type: "work",
    },
    {
      year: "2019",
      title: "Bachelor’s Degree in Computer Science",
      company: "State University",
      description:
        "Specialized in software development and distributed systems",
      type: "education",
    },
  ];

  // Fun facts
 export const funFacts = [
    { number: "500+", label: "Coffees consumed this year", icon: Coffee },
    { number: "50+", label: "GitHub repositories", icon: Code2 },
    { number: "3", label: "Languages spoken", icon: BookOpen },
    { number: "∞", label: "Curiosity for tech", icon: Heart },
  ];