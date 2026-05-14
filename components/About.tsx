import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">Junior Frontend Developer</span> with a unique background—bringing 13 years of experience as a Shift Leader Engineer in the cement industry. This experience has instilled in me strong problem-solving skills, leadership, and a meticulous attention to detail.
            </p>
            <p>
              Passionate about technology, I have been programming for over 3 years, starting with C and C++, and currently focusing on building modern web applications. My core stack involves <span className="text-yellow-400">Next.js, React, TypeScript, and Tailwind CSS</span>.
            </p>
            <p>
              I also have hands-on experience integrating LLM services via APIs within web applications, eager to contribute to impactful projects, collaborate with cross-functional teams, and continuously grow as a frontend developer.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">▹</span>
                <span className="text-slate-300">Based in Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">▹</span>
                <span className="text-slate-300">Over 20+ successful freelance projects</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">▹</span>
                <span className="text-slate-300">Specializes in responsive, Arabic RTL design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">▹</span>
                <span className="text-slate-300">Transitioned from heavy industry to tech</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
