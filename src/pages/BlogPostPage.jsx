import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Eye,
  ChevronLeft,
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
  Mail,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Sparkles,
  Play,
  Download,
  Bell,
  Copy,
  Check,
  Quote,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";

import { blogPost, relatedPosts, comments } from "../data/blogData";

const BlogPostPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatRelativeDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogPost.title);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
    setShowShareMenu(false);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
    setShowShareMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header Navigation */}
      <div className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <a
              href="/blog"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </a>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTOC(!showTOC)}
                className="lg:hidden p-2 text-secondary hover:text-primary-600 transition-colors duration-200"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="hidden sm:flex items-center space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isLiked
                      ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                      : "bg-slate-100 dark:bg-slate-800 text-secondary hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span className="text-sm">
                    {blogPost.likes + (isLiked ? 1 : 0)}
                  </span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2 bg-slate-100 dark:bg-slate-800 text-secondary hover:text-primary-600 rounded-lg transition-all duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50">
                      <button
                        onClick={() => handleShare("twitter")}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        <Twitter className="w-4 h-4 text-blue-500" />
                        <span>Share on Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span>Share on LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        <Facebook className="w-4 h-4 text-blue-700" />
                        <span>Share on Facebook</span>
                      </button>
                      <hr className="my-2 border-slate-200 dark:border-slate-600" />
                      <button
                        onClick={copyUrl}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                      >
                        {copiedUrl ? (
                          <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy URL</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              {/* Category and Featured Badge */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {blogPost.category}
                </span>
                {blogPost.featured && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-secondary leading-relaxed mb-6">
                {blogPost.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-secondary mb-6">
                <div className="flex items-center space-x-2">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-8 h-8 rounded-full ring-2 ring-primary-200 dark:ring-primary-700"
                  />
                  <span className="font-medium text-primary">
                    {blogPost.author.name}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blogPost.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{blogPost.views.toLocaleString()} views</span>
                </div>
                {blogPost.updatedAt !== blogPost.publishedAt && (
                  <div className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    Updated {formatDate(blogPost.updatedAt)}
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-secondary px-3 py-1 rounded-full text-sm hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200 cursor-pointer border border-slate-200 dark:border-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </header>

            {/* Article Content */}
            <article className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>

            {/* Article Footer Actions */}
            <div className="card mt-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-2 border-slate-200 dark:border-slate-600">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isLiked
                        ? "bg-red-500 text-white shadow-lg transform scale-105"
                        : "bg-white dark:bg-slate-800 text-secondary hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                    />
                    <span>{blogPost.likes + (isLiked ? 1 : 0)} Likes</span>
                  </button>

                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isBookmarked
                        ? "bg-blue-500 text-white shadow-lg transform scale-105"
                        : "bg-white dark:bg-slate-800 text-secondary hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <BookmarkPlus
                      className={`w-5 h-5 ${
                        isBookmarked ? "fill-current" : ""
                      }`}
                    />
                    <span>Save</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-secondary mr-2">
                    Share this article:
                  </span>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={copyUrl}
                    className="p-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    {copiedUrl ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="card mt-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-700 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="w-24 h-24 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg mx-auto md:mx-0"
                />
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-secondary mb-4 leading-relaxed">
                    {blogPost.author.bio}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-3">
                    <a
                      href={blogPost.author.social.twitter}
                      className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Twitter className="w-5 h-5 text-blue-500" />
                    </a>
                    <a
                      href={blogPost.author.social.linkedin}
                      className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href={blogPost.author.social.github}
                      className="p-2 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Code className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Follow Author
                  </button>
                  <a
                    href="mailto:author@example.com"
                    className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg border-2 border-slate-200 dark:border-slate-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <div className="card bg-white dark:bg-slate-800 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6" />
                    <span>Comments ({comments.length})</span>
                  </h3>
                  <button
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Add Comment
                  </button>
                </div>

                {/* Comment Form */}
                {showCommentForm && (
                  <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-600">
                    <h4 className="font-bold text-primary mb-4">
                      Leave a Comment
                    </h4>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                        />
                      </div>
                      <textarea
                        rows="4"
                        placeholder="Your thoughts on this article..."
                        className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                      />
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => setShowCommentForm(false)}
                          className="px-6 py-2 text-secondary hover:text-primary-600 transition-colors duration-200"
                        >
                          Cancel
                        </button>
                        <button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-b border-slate-200 dark:border-slate-700 pb-6 last:border-b-0"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={comment.author.avatar}
                          alt={comment.author.name}
                          className="w-12 h-12 rounded-full ring-2 ring-slate-200 dark:ring-slate-700"
                        />
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-bold text-primary">
                              {comment.author.name}
                            </h4>
                            {comment.author.isAuthor && (
                              <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                Author
                              </span>
                            )}
                            <span className="text-secondary text-sm">
                              {formatRelativeDate(comment.publishedAt)}
                            </span>
                          </div>
                          <p className="text-secondary mb-3 leading-relaxed">
                            {comment.content}
                          </p>
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-secondary hover:text-red-500 transition-colors duration-200">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{comment.likes}</span>
                            </button>
                            <button className="text-secondary hover:text-primary-600 transition-colors duration-200 text-sm">
                              Reply
                            </button>
                          </div>

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                              {comment.replies.map((reply) => (
                                <div
                                  key={reply.id}
                                  className="flex space-x-3 mt-4"
                                >
                                  <img
                                    src={reply.author.avatar}
                                    alt={reply.author.name}
                                    className="w-10 h-10 rounded-full ring-2 ring-slate-200 dark:ring-slate-700"
                                  />
                                  <div className="flex-grow">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h5 className="font-medium text-primary">
                                        {reply.author.name}
                                      </h5>
                                      {reply.author.isAuthor && (
                                        <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                          Author
                                        </span>
                                      )}
                                      <span className="text-secondary text-sm">
                                        {formatRelativeDate(reply.publishedAt)}
                                      </span>
                                    </div>
                                    <p className="text-secondary mb-2 leading-relaxed">
                                      {reply.content}
                                    </p>
                                    <button className="flex items-center space-x-1 text-secondary hover:text-red-500 transition-colors duration-200">
                                      <Heart className="w-3 h-3" />
                                      <span className="text-sm">
                                        {reply.likes}
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center space-x-2">
                <BookOpen className="w-6 h-6" />
                <span>Related Articles</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden hover:-translate-y-2 transition-all duration-500 group border-2 border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 shadow-lg hover:shadow-2xl"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4">
                      <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <h4 className="font-bold text-primary mt-2 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-secondary text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-secondary">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile TOC */}
            {showTOC && (
              <div
                className="lg:hidden fixed inset-0 bg-black/50 z-50"
                onClick={() => setShowTOC(false)}
              >
                <div
                  className="bg-white dark:bg-slate-900 w-80 h-full p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-primary">
                      Table of Contents
                    </h3>
                    <button onClick={() => setShowTOC(false)}>
                      <X className="w-5 h-5 text-secondary" />
                    </button>
                  </div>
                  <nav className="space-y-2">
                    {blogPost.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                          item.level === 3 ? "pl-6 text-sm" : ""
                        } ${
                          activeSection === item.id
                            ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                            : "text-secondary hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
                        }`}
                        onClick={() => setShowTOC(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}

            {/* Desktop Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Table of Contents */}
              <div className="card bg-white dark:bg-slate-800 shadow-lg hidden lg:block">
                <div className="flex items-center space-x-2 mb-4">
                  <Menu className="w-5 h-5 text-primary-600" />
                  <h3 className="font-bold text-primary">Table of Contents</h3>
                </div>
                <nav className="space-y-1">
                  {blogPost.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                        item.level === 3 ? "pl-6 text-sm" : ""
                      } ${
                        activeSection === item.id
                          ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                          : "text-secondary hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Reading Progress */}
              {/* Reading Progress */}
              <div className="card bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-2 border-primary-200 dark:border-primary-700 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <h3 className="font-bold text-primary">Reading Progress</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary">Progress</span>
                    <span className="font-medium text-primary">65%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-secondary">
                    <span>~5 min left</span>
                    <span>{blogPost.readTime} min total</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-4">
                    <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    Enjoyed this article?
                  </h3>
                  <p className="text-secondary text-sm mb-4">
                    Subscribe to get notified about new posts and tutorials
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border-2 border-blue-200 dark:border-blue-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-secondary mt-2">
                    No spam, unsubscribe anytime
                  </p>
                </div>
              </div>

              {/* Share Widget */}
              <div className="card bg-white dark:bg-slate-800 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Share2 className="w-5 h-5 text-primary-600" />
                  <h3 className="font-bold text-primary">Share This Article</h3>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-full flex items-center space-x-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="font-medium">Share on Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-full flex items-center space-x-3 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="font-medium">Share on LinkedIn</span>
                  </button>
                  <button
                    onClick={copyUrl}
                    className="w-full flex items-center space-x-3 p-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {copiedUrl ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {copiedUrl ? "Copied!" : "Copy Link"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="card bg-white dark:bg-slate-800 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-5 h-5 text-primary-600" />
                  <h3 className="font-bold text-primary">Related Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <a
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="text-sm px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-secondary hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:text-primary-700 dark:hover:text-primary-300 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card bg-white dark:bg-slate-800 shadow-lg">
                <h3 className="font-bold text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={scrollToTop}
                    className="w-full flex items-center space-x-2 p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-secondary hover:text-primary-600 rounded-lg transition-all duration-200"
                  >
                    <ArrowUp className="w-4 h-4" />
                    <span>Back to Top</span>
                  </button>
                  <a
                    href="/blog"
                    className="w-full flex items-center space-x-2 p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-secondary hover:text-primary-600 rounded-lg transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>All Articles</span>
                  </a>
                  <button className="w-full flex items-center space-x-2 p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-secondary hover:text-primary-600 rounded-lg transition-all duration-200">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to Previous/Next Posts */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-l-4 border-primary-500 group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center space-x-3 mb-2">
                <ChevronLeft className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-secondary">
                  Previous Article
                </span>
              </div>
              <h4 className="font-bold text-primary group-hover:text-primary-600 transition-colors duration-200">
                Advanced React Hooks Patterns You Should Know
              </h4>
              <p className="text-secondary text-sm mt-2">
                Learn advanced patterns for React Hooks that will make your
                components more reusable...
              </p>
            </div>

            <div className="card bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-r-4 border-purple-500 group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center justify-end space-x-3 mb-2">
                <span className="text-sm font-medium text-secondary">
                  Next Article
                </span>
                <ChevronRight className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-bold text-primary group-hover:text-primary-600 transition-colors duration-200 text-right">
                React Performance: Avoiding Common Pitfalls
              </h4>
              <p className="text-secondary text-sm mt-2 text-right">
                Common performance issues in React applications and how to avoid
                them...
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-700/50 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-8 group hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-3xl group-hover:from-primary-100 group-hover:to-purple-100 dark:group-hover:from-primary-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300 shadow-lg">
                  <Heart className="w-10 h-10 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Did you find this helpful?
                  </h3>
                  <p className="text-secondary text-lg mb-4 max-w-md">
                    If you enjoyed this article, consider sharing it with your
                    network or leaving a comment below. Your feedback helps me
                    create better content!
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-2 rounded-full font-medium">
                      ✓ Practical Examples
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-full font-medium">
                      ✓ Best Practices
                    </span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-2 rounded-full font-medium">
                      ✓ Up-to-date Info
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => setShowCommentForm(true)}
                    className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Leave Feedback</span>
                    <Sparkles className="w-4 h-4" />
                  </button>

                  <a
                    href="/blog"
                    className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary-600 dark:text-primary-400 font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg border-2 border-slate-200 dark:border-slate-600"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>More Articles</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Action Button - Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BlogPostPage;
