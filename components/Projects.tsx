import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./ui/Section";

const projects = [
  {
    title: "Go Umrah – Travel Booking",
    description: "Developed a full-stack travel booking platform with authentication, booking management, and secure payment integration. Built a responsive admin dashboard with dynamic form generation.",
    tech: ["React.js", "Node.js", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Car Marketplace",
    description: "Built a full-stack car marketplace tailored for the Saudi Arabian market. Implemented real-time listings, advanced filtering, and Firebase-based authentication with Framer Motion animations.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Autonique – Cybersecurity",
    description: "Developed a cybersecurity-focused web platform using React and Firebase Firestore. Built a real-time admin dashboard and implemented a responsive Arabic RTL design.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "FinWise – AI Financial Planning",
    description: "AI-driven platform for personalized financial planning. Built a multi-step budget calculator and integrated OpenAI API through an Express.js proxy for intelligent recommendations.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "OpenAI"],
    github: "#",
    live: "#",
  },
  {
    title: "Diagnostic Testing Platform",
    description: "Educational diagnostic testing platform with multiple interactive assessment types including reading comprehension, MCQs, and real-time validation.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Modern E-commerce",
    description: "Production-ready e-commerce platform with Arabic and English support. Integrated secure PayPal payment processing and managed state using React Context API.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "PayPal"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6 text-slate-400">
                <span className="text-4xl text-sky-500">📁</span>
                <div className="flex gap-4">
                  <a href={project.github} className="hover:text-sky-400 transition-colors" aria-label="GitHub">
                    <FiGithub size={22} />
                  </a>
                  <a href={project.live} className="hover:text-sky-400 transition-colors" aria-label="Live Demo">
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-sky-300 bg-sky-900/30 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
