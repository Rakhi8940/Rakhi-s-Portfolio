
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 }
      ]
    },
    {
      title: "IoT & Embedded Systems",
      skills: [
        { name: "Node-RED", level: 85 },
        { name: "ThingSpeak", level: 80 },
        { name: "Blynk", level: 80 },
        { name: "Edge AI", level: 75 },
        { name: "Arduino IDE", level: 85 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "SQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "DAX", level: 80 },
        { name: "Excel", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Data Wrangling", level: 85 },
        { name: "Predictive Modeling", level: 80 },
        { name: "Feature Engineering", level: 78 },
        { name: "SciKit Learn", level: 82 },
        { name: "XGBoost", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, and IoT technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-orange-500 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-orange-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-6">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'Google Colab', 'Jupyter Notebook', 'MySQL Workbench', 'Arduino IDE'].map((tool) => (
              <span key={tool} className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 text-gray-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
