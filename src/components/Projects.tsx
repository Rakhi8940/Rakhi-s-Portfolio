
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Travel Platform",
      description: "Comprehensive travel platform integrating IoT sensors and AI recommendations using HTML, JS, Node-RED, and Arduino for smart travel experiences.",
      technologies: ["HTML", "JavaScript", "Node-RED", "Arduino", "IoT"],
      featured: true,
      github: "https://github.com/Rakhi8940",
      demo: "https://rakhi8940.github.io/Innovative-Travel-Management-Exploration-Platform-With-Realtime-Tracking/"
    },
    {
      title: "TweetPulse Analytics Dashboard",
      description: "Dynamic Twitter analytics dashboard built with Power BI and DAX, featuring real-time KPIs and sentiment analysis.",
      technologies: ["Power BI", "DAX", "Python", "Analytics"],
      github: "https://github.com/Rakhi8940",
      demo: "https://tweetpulse.demo.com"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model using XGBoost for real-time fraud detection with stream processing capabilities.",
      technologies: ["Python", "XGBoost", "Machine Learning", "Stream Processing"],
      github: "https://github.com/Rakhi8940",
      demo: "https://fraud-detection.demo.com"
    },
    {
      title: "Smart Weather App",
      description: "Location-based weather application using OpenWeatherMap API with geolocation features and responsive design.",
      technologies: ["JavaScript", "API Integration", "Geolocation", "Responsive Design"],
      github: "https://github.com/Rakhi8940",
      demo: "https://smart-weather.demo.com"
    },
    {
      title: "IoT Home Automation",
      description: "Complete home automation system using Arduino, MIT App Inventor, and Bluetooth for controlling home appliances.",
      technologies: ["Arduino", "MIT App Inventor", "Bluetooth", "IoT"],
      github: "https://github.com/Rakhi8940",
      demo: "https://home-automation.demo.com"
    },
    {
      title: "Smart Irrigation System",
      description: "Automated irrigation system using Arduino Uno and sensors with intelligent pump control based on soil conditions.",
      technologies: ["Arduino Uno", "Sensors", "Automation", "IoT"],
      github: "https://github.com/Rakhi8940",
      demo: "https://irrigation.demo.com"
    },
    {
      title: "Weather Monitoring System",
      description: "Real-time weather monitoring using ESP32, DHT11 sensor, and ThingSpeak for data visualization and alerts.",
      technologies: ["ESP32", "DHT11", "ThingSpeak", "IoT"],
      github: "https://github.com/Rakhi8940",
      demo: "https://weather-monitor.demo.com"
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model for house price prediction using Python and SciKit Learn with multiple regression techniques.",
      technologies: ["Python", "SciKit Learn", "Machine Learning", "Regression"],
      github: "https://github.com/Rakhi8940",
      demo: "https://house-prices.demo.com"
    },
    {
      title: "Movie Recommendation System",
      description: "Advanced recommendation system using NLP, collaborative filtering, and content-based filtering algorithms.",
      technologies: ["Python", "NLP", "Machine Learning", "Recommendation Systems"],
      github: "https://github.com/Rakhi8940",
      demo: "https://movie-rec.demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Innovative solutions spanning AI, IoT, Data Science, and Web Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-900 text-orange-500 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Rakhi8940" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
