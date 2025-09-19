import {
  User,
  MapPin,
  Calendar,
  Coffee,
  Code2,
  Palette,
  Zap,
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

import ASCIIText from "../components/ASCIIText";

const AboutMeSection = () => {
  // Personal information - easily configurable
  const personalInfo = {
    name: "Mario Rossi",
    title: "Full Stack Developer",
    location: "Milan, Italy",
    experience: "5+ years",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "I am a passionate developer with over 5 years of experience in building modern web applications. I enjoy creating elegant and user-friendly solutions that solve real-world problems.",
    email: "nome.cognome@email.com",
    resumeUrl: "/resume.pdf", // Resume link
    isAvailable: false,
  };

  // Social links
  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    // {
    //   platform: "GitHub",
    //   url: "https:/GitHub.com",
    //   icon: GitHub,
    //   color: "hover:text-blue-400",
    // },
    {
      platform: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "hover:text-red-500",
    },
  ];

  // Main skills
  const skills = [
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
  const interests = [
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
  const journey = [
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
  const funFacts = [
    { number: "500+", label: "Coffees consumed this year", icon: Coffee },
    { number: "50+", label: "GitHub repositories", icon: Code2 },
    { number: "3", label: "Languages spoken", icon: BookOpen },
    { number: "∞", label: "Curiosity for tech", icon: Heart },
  ];

  return (
    <section className="py-16 lg:py-24 ">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Learn more about me, my skills, and what I’m passionate about
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              {/* Avatar */}
              <div className="text-center mb-6">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-primary-100 dark:ring-primary-800"
                />
                <h3 className="text-xl font-bold text-primary mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {personalInfo.title}
                </p>

                {/* Status */}
                <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>
                    {personalInfo.isAvailable
                      ? "Available for projects"
                      : "Not available"}
                  </span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-secondary">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span>{personalInfo.experience} experience</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-slate-100 dark:bg-slate-700 rounded-lg transition-all duration-200 ${social.color} hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">My Story</h4>
              <p className="text-secondary leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">
                Technical Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-white dark:bg-slate-700 rounded-lg">
                        <skill.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold text-primary">
                          {skill.category}
                        </h5>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex-grow bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-secondary font-medium">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-6">
                Interests & Hobbies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                      <interest.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h6 className="font-semibold text-primary">
                        {interest.name}
                      </h6>
                      <p className="text-sm text-secondary">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-primary text-center mb-12">
            My Journey
          </h4>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="card">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === "work"
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                              : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                          }`}
                        >
                          {item.type === "work" ? "Work" : "Education"}
                        </span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {item.year}
                        </span>
                      </div>
                      <h5 className="font-bold text-primary mb-1">
                        {item.title}
                      </h5>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900 relative z-10"></div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Funny ASCII Text art
        <div className="text-center">
          <ASCIIText
            text="the more you know!"
            enableWaves={false}
            asciiFontSize={4}
          />
        </div> */}

        {/* Fun Facts */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-primary mb-8">Some Numbers</h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="card text-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
                  <fact.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {fact.number}
                </div>
                <div className="text-sm text-secondary">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 group hover:border-primary-200 dark:hover:border-primary-700 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-2xl group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-primary mb-2">
                  Do you have a project in mind?
                </h4>
                <p className="text-secondary">
                  Let’s talk! I’m always open to new challenges and interesting
                  collaborations.
                </p>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Let’s Collaborate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
