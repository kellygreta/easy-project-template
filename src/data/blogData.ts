export const blogPost = {
  id: 1,
  title: "Building Scalable React Applications: Best Practices for 2024",
  slug: "building-scalable-react-applications-2024",
  excerpt:
    "Discover the latest patterns and techniques for building React applications that can grow with your team and user base. From component architecture to state management strategies.",
  content: `
    <h2>Introduction</h2>
    <p>React has evolved significantly over the years, and so have the best practices for building scalable applications. In this comprehensive guide, we'll explore the latest patterns and techniques that will help you build React applications that can grow with your team and user base.</p>

    <h2>Component Architecture</h2>
    <p>One of the most critical aspects of building scalable React applications is establishing a solid component architecture. Here are the key principles:</p>
    
    <h3>1. Component Composition over Inheritance</h3>
    <p>React favors composition over inheritance, and this principle becomes even more important as your application grows. Instead of creating complex inheritance hierarchies, break down your UI into smaller, reusable components.</p>

    <pre><code>// Good: Composition
function UserCard({ user, actions }) {
  return (
    &lt;Card&gt;
      &lt;UserAvatar user={user} /&gt;
      &lt;UserInfo user={user} /&gt;
      {actions && &lt;CardActions&gt;{actions}&lt;/CardActions&gt;}
    &lt;/Card&gt;
  );
}</code></pre>

    <h3>2. Container and Presentational Components</h3>
    <p>Separate your components into containers (smart components) and presentational components (dumb components). This separation makes your code more maintainable and testable.</p>

    <h2>State Management Strategies</h2>
    <p>As your application grows, managing state becomes increasingly complex. Here are some strategies to keep your state manageable:</p>

    <h3>Local State First</h3>
    <p>Start with local component state using <code>useState</code> and <code>useReducer</code>. Only lift state up when multiple components need to share it.</p>

    <h3>Context for Theme and User Data</h3>
    <p>Use React Context for data that many components need, such as theme preferences or user authentication data.</p>

    <pre><code>const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      &lt;MainLayout /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}</code></pre>

    <h2>Performance Optimization</h2>
    <p>Performance is crucial for scalable applications. Here are key optimization techniques:</p>

    <h3>1. React.memo and useMemo</h3>
    <p>Use React.memo to prevent unnecessary re-renders of functional components, and useMemo for expensive calculations.</p>

    <h3>2. Code Splitting</h3>
    <p>Implement code splitting using React.lazy and Suspense to reduce initial bundle size:</p>

    <pre><code>const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

    <h2>Testing Strategy</h2>
    <p>A comprehensive testing strategy is essential for scalable applications:</p>
    
    <ul>
      <li><strong>Unit Tests</strong>: Test individual components and functions</li>
      <li><strong>Integration Tests</strong>: Test component interactions</li>
      <li><strong>E2E Tests</strong>: Test complete user flows</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Building scalable React applications requires careful planning and adherence to best practices. By following the principles outlined in this guide, you'll be well-equipped to build applications that can grow and evolve with your needs.</p>

    <p>Remember, scalability isn't just about code—it's about creating systems that your team can understand, maintain, and extend over time.</p>
  `,
  author: {
    name: "John Developer",
    avatar: "/api/placeholder/60/60",
    bio: "Senior Frontend Developer with 8+ years of experience building scalable web applications. Passionate about React, performance optimization, and developer experience.",
    social: {
      twitter: "https://twitter.com/johndev",
      linkedin: "https://linkedin.com/in/johndev",
      github: "https://github.com/johndev",
    },
  },
  publishedAt: "2024-03-15",
  updatedAt: "2024-03-16",
  readTime: 8,
  category: "React",
  tags: [
    "React",
    "JavaScript",
    "Frontend",
    "Best Practices",
    "Scalability",
    "Performance",
  ],
  featured: true,
  likes: 156,
  comments: 23,
  views: 2847,
  image: "/api/placeholder/1200/600",
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "component-architecture", title: "Component Architecture", level: 2 },
    {
      id: "composition-over-inheritance",
      title: "Component Composition over Inheritance",
      level: 3,
    },
    {
      id: "container-presentational",
      title: "Container and Presentational Components",
      level: 3,
    },
    { id: "state-management", title: "State Management Strategies", level: 2 },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      level: 2,
    },
    { id: "testing-strategy", title: "Testing Strategy", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 2 },
  ],
};

// Related posts
export const relatedPosts = [
  {
    id: 2,
    title: "Advanced React Hooks Patterns",
    slug: "advanced-react-hooks-patterns",
    excerpt:
      "Learn advanced patterns for React Hooks that will make your components more reusable and maintainable.",
    image: "/api/placeholder/400/250",
    publishedAt: "2024-03-10",
    readTime: 6,
    category: "React",
  },
  {
    id: 3,
    title: "React Performance: Avoiding Common Pitfalls",
    slug: "react-performance-pitfalls",
    excerpt:
      "Common performance issues in React applications and how to avoid them.",
    image: "/api/placeholder/400/250",
    publishedAt: "2024-03-05",
    readTime: 9,
    category: "React",
  },
  {
    id: 4,
    title: "Testing React Components: A Complete Guide",
    slug: "testing-react-components-guide",
    excerpt:
      "Everything you need to know about testing React components effectively.",
    image: "/api/placeholder/400/250",
    publishedAt: "2024-02-28",
    readTime: 12,
    category: "React",
  },
];

// Mock comments
export const comments = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
    },
    content:
      "Excellent article! The section on component composition was particularly helpful. I've been struggling with this in my current project.",
    publishedAt: "2024-03-16T10:30:00Z",
    likes: 12,
    replies: [
      {
        id: 2,
        author: {
          name: "John Developer",
          avatar: "/api/placeholder/40/40",
          isAuthor: true,
        },
        content:
          "Thanks Sarah! Glad it was helpful. Component composition can be tricky at first, but it really pays off in the long run.",
        publishedAt: "2024-03-16T11:45:00Z",
        likes: 8,
      },
    ],
  },
  {
    id: 3,
    author: {
      name: "Mike Chen",
      avatar: "/api/placeholder/40/40",
    },
    content:
      "Great post! Could you write a follow-up about state management libraries like Zustand or Redux Toolkit?",
    publishedAt: "2024-03-16T14:20:00Z",
    likes: 5,
    replies: [],
  },
  {
    id: 4,
    author: {
      name: "Emily Davis",
      avatar: "/api/placeholder/40/40",
    },
    content:
      "The performance optimization section is gold! I implemented React.memo in my app and saw immediate improvements.",
    publishedAt: "2024-03-16T16:15:00Z",
    likes: 9,
    replies: [],
  },
];

// Mock blog data
export const blogPosts = [
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

export const categories = [
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

export const popularTags = [
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