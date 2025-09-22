import {
  Settings,
  Layers,
  Zap,
  Shield,
  Users,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";

const ServicesSection = () => {
  // Configurable section data
  const sectionConfig = {
    badge: "Services",
    badgeIcon: Settings,
    title: "Our Services & Solutions",
    subtitle:
      "We provide a full range of services to turn your ideas into high-performing and innovative digital products.",
    ctaText: "Explore All Services",
    showCta: true,
  };

  // Services cards
  const services = [
    {
      id: 1,
      icon: Layers,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies.",
      features: ["React & Vue.js", "API Integration", "Mobile-First Design"],
      color: "blue",
      featured: false,
    },
    {
      id: 2,
      icon: Zap,
      title: "Optimization",
      description:
        "Boost your app’s speed, scalability, and overall performance.",
      features: ["Performance Audits", "Code Optimization", "SEO Enhancements"],
      color: "yellow",
      featured: true,
    },
    {
      id: 3,
      icon: Shield,
      title: "Security",
      description:
        "We apply best-in-class practices to safeguard your applications and data.",
      features: ["Security Audits", "Data Protection", "SSL & Encryption"],
      color: "green",
      featured: false,
    },
    {
      id: 4,
      icon: Users,
      title: "Consulting",
      description:
        "Technical and strategic support to guide your technology decisions.",
      features: ["Tech Strategy", "Team Training", "Code Reviews"],
      color: "purple",
      featured: false,
    },
  ];

  // Quick stats
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Uptime Guaranteed" },
    { number: "24/7", label: "Available Support" },
  ];

  // Color config
  const colorConfig = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-200",
    },
    yellow: {
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      border: "border-yellow-200",
    },
    green: {
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-200",
    },
    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      border: "border-purple-200",
    },
  };

  return (
    <section className="py-8 ">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "rgb(var(--bg-secondary)/1)",
              color: "rgb(var(--text-secondary)/1)",
            }}
          >
            <sectionConfig.badgeIcon className="w-4 h-4" />
            <span>{sectionConfig.badge}</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold  mb-6 tracking-tight">
            {sectionConfig.title}
          </h2>

          <p className="text-lg  max-w-2xl mx-auto leading-relaxed">
            {sectionConfig.subtitle}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl card shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm ">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => {
            const colors = colorConfig[service.color];

            return (
              <div
                key={service.id}
                className={`
                  relative  rounded-2xl p-8 card transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${
                    service.featured
                      ? "border-primary-200 shadow-lg scale-105"
                      : ""
                  }
                `}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className=" backdrop-blur-md  text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md border">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${colors.iconBg} rounded-xl mb-6`}
                >
                  <service.icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold  mb-3">{service.title}</h3>

                <p className=" text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm ">
                      <div
                        className={`w-1.5 h-1.5 ${colors.iconBg} rounded-full mr-2`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`
                  w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    service.featured
                      ? " border "
                      : `border-2 ${colors.border}  hover:${colors.bg}`
                  }
                `}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
