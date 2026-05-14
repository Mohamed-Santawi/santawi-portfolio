import Section from "./ui/Section";

const education = [
  {
    institution: "ALMADRASA Academy",
    degree: "Diploma in Frontend Development",
    location: "Online",
    highlights: ["Achieved 4th place out of 150 students taking this Diploma"],
  },
  {
    institution: "GAMMAL TECH Academy",
    degree: "Programming Fundamentals Certificate",
    location: "Online",
    highlights: ["Learned C, C++, Data Structures, and Algorithms"],
  },
  {
    institution: "American University in Cairo (AUC)",
    degree: "Diploma in Cement Production (Cement Industry Diploma)",
    location: "Egypt",
    highlights: [],
  },
  {
    institution: "ASEC (Arab Swiss Engineering Company)",
    degree: "Diploma in Cement Manufacture (ACMC)",
    location: "Egypt",
    highlights: [],
  },
  {
    institution: "Port Said University",
    degree: "Bachelor’s Degree in Chemical Engineering",
    location: "Egypt",
    highlights: [],
  },
];

export default function Education() {
  return (
    <Section id="education" className="bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 border-l-4 border-l-yellow-500">
              <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400 font-medium">{item.institution}</span>
                <span className="text-slate-500 text-sm">{item.location}</span>
              </div>
              
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="text-yellow-500">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
