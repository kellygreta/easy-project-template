import {
  Images,
  ExternalLink,
  Github,
  Eye,
  Filter,
  Grid3x3,
  List,
  Search,
} from "lucide-react";
import { useState } from "react";

const GallerySection = () => {
  // Gallery configuration
  const galleryConfig = {
    badge: "Portfolio",
    badgeIcon: Images,
    title: "Other Projects",
    subtitle:
      "A curated selection of my recent work, from web apps to mobile solutions and design systems.",
    showFilters: true,
    showSearch: false,
    showViewToggle: true,
  };

  // Categories for filters
  const categories = [
    { id: "all", name: "All", count: 8 },
    { id: "web", name: "Web Apps", count: 4 },
    { id: "mobile", name: "Mobile", count: 2 },
    { id: "design", name: "Design", count: 2 },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Task Management App",
      description:
        "A project and task management tool with team collaboration features.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: false,
      status: "Completed",
    },
    {
      id: 2,
      title: "E-learning Platform",
      description:
        "A full online learning platform with integrated payments and user dashboards.",
      category: "web",
      tags: ["React", "Stripe", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: true,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description:
        "A weather forecast mobile app with geolocation and push notifications.",
      category: "mobile",
      tags: ["React Native", "API", "GPS"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: false,
      status: "Completed",
    },
    {
      id: 4,
      title: "Design System",
      description:
        "A fully documented design system with reusable components and guidelines.",
      category: "design",
      tags: ["Figma", "Storybook", "CSS"],
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: false,
      status: "Completed",
    },
    {
      id: 5,
      title: "Crypto Dashboard",
      description:
        "A real-time crypto portfolio tracker with interactive charts.",
      category: "web",
      tags: ["Vue.js", "Chart.js", "API"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: true,
      status: "Completed",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A fitness tracking app with workout logs, progress tracking, and social features.",
      category: "mobile",
      tags: ["React Native", "Firebase", "Health"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "",
      githubUrl: "https://github.com/kellygreta",
      featured: false,
      status: "Beta",
    },
    {
      id: 7,
      title: "Brand Identity",
      description:
        "A complete rebranding project with logo design, style guides, and marketing materials.",
      category: "design",
      tags: ["Illustrator", "Branding", "Print"],
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://brand-showcase-demo.vercel.app",
      githubUrl: null,
      featured: false,
      status: "Completed",
    },
    {
      id: 8,
      title: "Restaurant Website",
      description:
        "A responsive restaurant website with integrated online reservations.",
      category: "web",
      tags: ["Next.js", "Tailwind", "CMS"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: null,
      githubUrl: false,
      featured: false,
      status: "Completed",
    },
  ];

  // State
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Status colors
  const statusColors = {
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-blue-100 text-blue-800",
    Beta: "bg-yellow-100 text-yellow-800",
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <galleryConfig.badgeIcon className="w-4 h-4" />
            <span>{galleryConfig.badge}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            {galleryConfig.title}
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {galleryConfig.subtitle}
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          {/* Category Filters */}
          {galleryConfig.showFilters && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      activeCategory === category.id
                        ? "bg-primary-600 text-black shadow-lg"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                    }
                  `}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Search + View Toggle */}
          <div className="flex items-center gap-3">
            {/* Search */}
            {galleryConfig.showSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>
            )}

            {/* View Toggle */}
            {galleryConfig.showViewToggle && (
              <div className="flex bg-white border border-slate-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`
                    p-2 rounded-md transition-colors duration-200
                    ${
                      viewMode === "grid"
                        ? "bg-primary-600 text-black"
                        : "text-slate-300 hover:bg-slate-50"
                    }
                  `}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`
                    p-2 rounded-md transition-colors duration-200
                    ${
                      viewMode === "list"
                        ? "bg-primary-600 text-black"
                        : "text-slate-300  hover:bg-slate-50"
                    }
                  `}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`
                group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 
                hover:shadow-lg hover:border-slate-300 transition-all duration-300
                ${viewMode === "list" ? "flex items-center gap-6 p-6" : ""}
                ${project.featured ? "ring-2 ring-primary-200" : ""}
              `}
            >
              {/* Project Image */}
              <div
                className={`
                relative overflow-hidden bg-slate-100
                ${
                  viewMode === "grid"
                    ? "aspect-[4/3]"
                    : "w-32 h-24 flex-shrink-0 rounded-xl"
                }
              `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-2 hover:bg-primary-50 transition-colors duration-200"
                      >
                        <Eye className="w-4 h-4 text-slate-700" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-2 hover:bg-primary-50 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-slate-700" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md">
                      Featured
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full shadow-sm ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${viewMode === "grid" ? "p-6" : "flex-grow"}`}>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p
                  className={`text-slate-600 leading-relaxed mb-4 ${
                    viewMode === "list" ? "text-sm" : ""
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No projects found
            </h3>
            <p className="text-slate-600">
              Try adjusting the filters or search term.
            </p>
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-slate-300 hover:border-primary-300 hover:bg-primary-50 text-slate-700 font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-sm">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
