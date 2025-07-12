
import { GraduationCap, Award, Users } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Academic excellence combined with active participation in institutional activities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-orange-500" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white">B.Tech in IoT</h3>
                <p className="text-orange-500 font-semibold">MITS Gwalior</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Duration:</span>
                <span className="text-white font-semibold">2022 – 2026</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Performance:</span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Top 5% of Department
                </span>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-orange-500 mb-3">Specialization Areas</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Internet of Things (IoT)</li>
                  <li>• Edge AI and Machine Learning</li>
                  <li>• Embedded Systems</li>
                  <li>• Data Analytics and Visualization</li>
                  <li>• Smart Systems Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-white">Institutional Roles</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Member, Institution of Engineers (India)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Competitive Programming Coordinator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Member, Asimov Robotics Club
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-white">Key Achievements</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Research paper accepted at ISCMCTR-2025
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  National-level Poster Presenter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  IEEE Peer Workshop Mentor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Finalist at national hackathons
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  5★ HackerRank coder, 1500+ problems solved
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
