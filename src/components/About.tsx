
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate about creating innovative solutions at the intersection of IoT, Data Science, and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              B.Tech IoT student with hands-on experience in Data Science, C++, Python, and DSA. 
              Skilled in Power BI, DAX, SQL, and data modeling for building insightful dashboards 
              and driving data-informed decisions.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              5★ HackerRank coder with 1000+ problems solved on CodeChef. Member of the 
              Institute of Engineers (India), published research author, and active participant 
              in national-level tech events.
            </p>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-orange-500">Key Highlights</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Top 5% of IoT Department at MITS Gwalior</li>
                <li>• 5★ HackerRank Coder with 1500+ problems solved</li>
                <li>• Research paper accepted at ISCMCTR-2025</li>
                <li>• Multiple national-level hackathon finalist</li>
                <li>• Active member of Institution of Engineers (India)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Communication', 'Public Speaking', 'Time Management', 'Problem Solving',
                'Critical Thinking', 'Leadership', 'Teamwork', 'Adaptability',
                'Research & Analytics', 'Project Management'
              ].map((skill) => (
                <div key={skill} className="bg-gray-900 p-3 rounded-lg border border-gray-700 text-center">
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Hobbies & Interests</h3>
              <div className="space-y-3 text-gray-300">
                <p>📚 Reading literature and creative writing</p>
                <p>🎵 Exploring music genres and artists</p>
                <p>🧩 Strategic games and puzzles</p>
                <p>✈️ Traveling and exploring new cultures</p>
                <p>💻 Following latest tech trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
