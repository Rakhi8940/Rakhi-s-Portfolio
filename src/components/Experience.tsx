
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "NullClass",
      duration: "May 2025 – Present",
      location: "Remote",
      description: "Working on advanced data analytics projects and building comprehensive dashboards using Power BI and SQL.",
      current: true
    },
    {
      title: "Business Analyst Intern",
      company: "CollegeTips.in",
      duration: "June 2025 – July 2025",
      location: "Remote",
      description: "Analyzed business processes and provided data-driven insights to improve operational efficiency."
    },
    {
      title: "Mirai Summer AI Intern",
      company: "Mirai",
      duration: "July 2025 – August 2025",
      location: "Remote",
      description: "Focused on AI and machine learning projects, developing predictive models and working with neural networks."
    },
    {
      title: "Data Analyst Intern",
      company: "AcmeGrade",
      duration: "March 2024 – May 2024",
      location: "Remote",
      description: "Built data visualization dashboards and performed statistical analysis on large datasets."
    },
    {
      title: "Trainee – IoT & Edge AI",
      company: "UniConverge Technologies",
      duration: "May 2024 – June 2024",
      location: "Hybrid",
      description: "Gained hands-on experience with IoT devices, Edge AI implementation, and sensor integration."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-orange-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building expertise through diverse internships and hands-on industry experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-orange-500"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-800"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Current</span>
                      )}
                    </div>
                    <h4 className="text-orange-500 font-semibold text-lg mb-3">{exp.company}</h4>
                    <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
