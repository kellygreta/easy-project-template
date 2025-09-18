import { ArrowRight, Code, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="py-4 lg:py-8  rounded-3xl overflow-hidden"
      style={{
        background: `linear-gradient(
          135deg,
          rgb(var(--bg-primary)/1) 0%,
          rgb(var(--color-primary-light)/1) 100%
        )`,
      }}
    >
      <div className="container-custom ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Badge */}
              <div
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgb(var(--color-primary-light)/1)",
                  color: "rgb(var(--color-primary)/1)",
                }}
              >
                <Code className="w-4 h-4" />
                <span>React Template - name of the project</span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: "rgb(var(--text-primary)/1)" }}
              >
                Title of the{" "}
                <span style={{ color: "rgb(var(--color-primary)/1)" }}>
                  Project
                </span>
              </h1>

              {/* Description */}
              <p
                className="text-xl leading-relaxed"
                style={{ color: "rgb(var(--text-secondary)/1)" }}
              >
                Very short description. A simple and modular template to get
                started quickly with React, Vite, and Tailwind.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start to develop</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/kellygreta/easy-project-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="font-medium px-6 py-2 rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: "rgb(var(--bg-secondary)/1)",
                    borderColor: "rgb(var(--border-color)/1)",
                    color: "rgb(var(--text-primary)/1)",
                  }}
                >
                  See the code
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern development setup"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Optional decorative elements */}
            {/* Example: subtle dark mode-aware shapes */}
            {/* 
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-xl"
              style={{ backgroundColor: "rgb(var(--color-primary-light)/0.3)" }}
            ></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-xl"
              style={{ backgroundColor: "rgb(var(--color-primary-light)/0.2)" }}
            ></div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
