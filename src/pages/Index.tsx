
import { ArrowRight, Download, ExternalLink, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">{/* Force dark mode to match portfolio */}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <div dangerouslySetInnerHTML={{ __html: '<elevenlabs-convai agent-id="agent_5501k2hyyv3cedwbxw0rpex3t1mf"></elevenlabs-convai>' }} />
    </div>
  );
};

export default Index;
