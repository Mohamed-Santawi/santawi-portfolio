import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import Section from "./ui/Section";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sky-400 font-medium tracking-wide uppercase">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Mohamed Santawi
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-400">
            I build modern web experiences.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Frontend Developer specializing in <span className="text-white font-semibold">React.js, Next.js, TypeScript, and Tailwind CSS</span>. I focus on creating responsive, accessible, and highly interactive user interfaces.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/30"
            >
              View My Work
            </Link>
            <a
              href="/Mohamed_Santawi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-slate-700"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-8">
            <a href="https://github.com/Mohamed-Santawi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/mohamed-santawi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:mosantawi@gmail.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
              <FiMail size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-sky-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
              <Image
                src="/image.jpeg"
                alt="Mohamed Santawi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
