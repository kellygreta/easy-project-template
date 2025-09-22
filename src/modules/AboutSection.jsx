import {
  Zap,
  Package,
  Smartphone,
  Code2,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Vite enables ultra-fast builds and instant hot reload during development.",
    },
    {
      icon: Package,
      title: "Modular Components",
      description:
        "A modular architecture with reusable, well-structured components.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description:
        "Responsive design that looks perfect on any device, big or small.",
    },
    {
      icon: Code2,
      title: "Production Ready",
      description:
        "Configured with Prettier, ESLint, and best practices for clean code.",
    },
  ];

  const highlights = [
    "React 18 with the latest features",
    "Tailwind CSS for rapid styling",
    "Optimized Vite configuration",
    "Reusable modular components",
    "Prettier setup included",
    "Detailed README template",
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "rgb(var(--bg-secondary)/1)",
              color: "rgb(var(--text-secondary)/1)",
            }}
          >
            <Package className="w-4 h-4" />
            <span>Features</span>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "rgb(var(--text-primary)/1)" }}
          >
            Everything You Need to Get Started
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgb(var(--text-secondary)/1)" }}
          >
            A complete template that combines the best modern technologies to
            build scalable and high-performance React applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:shadow-lg transition-colors duration-200"
                style={{
                  backgroundColor: "rgb(var(--color-primary-light)/0.15)",
                  color: "rgb(var(--color-primary)/1)",
                }}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "rgb(var(--text-primary)/1)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgb(var(--text-secondary)/1)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: "rgb(var(--text-primary)/1)" }}
            >
              A Modern Tech Stack
            </h3>

            <p
              className="leading-relaxed"
              style={{ color: "rgb(var(--text-secondary)/1)" }}
            >
              This template is built to provide the best developer experience
              possible, using cutting-edge technologies and optimized
              configurations for projects of any size.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "rgb(34 197 94)" }} // green-500
                  />
                  <span style={{ color: "rgb(var(--text-primary)/1)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                className="inline-flex items-center space-x-2 font-medium group"
                style={{ color: "rgb(var(--color-primary)/1)" }}
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "100%", label: "Responsive Design" },
              { number: "<1s", label: "Hot Reload" },
              { number: "0", label: "Config Hassles" },
              { number: "∞", label: "Possibilities" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card text-center shadow-sm"
                style={{
                  backgroundColor: "rgb(var(--bg-secondary)/1)",
                  color: "rgb(var(--text-primary)/1)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "rgb(var(--color-primary)/1)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgb(var(--text-secondary)/1)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
