import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  const handleConnectClick = () => {
    window.location.href = 'mailto:rakhi.yadav480009@gmail.com?subject=Let\'s Connect!&body=Hi Rakhi,%0D%0A%0D%0AI came across your portfolio and would love to connect with you.%0D%0A%0D%0ABest regards';
  };

  const handleViewProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-orange-500 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Rakhi
                <span className="text-orange-500 block">Yadav</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Tech Innovator | Aspiring Software Engineer | 5★ HackerRank Coder
              </p>
              <p className="text-lg text-gray-400 max-w-2xl">
                Solving real-world problems through smart, purposeful software. B.Tech IoT student with expertise in Data Science, AI, and full-stack development.
              </p>
            </div>

            <div className="flex items-center gap-4 text-gray-400">
              <MapPin size={20} className="text-orange-500" />
              <span>Gwalior, Madhya Pradesh, India</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleConnectClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Let's Connect
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={handleViewProjectsClick}
                className="border-2 border-gray-600 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-orange-500/10"
              >
                View Projects
              </button>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/Rakhi8940" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/rakhi-yadav8940" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:rakhi.yadav480009@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-orange-500 overflow-hidden shadow-2xl shadow-orange-500/20 animate-scale-in">
                <img 
                  src="https://i.postimg.cc/k4f2vm4n/Rakhi.png" 
                  alt="Rakhi Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-sm">5★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
