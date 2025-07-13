import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Let's collaborate on innovative projects and explore new opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:rakhi.yadav480009@gmail.com" className="text-white font-medium hover:text-orange-500 transition-colors duration-300">yadav.rakhi4321@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Gwalior, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a href="https://github.com/Rakhi8940" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-500 transition-colors duration-300">
                      github.com/Rakhi8940
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/in/rakhi-yadav8940" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-orange-500 transition-colors duration-300">
                      linkedin.com/in/rakhi-yadav8940
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold text-orange-500 mb-4">Let's Connect!</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply connect with fellow tech enthusiasts. Whether you're looking for a passionate 
                developer, data scientist, or IoT specialist, I'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="Enter your name" />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="What's this about?" />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea rows={6} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            © 2025 Rakhi Yadav. Built with passion for innovation and technology.
          </p>
        </div>
      </div>
    </section>;
};