
import { Award, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      institution: "IIT Kharagpur",
      title: "Industry 4.0 & Industrial IoT",
      category: "IoT & Industry 4.0"
    },
    {
      institution: "IBM (via Coursera)",
      title: "Data Science Professional Certificate",
      category: "Data Science"
    },
    {
      institution: "IBM (via Coursera)",
      title: "Python for Data Science and AI",
      category: "Programming"
    },
    {
      institution: "IBM (via Coursera)",
      title: "Machine Learning Specialization",
      category: "Machine Learning"
    },
    {
      institution: "IBM (via Coursera)",
      title: "Data Visualization with Python",
      category: "Data Visualization"
    },
    {
      institution: "Infosys Springboard",
      title: "Python Programming",
      category: "Programming"
    },
    {
      institution: "Infosys Springboard",
      title: "Data Analytics",
      category: "Analytics"
    },
    {
      institution: "TCS iON",
      title: "Python Programming",
      category: "Programming"
    },
    {
      institution: "TCS iON",
      title: "Career Skills Development",
      category: "Professional Skills"
    }
  ];

  const achievements = [
    "National-level Poster Presenter",
    "IEEE Peer Workshop Mentor",
    "Research paper accepted at ISCMCTR-2025",
    "Finalist at national hackathons",
    "5★ HackerRank coder",
    "1500+ coding problems solved",
    "Member, Institution of Engineers (India)",
    "Top 5% academic performance"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Continuous learning and recognition in technology and research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-orange-500" size={32} />
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-orange-500 font-medium mb-2">{cert.institution}</p>
                      <span className="inline-block bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                        {cert.category}
                      </span>
                    </div>
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-orange-500" size={32} />
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium">{achievement}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/30">
              <h4 className="text-xl font-bold text-orange-500 mb-3">Coding Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5★</div>
                  <div className="text-sm text-gray-300">HackerRank Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1500+</div>
                  <div className="text-sm text-gray-300">Problems Solved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
