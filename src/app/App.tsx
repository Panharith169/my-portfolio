import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, ChevronRight, Menu, X, Award, Briefcase, GraduationCap, Star, FileText, ZoomIn } from "lucide-react";

const PROFILE = {
  name: "Ly Panharith",
  tagline: "Data Science & Engineering Student · AI/ML Developer",
  headline:
    "I design and deploy machine learning pipelines and full-stack applications — from real-time computer vision for security to clinical prediction models in healthcare.",
  email: "soklenglyly@gmail.com",
  github: "https://github.com/Panharith2006",
  linkedin: "https://www.linkedin.com/in/ly-panharith-952339329/",
  location: "Phnom Penh, Cambodia",
  resume: "/assets/Ly_Panharith_CV.pdf",
};

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Honors & awards", "Contact"];

const sectionId = (label: string) => label.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-");

const SKILLS = [
  {
    category: "Programming",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-500",
    items: ["Python", "C++", "LaTeX"],
  },
  {
    category: "Frontend",
    color: "bg-purple-50 text-purple-700 border-purple-100",
    dot: "bg-purple-500",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
    items: ["Django", "Node.js", "REST API"],
  },
  {
    category: "Database",
    color: "bg-orange-50 text-orange-700 border-orange-100",
    dot: "bg-orange-500",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "AI & Data Science",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    dot: "bg-rose-500",
    items: ["Machine Learning", "Computer Vision", "YOLO", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
  },
  {
    category: "Tools & Platforms",
    color: "bg-slate-50 text-slate-700 border-slate-200",
    dot: "bg-slate-500",
    items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "SPSS", "Google Colab"],
  },
];

const PROJECTS = [
  {
    title: "SecureVision AI Surveillance",
    description:
      "Enterprise CCTV monitoring platform using YOLO object detection and a Django backend. Delivers real-time threat detection, motion tracking, and automated security alerts.",
    tech: ["Python", "YOLO", "Django", "OpenCV", "MySQL"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=360&fit=crop&auto=format",
    color: "from-blue-600 to-blue-800",
    github: "https://github.com/chhounpisethchesda/securevision-web",
  },
  {
    title: "Sleep & Academic Concentration Research",
    description:
      "Quantitative study on sleep deprivation and academic concentration using SPSS. Covered data cleaning, reliability analysis, regression modeling, and visualization of association outcomes.",
    tech: ["SPSS", "Statistics", "LaTeX", "Excel"],
    image: "/assets/A3.1_Group4_Ly_Panharith.pdf",
    paper: "/assets/A3.1_Group4_Ly_Panharith.pdf",
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "AI Agent for University Room Reservation",
    description:
      "Intelligent room booking system with Agentic RAG, Semantic Kernel orchestration, and biometric face recognition. Includes a LangChain chatbot, Flutter mobile app, Google Calendar sync, and Docker CI/CD.",
    tech: ["Python", "Django", "LangChain", "Semantic Kernel", "ChromaDB", "Flutter", "Docker", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop&auto=format",
    color: "from-violet-600 to-purple-800",
    github: "https://github.com/chhounoudom59-crypto/room_booking-",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "Binary classification model predicting diabetes diagnosis using the TAIPEI dataset of 15,000 patient health records. Built with scikit-learn and deployed as an interactive Streamlit application.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
    image: "/assets/Diabete.png",
    color: "from-emerald-600 to-emerald-800",
    github: "https://github.com/Panharith2006/diabetes-prediction",
    live: "https://my-diabetes-app.streamlit.app/",
  },
];

const EXPERIENCE = [
  {
    type: "Internship",
    icon: Briefcase,
    role: "Artificial Intelligence Engineer",
    org: "Ministry of Industry, Science, Technology & Innovation (MISTI)",
    period: "Oct 2025 – Present",
    desc: "Develop computer vision models for CCTV anomaly detection on real-world footage. Apply deep learning for real-time video analysis, model evaluation, and iterative accuracy improvements for security monitoring.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dotColor: "bg-emerald-500",
  },
  {
    type: "Education",
    icon: Star,
    role: "Project Member",
    org: "Singapore Polytechnic",
    period: "Mar 2026 – Apr 2026",
    desc: "Supported the Overseas Sustainable Innovation Project (OSIP) 2026 in Phnom Penh — facilitating communication between Singaporean students and pepper farmers in Kampot during field research, interviews, and prototype development.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    dotColor: "bg-blue-500",
    image: "/assets/Singapore.jpg",
  },
  {
    type: "Volunteer",
    icon: Star,
    role: "Project Member",
    org: "KimiTABI",
    period: "2026",
    desc: "Collaborated with Cambodian and Japanese university students on community-based projects, strengthening cross-cultural communication and contributing to social impact initiatives through teamwork and problem-solving.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    dotColor: "bg-blue-500",
    link: "https://lp.impactasia.org/kimitabi/"
  },
  {
    type: "Volunteer",
    icon: Award,
    role: "Logistics Coordinator",
    org: "VMC: Volunteer for My Community",
    period: "Dec 2025",
    desc: "Coordinated logistics, prepared resources, and supported team operations to ensure smooth delivery of community engagement activities.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    dotColor: "bg-blue-500",
  },
];

interface Certification {
  title: string;
  image?: string;
  link?: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Global MOOC on the Ethics of AI",
    issuer: "UNESCO",
    date: "Aug 2026",
    credentialId: "74ECLBWZEEM2",
    link: "https://www.coursera.org/account/accomplishments/records/74ECLBWZEEM2",
  },
  {
    title: "AI & Python Development",
    issuer: "Udemy",
    credentialId: "UC-6e3fe992-83fe-49fd-a668-6858db19b3e0",
    link: "https://ude.my/UC-6e3fe992-83fe-49fd-a668-6858db19b3e0",
  },
  {
    title: "Essentials of AI Learning Frameworks & Advanced Models",
    issuer: "UniAthena",
    date: "Apr 2025",
    credentialId: "9394-2911-9524",
    link: "https://uniathena.com/verify/certificate?certID=9394-2911-9524",
  },
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "AWS Training Online",
    date: "Jun 2024",
    link: "https://www.credly.com/badges/3ff07ea5-8af9-4e5b-b400-9fedb473b4bf/public_url",
  },
  {
    title: "NICC Leadership Certificate",
    image: "/assets/NICC Leadership.pdf",
    issuer: "NICC",
    date: "2025",
  },
  {
    title: "Leadership Certificate",
    image: "/assets/Leadership Certificate.pdf",
    date: "2025",
  },
];
const EDUCATION = [
  {
    degree: "Bachelor's Degree, Data Science and Engineering",
    school: "Royal University of Phnom Penh",
    period: "2023 – Present",
  },
  {
    degree: "Bachelor's Degree, English",
    school: "Institute of Foreign Languages, Royal University of Phnom Penh",
    period: "2023 – Present",
  },
  {
    degree: "High School Diploma",
    school: "Hun Sen Mittapheap High School",
    period: "2023",
    detail: "Baccalaureate II (Grade A)",
  },
];

const HONORS_AWARDS = [
  {
    title: "Baccalaureate II — Grade A",
    issuer: "Hun Sen Mittapheap High School",
    year: "2023",
    detail: "Achieved the highest distinction on Cambodia's national high school examination.",
  },
  {
    title: "2nd Award – Top Project (Water Misting System)",
    issuer: "Faculty of Engineering, Royal University of Phnom Penh",
    year: "2024",
    detail: 'Awarded Second Place for the project "Water Misting System" during the 7th Engineering Day Awards 2024, in recognition of outstanding project achievement.',
    image: "/assets/Engineering Day.pdf",
  },
  {
    title: "2024 Techo Digital Talent Scholarship Recipient",
    issuer: "Ministry of Post and Telecommunications",
    year: "2024",
    detail: "Awarded the 2024 Techo Digital Talent Scholarship to pursue a Bachelor's degree in Data Science at the Royal University of Phnom Penh, in recognition of academic merit and potential in digital technology.",
    image: "/assets/Bachelor Scholarship.pdf",
  },
];

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Linkedin, label: "LinkedIn", value: PROFILE.linkedin.replace("https://", ""), href: PROFILE.linkedin },
  { icon: Github, label: "GitHub", value: PROFILE.github.replace("https://", ""), href: PROFILE.github },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isPdf = (src: string) => src.toLowerCase().endsWith(".pdf");

function MediaThumb({
  src,
  alt,
  className = "",
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  if (isPdf(src)) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-xl cursor-pointer group/thumb bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border border-blue-100 flex flex-col items-center justify-center p-4 text-center ${className}`}
      >
        <FileText className="w-9 h-9 text-[#2563EB] mb-2 group-hover/thumb:scale-110 transition-transform" />
        <span className="text-xs font-semibold text-[#111827] line-clamp-2 px-2">{alt}</span>
        <span className="mt-1.5 px-2 py-0.5 rounded-md bg-blue-100/80 text-[#2563EB] text-[10px] font-bold uppercase tracking-wider">PDF Document</span>
        <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
          <ZoomIn className="w-6 h-6 text-slate-700 opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
        </div>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-xl cursor-zoom-in group/thumb ${className}`} onClick={onClick}>
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const scrollTo = (label: string) => {
    document.getElementById(sectionId(label))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-[#111827]">
            Ly<span className="text-[#2563EB]">Panharith</span>
          </span>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-[#64748B] hover:text-[#111827] hover:bg-[#F8FAFC] transition-all duration-150"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("Contact")}
              className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all duration-150 shadow-sm"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium text-[#64748B] hover:text-[#111827] hover:bg-[#F8FAFC] transition-all"
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl lg:text-6xl font-black text-[#111827] leading-[1.1] tracking-tight mb-4">
              {PROFILE.name}
            </h1>
            <p className="text-lg lg:text-xl text-[#2563EB] font-semibold mb-5 leading-snug">{PROFILE.tagline}</p>
            <p className="text-[#64748B] text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {PROFILE.headline}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollTo("Projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-all duration-150 shadow-lg shadow-blue-200"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLightbox(PROFILE.resume)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] text-[#111827] font-semibold text-sm hover:bg-[#F8FAFC] transition-all duration-150 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" /> View Resume
              </button>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send email"
                className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 overflow-hidden shadow-2xl shadow-blue-100 border border-blue-50">
                <img
                  src="/assets/profile.jpg"
                  alt={`${PROFILE.name} — professional portrait`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="About Me" title="Turning data into decisions" />
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-4">Biography</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                I am a Data Science and Engineering student at the Royal University of Phnom Penh, with a parallel degree in English from the Institute of Foreign Languages. My work spans production-ready web applications, machine learning pipelines, and academic research.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                I focus on applying AI to real-world problems — from deploying computer vision systems during my internship at MISTI to building clinical prediction tools and conducting statistical research. I aim to create technology that is rigorous, accessible, and impactful.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-6">Education</h3>
              <div className="relative pl-6 flex flex-col gap-8">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#2563EB] to-blue-100" />
                {EDUCATION.map((ed, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#2563EB] border-2 border-white shadow-sm" />
                    {"period" in ed && ed.period && (
                      <div className="text-xs font-semibold text-[#2563EB] mb-1 uppercase tracking-wider">{ed.period}</div>
                    )}
                    <div className="font-bold text-[#111827] text-sm mb-0.5">{ed.degree}</div>
                    <div className="text-[#64748B] text-sm font-medium mb-1">{ed.school}</div>
                    {"detail" in ed && ed.detail && (
                      <div className="text-[#94A3B8] text-xs leading-relaxed">{ed.detail}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Technical Skills" title="Tools I work with" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                  <h3 className="font-bold text-[#111827] text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${group.color}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Featured Projects" title="Things I have built" />
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-48 relative">
                  <MediaThumb
                    src={p.thumbnail ?? p.image}
                    alt={p.title}
                    className="w-full h-full"
                    onClick={() => setLightbox(p.image)}
                  />
                  {p.color && !isPdf(p.thumbnail ?? p.image) && <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-30 pointer-events-none`} />}

                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#111827] text-base mb-2">{p.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-border text-[#64748B] text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  {(p.live || p.github || p.paper) && (
                    <div className="flex gap-2 flex-wrap">
                      {p.paper && (
                        <a
                          href={p.paper}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" /> Read Paper
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111827] text-white text-xs font-semibold hover:bg-[#1e293b] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Experience" title="Where I have contributed" />
          <div className="mt-12 relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-[#2563EB] via-blue-200 to-transparent hidden md:block" />
            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <div key={i} className="flex gap-6 group">
                    <div className="hidden md:flex flex-col items-center">
                      <div
                        className={`w-6 h-6 rounded-full ${exp.dotColor} flex items-center justify-center mt-5 z-10 ring-4 ring-white shadow-sm`}
                      >
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${exp.color} mb-2`}>
                            {exp.type}
                          </span>
                          <h3 className="font-bold text-[#111827] text-base">{exp.role}</h3>
                          <p className="text-[#2563EB] text-sm font-semibold">{exp.org}</p>
                        </div>
                        <span className="text-xs text-[#94A3B8] font-medium bg-[#F8FAFC] px-3 py-1.5 rounded-xl border border-border">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#64748B] text-sm leading-relaxed">{exp.desc}</p>
                      {exp.image && (
                        <div className="mt-4 w-full max-w-sm overflow-hidden rounded-2xl border border-border">
                          <img
                            src={exp.image.startsWith("http") ? exp.image : new URL(exp.image, window.location.origin).pathname}
                            alt={`${exp.org} experience`}
                            className="w-full h-36 object-cover"
                          />
                        </div>
                      )}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold hover:bg-blue-100 transition-colors border border-blue-100"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {exp.linkLabel ?? "Learn more"}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Certifications" title="Credentials I have earned" />
          {CERTIFICATIONS.length === 0 ? (
            <p className="text-center text-[#94A3B8] mt-12 text-sm">No certifications added yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  {cert.image ? (
                    <>
                      <MediaThumb
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-44"
                        onClick={() => setLightbox(cert.image!)}
                      />
                      <div className="px-4 py-3 flex items-center justify-between gap-2 border-t border-slate-100">
                        <span className="text-xs font-bold text-[#111827] truncate">{cert.title}</span>
                        <button onClick={() => setLightbox(cert.image!)} className="text-[#2563EB] hover:underline text-xs font-semibold flex-shrink-0">View</button>
                      </div>
                    </>
                  ) : (
                    <div className="p-5 flex flex-col justify-between h-full min-h-[180px]">
                      <div>
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                          <Award className="w-5 h-5 text-[#2563EB]" />
                        </div>
                        <h4 className="text-xs font-bold text-[#111827] leading-snug mb-1 line-clamp-2">{cert.title}</h4>
                        {cert.issuer && <p className="text-[11px] font-semibold text-[#2563EB] mb-1">{cert.issuer}</p>}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] text-[#94A3B8] font-medium">{cert.date ?? "Verified"}</span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[#2563EB] hover:underline text-xs font-semibold"
                          >
                            Show credential <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HONORS & AWARDS */}
      <section id="honors-awards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Honors & Awards" title="Recognition I have received" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {HONORS_AWARDS.map((honor) => (
              <div
                key={honor.title}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {honor.image && (
                  <MediaThumb
                    src={honor.image}
                    alt={honor.title}
                    className="w-full h-40"
                    onClick={() => honor.image && setLightbox(honor.image)}
                  />
                )}
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-100 flex items-center justify-center mb-3">
                    <Award className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-sm mb-1">{honor.title}</h3>
                  <p className="text-[#2563EB] text-xs font-semibold mb-2">{honor.issuer}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-3">{honor.detail}</p>
                  <span className="text-xs text-[#94A3B8] font-medium">{honor.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Contact" title="Let's work together" />
          <div className="grid lg:grid-cols-5 gap-8 mt-12">
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-border shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">Email client opened</h3>
                  <p className="text-[#64748B] text-sm max-w-xs">
                    Your message draft is ready. Send it from your email app and I will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-lg font-bold text-[#111827] mb-1">Send a message</h3>
                  <div>
                    <label className="text-sm font-semibold text-[#374151] mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-border text-[#111827] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#374151] mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-border text-[#111827] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#374151] mb-2 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder={`Hi ${PROFILE.name.split(" ").slice(-1)[0]}, I'd like to discuss an opportunity...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAFC] border border-border text-[#111827] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
                <h3 className="text-base font-bold text-[#111827] mb-5">Contact Info</h3>
                <div className="flex flex-col gap-4">
                  {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2563EB]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#94A3B8] font-medium">{label}</div>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noreferrer" : undefined}
                            className="text-sm text-[#111827] font-medium hover:text-[#2563EB] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm text-[#111827] font-medium">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-3xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Open to Opportunities</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Seeking internships, research collaborations, and freelance projects in data science, AI, and software engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Internship", "Research", "Freelance"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-xl bg-white/20 text-white text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA MODAL (image lightbox + PDF viewer) */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col items-center justify-center bg-white rounded-3xl overflow-hidden shadow-2xl p-4"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {isPdf(lightbox) ? (
              <div className="w-full h-full flex flex-col items-center">
                <iframe
                  src={lightbox}
                  title="PDF Viewer"
                  className="w-full rounded-2xl bg-slate-50 border border-border"
                  style={{ height: "72vh" }}
                />
                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={lightbox}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" /> Open PDF in New Tab
                  </a>
                  <a
                    href={lightbox}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-[#111827] text-xs font-semibold hover:bg-slate-200 transition-colors border border-border"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <img
                src={lightbox}
                alt="Full view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            )}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-100 text-[#111827] flex items-center justify-center shadow-md hover:bg-slate-200 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-border bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-black text-lg tracking-tight text-[#111827]">
              Ly<span className="text-[#2563EB]">Panharith</span>
            </span>
            <p className="text-xs text-[#94A3B8] mt-1">Data Science · AI · Software Engineering</p>
          </div>
          <p className="text-xs text-[#94A3B8]">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: PROFILE.github, label: "GitHub" },
              { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="p-2 rounded-xl bg-[#F8FAFC] border border-border text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-100 text-[#2563EB] text-xs font-semibold mb-4 tracking-wide uppercase">
        {label}
      </div>
      <h2 className="text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">{title}</h2>
    </div>
  );
}
