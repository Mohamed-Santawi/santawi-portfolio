import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Section from "./ui/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href="mailto:mosantawi@gmail.com"
          className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 rounded-full font-bold text-lg transition-colors mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://github.com/Mohamed-Santawi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-yellow-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-santawi-b1ab27303/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-yellow-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="mailto:mosantawi@gmail.com"
            className="text-slate-400 hover:text-yellow-400 transition-colors"
            aria-label="Email"
          >
            <FiMail size={28} />
          </a>
          <a
            href="https://wa.me/201009193767"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-yellow-400 transition-colors"
            aria-label="WhatsApp"
          >
            <FiPhone size={28} />
          </a>
        </div>

        <p className="text-slate-500 text-sm font-mono">
          Designed & Built by Mohamed Santawi
        </p>
      </div>
    </Section>
  );
}
