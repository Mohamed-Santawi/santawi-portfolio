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

const agenticAISkill = {
  title: "Agentic AI",
  description: "Designing and developing AI agents that combine LLM reasoning with external tools, APIs, databases, and automation workflows. Building autonomous and human-in-the-loop systems capable of understanding user requests, making decisions, retrieving information, executing actions, and maintaining workflow state.",
  technologies: ["LLMs", "AI Agents", "Tool Calling", "Function Calling", "RAG", "Prompt Engineering", "n8n", "OpenAI API", "OpenRouter", "REST APIs", "Firebase", "Google Sheets", "WhatsApp Cloud API"],
};

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
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

        <div className="glass-card rounded-2xl p-6 md:p-8 border border-yellow-500/20 bg-gradient-to-r from-slate-800 to-slate-900">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">{agenticAISkill.title}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{agenticAISkill.description}</p>
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies & Concepts:</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {agenticAISkill.technologies.map((tech, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
