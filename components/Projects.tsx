import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./ui/Section";

const projects = [
  {
    title: "Go Umrah – Travel Booking Application",
    description: "Developed a full-stack travel booking platform with authentication, booking management, and secure payment integration. Built a responsive admin dashboard with dynamic form generation.",
    tech: ["React.js", "Node.js", "Firebase"],
    github: "https://github.com/Mohamed-Santawi/Go-Umrah",
    live: "https://go-umrah.com",
    image: "/projects/go_umrah.png",
  },
  {
    title: "Marwan Educational Platform – E-Learning System",
    description: "Built a full-stack educational platform featuring role-based dashboards. Developed a comprehensive exam management system and integrated OpenAI API for an intelligent math tutor assistant.",
    tech: ["React.ts", "Firebase", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/Mohamed-Santawi/marwan-platform",
    live: "https://marwanlearn.online/",
    image: "/projects/marwan.png",
  },
  {
    title: "Corporate Cement Portfolio",
    description: "Developed a modern, responsive corporate portfolio website for a cement manufacturing business. Implemented dynamic UI components with Framer Motion.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Mohamed-Santawi/personal-portfolio",
    live: "https://mohamed-elsantawy-portfolio.vercel.app",
    image: "/projects/cement.png",
  },
  {
    title: "Fake Radar – Deepfake Detection Platform",
    description: "Developed an Arabic RTL deepfake detection web application using Next.js App Router. Engineered a robust multi-provider API fallback chain and server-side media processing.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Mohamed-Santawi/fake-radar",
    live: "https://fakeradar-chi.vercel.app/",
    image: "/projects/fake_radar.png",
  },
  {
    title: "Kashif Ash3a",
    description: "Developed a fast and responsive single-page web application. Built dynamic user interfaces with fluid animations and integrated a Firebase backend for user authentication and real-time database operations.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Mohamed-Santawi/kashif-ash3a",
    live: "https://kashif-ash3a.vercel.app",
    image: "/projects/kashif.png",
  },
  {
    title: "Car Marketplace Web Application",
    description: "Built a full-stack car marketplace tailored for the Saudi Arabian market. Implemented real-time listings, advanced filtering, and Firebase-based authentication.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Mohamed-Santawi/Car-Marketplace",
    live: "https://2ndhand-cars.sa",
    image: "/projects/car_marketplace.png",
  },
  {
    title: "Autonique – Cybersecurity Solutions Website",
    description: "Developed a cybersecurity-focused web platform using React and Firebase Firestore. Built a real-time admin dashboard with dynamic content management capabilities.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Mohamed-Santawi/Autonique",
    live: "https://autonique-version.vercel.app/",
    image: "/projects/autonique.png",
  },
  {
    title: "FinWise – AI-Powered Financial Planning Platform",
    description: "Developed an AI-driven platform for personalized financial planning and budgeting. Built a multi-step budget calculator and integrated OpenAI API for intelligent recommendations.",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Mohamed-Santawi/finwise",
    live: "https://finwise-inky.vercel.app/",
    image: "/projects/finwise.png",
  },
  {
    title: "Learning Difficulties Diagnostic Testing Platform",
    description: "Built an educational diagnostic testing platform with multiple interactive assessment types. Implemented reading comprehension, MCQs, and text-based tests with real-time validation.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/Mohamed-Santawi/Exam-project",
    live: "https://exam-project-psi-smoky.vercel.app/",
    image: "/projects/diagnostic.png",
  },
  {
    title: "E-commerce Website",
    description: "Developed a production-ready e-commerce platform with Arabic and English support. Implemented Firebase authentication and integrated secure PayPal payment processing.",
    tech: ["React.js", "Firebase", "Tailwind CSS", "PayPal"],
    github: "https://github.com/YourUsername/E-commerce",
    live: "https://e-commerce2025-pdu8.vercel.app/",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Notes App",
    description: "Built a responsive note-taking application with a clean, minimal UI. Implemented full CRUD functionality with React Router navigation and efficient state management.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/YourUsername/Notes-App",
    live: "https://your-notes-demo.com",
    image: "/projects/notes.png",
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              
              <div className="relative w-full h-48 border-b border-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="GitHub">
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Live Demo">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.github === "#" && (
                      <span className="cursor-not-allowed hover:text-slate-500 transition-colors" aria-label="GitHub (No Link)">
                        <FiGithub size={20} />
                      </span>
                    )}
                    {project.live === "#" && (
                      <span className="cursor-not-allowed hover:text-slate-500 transition-colors" aria-label="Live Demo (No Link)">
                        <FiExternalLink size={20} />
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-mono text-yellow-300 bg-yellow-900/30 px-2 py-1 rounded border border-yellow-500/20">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
