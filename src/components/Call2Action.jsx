import { Eye, Rocket, Mail, Sparkles } from "lucide-react";

export default function Call2Action() {
  return (
    //Call to Action Section

    <section className="mb-12">
      <div className="text-center">
        <div className="card inline-flex items-center rounded-3xl p-8 group transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div
              className="flex items-center justify-center w-20 h-20 rounded-3xl transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: "rgb(var(--color-primary-light)/0.15)",
                color: "rgb(var(--color-primary)/1)",
              }}
            >
              <Rocket className="w-10 h-10" />
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
                className="btn-primary font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md "
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>

              <a
                href="https://github.com/kellygreta"
                target="_blank"
                className="font-bold px-6 py-3 btn-secondary rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg  "
              >
                <Eye className="w-4 h-4" />
                <span>View My Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
