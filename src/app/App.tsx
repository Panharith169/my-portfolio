import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, ChevronRight, Menu, X, Award, Briefcase, GraduationCap, Star } from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact", "Honors & awards"];

const SKILLS = [
  {
    category: "Programming",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    dot: "bg-blue-500",
    items: ["Python", "C++", "Latex"],
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
    items: ["Machine Learning", "Computer Vision", "YOLO", "Pandas", "NumPy", "Power BI"],
  },
  {
    category: "Tools",
    color: "bg-slate-50 text-slate-700 border-slate-200",
    dot: "bg-slate-500",
    items: ["GitHub", "Docker", "VS Code", "Figma", "SPSS", "Excel", "PowerPoint", "Word", "Power BI", "Google Colab"],
  },
];

const PROJECTS = [
  {
    title: "SecureVision AI Surveillance",
    description: "Real-time AI-powered CCTV monitoring system leveraging YOLO object detection with a Django backend. Provides intelligent threat detection, motion tracking, and automated alerts for enterprise security.",
    tech: ["Python", "YOLO", "Django", "OpenCV", "MySQL"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=360&fit=crop&auto=format",
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Sleep and Academic Concentration Research Project",
    description: "A quantitative, non-experimental research design on sleep deprivation and academic concentration using SPSS with real data. Includes data cleaning, reliability analysis, regression modeling, and visualization of associatoin outcomes.",
    tech: ["Excel", "SPSS", "Statistic", "Latex"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop&auto=format",
    color: "from-purple-600 to-purple-800",
  },
  {
  title: "AI Agent for University Room Reservation",
  description: "Intelligent room booking system enhanced with Agentic RAG, Semantic Kernel orchestration, and biometric face recognition. Features a LangChain-powered chatbot, Flutter mobile app, Google Calendar sync, and CI/CD pipeline with Docker.",
  tech: ["Python", "Django", "LangChain", "Semantic Kernel", "ChromaDB", "Flutter", "Docker", "MySQL", "Telegram Bot"],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop&auto=format",
  color: "from-violet-600 to-purple-800",},

  {
  title: "Diabetes Prediction System",
  description: "This project develops a binary classification model to predict diabetes diagnosis (diabetic/non-diabetic) using the TAIPEI diabetes dataset containing health metrics from 15,000 women patients.",
  tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook", "Streamlit"],
  image: "/assets/Diabete.png",
  // color: "from-emerald-600 to-emerald-800",
  link: "https://my-diabetes-app.streamlit.app/"
  },
];

const EXPERIENCE = [
  {
    type: "Research",
    icon: GraduationCap,
    role: "Member",
    org: "451 Alliance",
    period: "August 2026 – Present",
    desc: "Member of the 451 Alliance, a global technology research community operated by S&P Global. Participate in technology research surveys and contribute anonymous insights on AI, cloud computing, cybersecurity, data analytics, and enterprise IT trends while accessing research reports, webinars, and industry insights.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    dotColor: "bg-purple-500",
    link: "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/451-research-launches-451-alliance-a-global-technology-research-community-7112026"
  },
  {
    type: "Internship",
    icon: Briefcase,
    role: "Artificial Intelligence Engineer",
    org: "Ministry of Industry, Science, Technology & Innovation (MISTI)",
    period: "Oct 2025 - Present",
    desc: "Implemented an AI surveillance system by developing computer vision models to detect abnormal human behaviors in CCTV footage. The project focused on applying deep learning techniques for real-time video analysis using real-world data, including model testing and evaluation to improve detection accuracy and enhance security monitoring.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dotColor: "bg-emerald-500",
  },
   {
    type: "Volunteer",
    icon: Star,
    role: "Translator",
    org: "Singapore Polytechnic",
    period: "Mar 2026 - Apr 2026",
    desc: "Participated in the Overseas Sustainable Innovation Project (OSIP) 2026 by Singapore Polytechnic in Phnom Penh, Cambodia, a 12-day international programme focused on sustainable innovation and community solutions. Served as a Translator, supporting communication between Singaporean students and community members during field research with pepper farmers in Kampot. Assisted with interviews, idea development, and prototype creation.",
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
  desc: "Participated in KimiTABI, an international volunteer and cultural exchange program connecting Cambodian and Japanese university students through community-based activities and collaborative projects. Worked with students from different backgrounds to support social impact initiatives, strengthen cross-cultural communication, and contribute to meaningful community engagement through teamwork and problem-solving.",
  color: "bg-blue-50 text-blue-600 border-blue-100",
  dotColor: "bg-blue-500",
},
  {
    type: "Volunteer",
    icon: Award,
    role: "Logistic Coordinator",
    org: "VMC: Volunteer for My Community",
    period: "Dec 2025",
    desc: "Supported community activities by coordinating logistics, preparing resources, and assisting team members to ensure smooth event operations",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    dotColor: "bg-blue-500",
  },
];

const CERTIFICATIONS = [
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2024",
    icon: "G",
    color: "bg-blue-50 border-blue-100",
    iconColor: "bg-blue-500",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM / Coursera",
    year: "2023",
    icon: "IBM",
    color: "bg-slate-50 border-slate-200",
    iconColor: "bg-slate-700",
  },
  {
    name: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
    icon: "C",
    color: "bg-teal-50 border-teal-100",
    iconColor: "bg-teal-600",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "AWS",
    color: "bg-orange-50 border-orange-100",
    iconColor: "bg-orange-500",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor's Degree , Data Science and Engineering",
    school: "Royal University of Phnom Penh",
    period: "2023 – Present",
  },
  {
    degree: "Bachalor's Degree , English",
    school: "Institute of Foreign Language, Royal University of Phnom Penh",
    perid: "2023 – Present",
  },
  {
    degree: "High School Diploma",
    school: "Hun Sen Mittapheap High School",
    detail: "Baccalaureate II (Grade A)",
  },

];

const HonorsAwards = [ 
  
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-[#111827]">
            Ly<span className="text-[#2563EB]">Sokleng</span>
          </span>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-100 text-[#2563EB] text-xs font-semibold mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Available for Opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-[#111827] leading-[1.1] tracking-tight mb-4">
                Ly Sokleng
              </h1>
              <p className="text-lg lg:text-xl text-[#2563EB] font-semibold mb-5 leading-snug">
                Data Science Student · Full Stack Developer · AI Enthusiast
              </p>
              <p className="text-[#64748B] text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                I build intelligent systems at the intersection of data science and software engineering — from computer vision pipelines to full-stack web apps. Passionate about using technology to solve meaningful real-world problems.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <button
                  onClick={() => scrollTo("Projects")}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-all duration-150 shadow-lg shadow-blue-200"
                >
                  View Projects <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[rgba(0,0,0,0.1)] text-[#111827] font-semibold text-sm hover:bg-[#F8FAFC] transition-all duration-150 shadow-sm">
                  <Download className="w-4 h-4" /> Download Resume
                </button>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sokleng@example.com" className="p-2.5 rounded-xl bg-[#F8FAFC] border border-border hover:border-[#2563EB] hover:text-[#2563EB] transition-all text-[#64748B]">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 overflow-hidden shadow-2xl shadow-blue-100 border border-blue-50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=640&fit=crop&auto=format"
                    alt="Ly Sokleng — professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating stat badges */}
                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-border">
                  <div className="text-2xl font-black text-[#111827]">4+</div>
                  <div className="text-xs text-[#64748B] font-medium">Projects</div>
                </div>
                <div className="absolute -top-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-border">
                  <div className="text-2xl font-black text-[#2563EB]">4</div>
                  <div className="text-xs text-[#64748B] font-medium">Certs</div>
                </div>
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
            {/* Bio */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-4">Biography</h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                I am a final-year Data Science and English student at the Royal University of Phnom Penh with a deep focus on Data Science. My work spans building production-ready web applications, designing machine learning pipelines, and contributing to academic research.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-4">
                I am particularly excited by the intersection of AI and real-world applications — from deploying computer vision systems for surveillance to analyzing behavioral patterns through statistical research. I believe technology should be accessible, impactful, and elegant.
              </p>
            </div>

            {/* Education timeline */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-6">Education</h3>
              <div className="relative pl-6 flex flex-col gap-8">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#2563EB] to-blue-100" />
                {EDUCATION.map((ed, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#2563EB] border-2 border-white shadow-sm" />
                    <div className="text-xs font-semibold text-[#2563EB] mb-1 uppercase tracking-wider">{ed.period}</div>
                    <div className="font-bold text-[#111827] text-sm mb-0.5">{ed.degree}</div>
                    <div className="text-[#64748B] text-sm font-medium mb-1">{ed.school}</div>
                    <div className="text-[#94A3B8] text-xs leading-relaxed">{ed.detail}</div>
                  </div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-border">
                {[
                  { label: "Projects", value: "4+" },
                  { label: "Certs", value: "4" },
                  { label: "GPA", value: "3.8" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-2xl bg-[#F8FAFC]">
                    <div className="text-xl font-black text-[#2563EB]">{s.value}</div>
                    <div className="text-xs text-[#64748B] font-medium">{s.label}</div>
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
              <div key={group.category} className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                  <h3 className="font-bold text-[#111827] text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${group.color}`}
                    >
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
              <div key={p.title} className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-40`} />
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
                  <div className="flex gap-2">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111827] text-white text-xs font-semibold hover:bg-[#1e293b] transition-colors">
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  </div>
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
            {/* Vertical line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-[#2563EB] via-blue-200 to-transparent hidden md:block" />
            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <div key={i} className="flex gap-6 group">
                    <div className="hidden md:flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full ${exp.dotColor} flex items-center justify-center mt-5 z-10 ring-4 ring-white shadow-sm`}>
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
                      {exp.link && !exp.image && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold hover:bg-blue-100 transition-colors border border-blue-100"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View source
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-2xl ${cert.iconColor} flex items-center justify-center text-white font-black text-xs`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] text-sm leading-snug mb-1">{cert.name}</h3>
                  <p className="text-[#64748B] text-xs font-medium">{cert.issuer}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">{cert.year}</span>
                  <Award className="w-4 h-4 text-[#2563EB]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Contact" title="Let us work together" />
          <div className="grid lg:grid-cols-5 gap-8 mt-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-border shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">Message sent!</h3>
                  <p className="text-[#64748B] text-sm max-w-xs">Thanks for reaching out. I will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors">
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
                      placeholder="Hi Sokleng, I would love to discuss..."
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

            {/* Contact details */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
                <h3 className="text-base font-bold text-[#111827] mb-5">Contact Info</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: Mail, label: "Email", value: "sokleng.ly@example.com", href: "mailto:soklenglyly@example.com" },
                    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lysokleng", href: "https://linkedin.com" },
                    { icon: Github, label: "GitHub", value: "github.com/lysokleng", href: "https://github.com" },
                    { icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2563EB]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#94A3B8] font-medium">{label}</div>
                        {href ? (
                          <a href={href} target="_blank" rel="noreferrer" className="text-sm text-[#111827] font-medium hover:text-[#2563EB] transition-colors">
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
                  Currently seeking internships, research collaborations, and freelance projects in data science and software engineering.
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

      {/* FOOTER */}
      <footer className="border-t border-border bg-[#F8FAFC] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-black text-lg tracking-tight text-[#111827]">
              Ly<span className="text-[#2563EB]">Sokleng</span>
            </span>
            <p className="text-xs text-[#94A3B8] mt-1">Data Science · Software Engineering · AI</p>
          </div>
          <p className="text-xs text-[#94A3B8]">© {new Date().getFullYear()} Ly Sokleng. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:sokleng.ly@example.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white border border-border text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] transition-all"
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
