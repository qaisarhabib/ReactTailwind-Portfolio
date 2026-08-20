const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Frontend Developer
                </h3>
                <p className="text-blue-600 font-medium">
                  Focus IT Services (Islamabad)
                </p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">
                  Current
                </span>
                <div className="mt-1">March 2025 - Present</div>
              </div>
            </div>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Developed production React/Next.js applications with reusable component architecture, API integrations, state management, and performance optimization.
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Integrated LLM-powered features into web applications, connecting frontend workflows with AI services and backend APIs.
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Improved frontend performance through code splitting, lazy loading, caching, and render optimization.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {["JavaScript", "TypeScript", "ReactJS", "Next.js", "Tailwind CSS", "AI/LLM", "Git", "CI/CD"].map((t, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  MERN Stack Development
                </h3>
                <p className="text-blue-600 font-medium">
                  Single Solution (Lahore)
                </p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                March 2023 - February 2025
              </div>
            </div>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Developed and optimized scalable full-stack web applications using the MERN stack.
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Optimized application architecture and codebase efficiency, resulting in improved application speed, stability, and overall user experience.
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Worked on AI-powered features and LLM-based workflows to enhance application functionality and automation.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {["JavaScript", "TypeScript", "ReactJS", "Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL", "Socket.io", "AI/LLM", "Docker", "Git"].map((t, idx) => (
                <span key={idx} className="bg-purple-50 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Frontend Developer Intern
                </h3>
                <p className="text-blue-600 font-medium">SoftRobo (Lahore)</p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                September 2022 - February 2023
              </div>
            </div>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-3 mt-1"></i>
                Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript.
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-3 mt-1"></i>
                Improved user experience and accessibility across web projects.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {["HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap", "ReactJS", "Git"].map((t, idx) => (
                <span key={idx} className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
