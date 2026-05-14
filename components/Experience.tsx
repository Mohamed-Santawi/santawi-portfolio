import Section from "./ui/Section";

const experiences = [
  {
    role: "Freelance Front-End Developer",
    company: "Khamsat, Mostaql, Upwork (Remote)",
    period: "2023 – Present",
    description: [
      "Delivered over 20+ professional web projects for clients across the Middle East, including e-commerce platforms, admin dashboards, AI-powered applications, and custom business systems.",
      "Designed and developed high-quality React.js, Next.js, and Tailwind CSS front-end solutions with a focus on performance, accessibility, and responsive UI/UX.",
      "Built full-stack applications integrating Firebase, Node.js/Express APIs, and third-party services such as PayPal, OpenAI API, and Google APIs.",
      "Maintained strong client relationships, achieving consistent 5-star feedback by delivering reliable support, revisions, and long-term maintenance.",
    ],
  },
  {
    role: "Shift Leader Engineer",
    company: "Arab Swiss Engineering Company (ASEC) - Jordan / Egypt",
    period: "2012 – Present",
    description: [
      "Promoted from Junior Kiln Operator (2012) to Senior Kiln Operator, CCR Engineer, and later Shift Leader Engineer (2018).",
      "Supervise production processes, manage resources, and ensure safety and efficiency across multiple locations.",
      "Optimize operations by troubleshooting complex issues, improving workflows, and fostering team collaboration.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:col-span-1 md:text-right mt-1">
                  <span className="text-yellow-400 font-mono text-sm">{exp.period}</span>
                </div>
                <div className="md:col-span-3 glass-card rounded-2xl p-6 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] md:-left-4 top-6 w-4 h-4 rounded-full bg-yellow-500 border-4 border-slate-900 z-10 hidden md:block"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-slate-400 font-medium mb-4">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <span className="text-yellow-500 mt-1">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
