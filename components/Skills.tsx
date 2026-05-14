import Section from "./ui/Section";

const skillCategories = [
  {
    title: "Core Stack",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Python", "C/C++"],
  },
  {
    title: "Backend & Services",
    skills: ["Firebase", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Tools & Other",
    skills: ["Framer Motion", "Git/GitHub", "Vercel", "OpenAI API", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category.title === "Core Stack"
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        : "bg-slate-800 text-slate-300 border border-slate-700"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
