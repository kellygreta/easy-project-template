import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Tag,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Eye,
  ChevronRight,
  Star,
  Coffee,
  Code,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  ArrowRight,
  BookmarkPlus,
  ThumbsUp,
  ExternalLink,
  Rss,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Sparkles,
  Play,
  Download,
  Bell,
} from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2024",
    slug: "building-scalable-react-applications-2024",
    excerpt:
      "Discover the latest patterns and techniques for building React applications that can grow with your team and user base. From component architecture to state management strategies.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-03-15",
    readTime: 8,
    category: "React",
    tags: ["React", "JavaScript", "Frontend", "Best Practices"],
    featured: true,
    likes: 156,
    comments: 23,
    views: 2847,
    image: "/api/placeholder/800/400",
  },
  {
    id: 2,
    title: "The Future of Web Development: AI-Powered Coding Tools",
    slug: "future-web-development-ai-tools",
    excerpt:
      "Exploring how AI is transforming the development workflow, from code generation to automated testing. What this means for developers in 2024 and beyond.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-03-10",
    readTime: 12,
    category: "AI",
    tags: ["AI", "Machine Learning", "Development Tools", "Future"],
    featured: false,
    likes: 89,
    comments: 15,
    views: 1923,
    image: "/api/placeholder/800/400",
  },
  {
    id: 3,
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    slug: "mastering-css-grid-advanced-techniques",
    excerpt:
      "Deep dive into CSS Grid's most powerful features. Learn how to create complex, responsive layouts with minimal code and maximum flexibility.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-03-05",
    readTime: 6,
    category: "CSS",
    tags: ["CSS", "Grid", "Layout", "Responsive"],
    featured: false,
    likes: 134,
    comments: 31,
    views: 2156,
    image: "/api/placeholder/800/400",
  },
  {
    id: 4,
    title: "Node.js Performance Optimization: From Slow to Lightning Fast",
    slug: "nodejs-performance-optimization-guide",
    excerpt:
      "Practical strategies to optimize your Node.js applications. Cover caching, database optimization, memory management, and monitoring techniques.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-02-28",
    readTime: 10,
    category: "Backend",
    tags: ["Node.js", "Performance", "Optimization", "Backend"],
    featured: true,
    likes: 201,
    comments: 45,
    views: 3421,
    image: "/api/placeholder/800/400",
  },
  {
    id: 5,
    title: "TypeScript Tips: Advanced Types and Patterns",
    slug: "typescript-advanced-types-patterns",
    excerpt:
      "Unlock the full power of TypeScript with advanced type patterns, utility types, and conditional types. Perfect for developers ready to level up.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-02-20",
    readTime: 9,
    category: "TypeScript",
    tags: ["TypeScript", "Advanced", "Types", "Patterns"],
    featured: false,
    likes: 78,
    comments: 12,
    views: 1654,
    image: "/api/placeholder/800/400",
  },
  {
    id: 6,
    title: "Building a Design System from Scratch",
    slug: "building-design-system-from-scratch",
    excerpt:
      "Step-by-step guide to creating a comprehensive design system. From tokens and components to documentation and adoption strategies.",
    content: "Full article content would be here...",
    author: {
      name: "John Developer",
      avatar: "/api/placeholder/40/40",
      bio: "Senior Frontend Developer",
    },
    publishedAt: "2024-02-15",
    readTime: 15,
    category: "Design",
    tags: ["Design System", "UI/UX", "Components", "Documentation"],
    featured: false,
    likes: 167,
    comments: 28,
    views: 2789,
    image: "/api/placeholder/800/400",
  },
];

const categories = [
  {
    name: "All",
    count: blogPosts.length,
    color: "from-slate-500 to-slate-600",
  },
  { name: "React", count: 3, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", count: 4, color: "from-yellow-500 to-yellow-600" },
  { name: "CSS", count: 2, color: "from-pink-500 to-pink-600" },
  { name: "Backend", count: 2, color: "from-green-500 to-green-600" },
  { name: "AI", count: 1, color: "from-purple-500 to-purple-600" },
  { name: "TypeScript", count: 2, color: "from-blue-600 to-blue-700" },
  { name: "Design", count: 1, color: "from-orange-500 to-orange-600" },
];

const popularTags = [
  "React",
  "JavaScript",
  "CSS",
  "Node.js",
  "TypeScript",
  "AI",
  "Performance",
  "Best Practices",
  "Tutorial",
  "Frontend",
  "Backend",
  "Design System",
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });

    switch (sortBy) {
      case "popular":
        return filtered.sort((a, b) => b.views - a.views);
      case "liked":
        return filtered.sort((a, b) => b.likes - a.likes);
      case "oldest":
        return filtered.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
      default:
        return filtered.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
    }
  }, [searchTerm, selectedCategory, selectedTag, sortBy]);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedTag("");
    setSortBy("latest");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
              <BookOpen className="w-4 h-4" />
              <span>Developer Blog</span>
              <Sparkles className="w-4 h-4 ml-2 text-purple-500" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              Code, Create, Share
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on modern web development. From
              beginner tips to advanced techniques, join me on this coding
              journey.
            </p>

            {/* Blog Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  {blogPosts.length}+
                </div>
                <div className="text-secondary text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-secondary text-sm">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  {blogPosts.reduce((sum, post) => sum + post.comments, 0)}+
                </div>
                <div className="text-secondary text-sm">Comments</div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card max-w-md mx-auto bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 border-2 border-primary-100 dark:border-primary-800 shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h3 className="font-bold text-primary">Never Miss an Update</h3>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-secondary mt-2 text-center">
                Join 10,000+ developers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl">
                    <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Posts
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article
                      key={post.id}
                      className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden hover:-translate-y-2 transition-all duration-500 group border-2 border-primary-100 dark:border-primary-800 shadow-xl hover:shadow-2xl"
                    >
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                            <Star className="w-3 h-3" />
                            <span>Featured</span>
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                              categories.find((c) => c.name === post.category)
                                ?.color || "from-slate-500 to-slate-600"
                            } shadow-lg`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-secondary mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-secondary mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-secondary">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4 text-red-500" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4 text-blue-500" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4 text-green-500" />
                              <span>{post.views}</span>
                            </div>
                          </div>

                          <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 group/btn">
                            <span>Read More</span>
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Search and Filters */}
            <section className="mb-8">
              <div className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  {/* Search */}
                  <div className="flex-grow relative">
                    <Search className="w-5 h-5 text-secondary absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    />
                  </div>

                  {/* Sort */}
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Filter className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="liked">Most Liked</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  {(searchTerm ||
                    selectedCategory !== "All" ||
                    selectedTag ||
                    sortBy !== "latest") && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-3 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 dark:bg-primary-900/20 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                        selectedCategory === category.name
                          ? `bg-gradient-to-r ${category.color} text-white transform scale-105`
                          : "bg-white dark:bg-slate-800 text-secondary hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-600"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Active Filters Display */}
                {(selectedTag || searchTerm || selectedCategory !== "All") && (
                  <div className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-700">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-primary-600 dark:text-primary-400 font-medium flex items-center space-x-1">
                        <Zap className="w-4 h-4" />
                        <span>Active filters:</span>
                      </span>
                      {selectedCategory !== "All" && (
                        <span className="bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full font-medium">
                          Category: {selectedCategory}
                        </span>
                      )}
                      {selectedTag && (
                        <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full font-medium">
                          Tag: {selectedTag}
                        </span>
                      )}
                      {searchTerm && (
                        <span className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium">
                          Search: "{searchTerm}"
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  All Posts ({filteredPosts.length})
                </h2>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid gap-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden hover:-translate-y-2 transition-all duration-500 group border-2 border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 shadow-lg hover:shadow-2xl"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <div className="absolute top-3 left-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                                categories.find((c) => c.name === post.category)
                                  ?.color || "from-slate-500 to-slate-600"
                              } shadow-lg backdrop-blur-sm`}
                            >
                              {post.category}
                            </span>
                          </div>
                          {post.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                                <Star className="w-3 h-3" />
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-4 text-sm text-secondary mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} min read</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-secondary mb-4 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-secondary px-3 py-1 rounded-full hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200 border border-slate-200 dark:border-slate-600"
                              >
                                #{tag}
                              </button>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-secondary px-2 py-1">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-secondary">
                              <div className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.comments}</span>
                              </div>
                              <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors duration-200">
                                <BookmarkPlus className="w-4 h-4" />
                                <span>Save</span>
                              </button>
                            </div>

                            <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                              <span>Read More</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full mb-6">
                    <BookOpen className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    No posts found
                  </h3>
                  <p className="text-secondary mb-6 max-w-md mx-auto">
                    Try adjusting your search terms or filters to discover more
                    content
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium flex items-center space-x-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span>Load More Posts</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Author Card */}
            <div className="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-700 shadow-xl  top-24">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src="/api/placeholder/80/80"
                    alt="Author"
                    className="w-20 h-20 rounded-full mx-auto ring-4 ring-white dark:ring-slate-800 shadow-lg"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>

                <h3 className="font-bold text-primary mb-2">John Developer</h3>
                <p className="text-secondary text-sm mb-4 leading-relaxed">
                  Senior Frontend Developer sharing insights about modern web
                  development, React, and JavaScript
                </p>

                <div className="flex justify-center space-x-3 mb-4">
                  <a
                    href="#"
                    className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4 text-blue-500" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 text-green-500" />
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Follow for Updates
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="card bg-white dark:bg-slate-800 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-primary">Recent Posts</h3>
              </div>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex space-x-3 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 p-3 rounded-lg transition-all duration-200"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium text-primary group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-secondary mt-2">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <span>{post.readTime} min</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="card bg-white dark:bg-slate-800 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                  <Tag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-primary">Popular Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? "" : tag)
                    }
                    className={`text-sm px-3 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
                      selectedTag === tag
                        ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-secondary hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-4 shadow-md">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-primary mb-3">
                  Stay in the Loop
                </h3>
                <p className="text-secondary text-sm mb-4 leading-relaxed">
                  Get weekly updates on new posts, tutorials, and development
                  insights
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Subscribe Now
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-1 mt-3">
                  <span className="text-xs text-secondary">
                    10,000+ subscribers
                  </span>
                  <span className="text-xs">•</span>
                  <span className="text-xs text-secondary">No spam</span>
                </div>
              </div>
            </div>

            {/* Blog Statistics */}
            <div className="card bg-white dark:bg-slate-800 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-primary">Blog Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Total Posts</span>
                  <span className="font-bold text-primary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {blogPosts.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Total Views</span>
                  <span className="font-bold text-primary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {blogPosts
                      .reduce((sum, post) => sum + post.views, 0)
                      .toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Total Likes</span>
                  <span className="font-bold text-primary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {blogPosts.reduce((sum, post) => sum + post.likes, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Categories</span>
                  <span className="font-bold text-primary bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {categories.length - 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Archive */}
            <div className="card bg-white dark:bg-slate-800 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg">
                  <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="font-bold text-primary">Archive</h3>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left text-secondary hover:text-primary-600 transition-colors duration-200 text-sm flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <span>March 2024</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                    4
                  </span>
                </button>
                <button className="w-full text-left text-secondary hover:text-primary-600 transition-colors duration-200 text-sm flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <span>February 2024</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                    2
                  </span>
                </button>
                <button className="w-full text-left text-secondary hover:text-primary-600 transition-colors duration-200 text-sm flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <span>January 2024</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                    3
                  </span>
                </button>
                <button className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center space-x-1 p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200">
                  <span>View All Archives</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="mt-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-700/50 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-8 group hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-3xl group-hover:from-primary-100 group-hover:to-purple-100 dark:group-hover:from-primary-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300 shadow-lg">
                  <Rocket className="w-10 h-10 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Ready to Start Your Next Project?
                  </h3>
                  <p className="text-secondary text-lg mb-4 max-w-md">
                    Let's collaborate and bring your ideas to life! I'm always
                    excited to work on challenging projects and share knowledge.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-2 rounded-full font-medium">
                      ✓ Quick Response
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-full font-medium">
                      ✓ Quality Focused
                    </span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-2 rounded-full font-medium">
                      ✓ Long-term Support
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <a
                    href="mailto:hello@example.com"
                    className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                    <Sparkles className="w-4 h-4" />
                  </a>

                  <a
                    href="#portfolio"
                    className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary-600 dark:text-primary-400 font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg border-2 border-slate-200 dark:border-slate-600"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View My Work</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
