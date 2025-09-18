import { ArrowRight, Code, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-4 lg:py-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                <Code className="w-4 h-4" />
                <span>React Template - name of the project</span>
              </div>

              <h1 className="text-4xl lg:text-5xl  font-bold text-slate-900 leading-tight">
                Title of the
                <span className="text-primary-600"> Project</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Very short description. A simple and modular template to get
                started quickly with React, Vite, and Tailwind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start to develope</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/kellygreta/easy-project-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-2 rounded-lg transition-colors duration-200">
                  See the code
                </button>
              </a>
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-slate-600">
                  Responsive Design
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-slate-600">Tailwind CSS</span>
              </div>
            </div> */}
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
            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-xl"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
