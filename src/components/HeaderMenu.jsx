import { Sparkles, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const HeaderMenu = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Home",
      href: "easy-project-template/",
      current: location.pathname === "/",
    },
    {
      name: "About",
      href: "easy-project-template/about",
      current: location.pathname === "/about",
    },
    {
      name: "Projects",
      href: "easy-project-template/projects",
      current: location.pathname === "/projects",
    },
    {
      name: "Blog",
      href: "easy-project-template/blog",
      current: location.pathname === "/blog",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" glass-effect  backdrop-blur-md sticky top-0 z-40 shadow-sm transition-colors duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold ransition-colors duration-300">
                My React Template
              </h1>
              <p className="text-sm  transition-colors duration-300">
                Modern & Modular
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    item.current
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200
                    ${
                      item.current
                        ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderMenu;
