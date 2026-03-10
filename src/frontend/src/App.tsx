import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Globe,
  GraduationCap,
  Layers,
  Menu,
  Network,
  TrendingUp,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// ── Network SVG Background ──────────────────────────────────────────────────
const NODES_LARGE = [
  [120, 200],
  [360, 400],
  [600, 200],
  [840, 500],
  [1080, 300],
  [1320, 100],
  [240, 600],
  [480, 300],
  [720, 100],
  [960, 600],
  [1200, 450],
  [60, 500],
] as const;

const NODES_GLOW = [
  [120, 200],
  [360, 400],
  [600, 200],
  [840, 500],
  [1080, 300],
] as const;

function NetworkBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        role="presentation"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D1FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 100}
            x2="1440"
            y2={i * 100}
            stroke="#00D1FF"
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <line
            key={`v${i}`}
            x1={i * 120}
            y1="0"
            x2={i * 120}
            y2="800"
            stroke="#00D1FF"
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
        ))}
        <line
          x1="120"
          y1="200"
          x2="360"
          y2="400"
          stroke="#00D1FF"
          strokeWidth="1"
        />
        <line
          x1="360"
          y1="400"
          x2="600"
          y2="200"
          stroke="#00D1FF"
          strokeWidth="1"
        />
        <line
          x1="600"
          y1="200"
          x2="840"
          y2="500"
          stroke="#00D1FF"
          strokeWidth="1"
        />
        <line
          x1="840"
          y1="500"
          x2="1080"
          y2="300"
          stroke="#00D1FF"
          strokeWidth="1"
        />
        <line
          x1="1080"
          y1="300"
          x2="1320"
          y2="100"
          stroke="#00D1FF"
          strokeWidth="1"
        />
        <line
          x1="240"
          y1="600"
          x2="480"
          y2="300"
          stroke="#00D1FF"
          strokeWidth="0.8"
        />
        <line
          x1="720"
          y1="100"
          x2="960"
          y2="600"
          stroke="#00D1FF"
          strokeWidth="0.8"
        />
        {NODES_LARGE.map(([cx, cy]) => (
          <circle key={`n-${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#00D1FF" />
        ))}
        {NODES_GLOW.map(([cx, cy]) => (
          <circle
            key={`g-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="12"
            fill="url(#nodeGlow)"
          />
        ))}
      </svg>
    </div>
  );
}

// ── Header ──────────────────────────────────────────────────────────────────
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", ocid: "nav.home.link" },
    { label: "About", href: "#about", ocid: "nav.about.link" },
    {
      label: "Corporate Training",
      href: "#corporate",
      ocid: "nav.corporate.link",
    },
    { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[#0B1F3A] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex flex-col leading-none"
            data-ocid="nav.home.link"
          >
            <span className="text-white font-display font-bold text-xl tracking-tight">
              Lowcademy
            </span>
            <span className="text-[#00D1FF] text-[10px] font-medium tracking-widest uppercase">
              by Ankit Gangrade
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={link.ocid}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#programs">
              <Button
                data-ocid="nav.get_started.button"
                className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold text-sm px-5 h-9 rounded-md transition-colors"
              >
                Get Started
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
            type="button"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={link.ocid}
                className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              data-ocid="nav.mobile.get_started.button"
              className="w-full mt-2 bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold"
              onClick={() => {
                setMobileOpen(false);
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0B1F3A] pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      <NetworkBackground />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,209,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
          <span className="text-[#00D1FF] text-xs font-semibold tracking-wider uppercase">
            Architect-Led Learning Platform
          </span>
        </div>

        <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-6">
          Learn OutSystems the Way
          <br />
          <span className="text-[#00D1FF]">Enterprise Architects</span>
          <br />
          Actually Build Systems
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Programs designed and taught by{" "}
          <span className="text-white font-medium">Ankit Gangrade</span> — a
          practicing Enterprise Software Architect. Learn architecture thinking,
          enterprise delivery practices, and real-world low-code development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#programs">
            <Button
              data-ocid="hero.explore_programs.button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#corporate">
            <Button
              data-ocid="hero.corporate_training.button"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 h-12 rounded-md bg-transparent transition-all"
            >
              Corporate Training
            </Button>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
          {[
            { value: "10+", label: "Years Enterprise Experience" },
            { value: "500+", label: "Developers Trained" },
            { value: "3", label: "Flagship Programs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#00D1FF] font-display font-black text-3xl">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Who Lowcademy Helps ──────────────────────────────────────────────────────
function WhoHelpsSection() {
  const cards = [
    {
      icon: Building2,
      title: "Corporate Teams",
      description:
        "Enable development teams with enterprise-grade OutSystems capabilities, architecture thinking, and delivery frameworks.",
      tag: "Team Enablement",
    },
    {
      icon: Briefcase,
      title: "Software Professionals",
      description:
        "Upgrade your skills for low-code engineering, enterprise architecture, and AI-assisted development. Grow from developer to architect.",
      tag: "Career Growth",
    },
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Build real industry-ready software engineering skills beyond academic learning. Start your enterprise software journey right.",
      tag: "Foundational Skills",
    },
  ];

  return (
    <section id="who" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Built for Enterprise
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Who Lowcademy Helps
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-white border border-gray-100 rounded-xl p-8 card-hover shadow-card"
              style={{ borderTop: "2px solid #00D1FF" }}
            >
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#00D1FF]/10">
                  <card.icon className="text-[#00D1FF]" size={22} />
                </div>
              </div>
              <Badge className="mb-4 bg-[#0B1F3A]/5 text-[#0B1F3A] border-0 text-xs font-medium">
                {card.tag}
              </Badge>
              <h3 className="font-display font-bold text-[#0B1F3A] text-xl mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Lowcademy ───────────────────────────────────────────────────────────
function WhySection() {
  const cards = [
    {
      icon: Layers,
      title: "Architect-Led Learning",
      description:
        "Programs designed by a practicing enterprise architect with real delivery experience.",
    },
    {
      icon: Globe,
      title: "Enterprise Perspective",
      description:
        "Understand how real enterprise systems are designed, scaled, and maintained across teams.",
    },
    {
      icon: Network,
      title: "Real Project Thinking",
      description:
        "Learn architecture patterns, scalability principles, and enterprise delivery practices.",
    },
    {
      icon: TrendingUp,
      title: "Career Transformation",
      description:
        "Move from developer mindset to architect mindset. A strategic shift that changes careers.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            The Difference
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Why Learn from Lowcademy
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-7 shadow-card card-hover border border-gray-100"
            >
              <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                <card.icon className="text-[#00D1FF]" size={20} />
              </div>
              <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Programs ────────────────────────────────────────────────────────
function ProgramsSection() {
  const programs = [
    {
      title: "OutSystems Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      price: "₹4,999",
      description:
        "Master the foundations of OutSystems development. From UI components and logic to data modeling and deployment.",
      topics: ["Visual Development", "Data Modeling", "Deployment Basics"],
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      featured: false,
    },
    {
      title: "OutSystems Architecture Mastery",
      level: "Advanced",
      duration: "12 weeks",
      price: "₹9,999",
      description:
        "Deep-dive into enterprise architecture patterns, domain-driven design, and scalable OutSystems application architecture.",
      topics: ["Architecture Patterns", "DDD Principles", "Performance Design"],
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      featured: true,
    },
    {
      title: "Enterprise Low-Code Development",
      level: "Intermediate",
      duration: "10 weeks",
      price: "₹7,499",
      description:
        "Bridge the gap between low-code tools and enterprise delivery. Learn integration patterns, governance, and team collaboration.",
      topics: ["Integration Patterns", "Governance", "Team Delivery"],
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      featured: false,
    },
  ];

  return (
    <section id="programs" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Flagship Curriculum
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Featured Learning Programs
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Structured programs designed with enterprise delivery in mind — not
            just tutorials.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`relative flex flex-col rounded-xl border overflow-hidden card-hover ${
                program.featured
                  ? "border-[#00D1FF] shadow-[0_0_40px_rgba(0,209,255,0.12)]"
                  : "border-gray-100 shadow-card"
              }`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#00D1FF] text-[#0B1F3A] font-bold text-xs border-0">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="h-1 bg-gradient-to-r from-[#00D1FF] to-[#0066cc]" />
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    className={`text-xs font-medium border ${program.badgeColor}`}
                  >
                    {program.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={12} />
                    <span>{program.duration}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-xl mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  {program.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-[#00D1FF] flex-shrink-0"
                      />
                      <span className="text-gray-500 text-xs">{topic}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs mb-1">
                      Program Fee
                    </div>
                    <div className="font-display font-black text-[#0B1F3A] text-2xl">
                      {program.price}
                    </div>
                  </div>
                  <Button
                    data-ocid={`programs.enroll_button.${idx + 1}`}
                    className="w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold transition-colors h-11"
                  >
                    Enroll Now
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Corporate Section ────────────────────────────────────────────────────────
function CorporateSection() {
  const offerings = [
    { icon: Layers, label: "Architecture Enablement" },
    { icon: BookOpen, label: "Development Best Practices" },
    { icon: BarChart3, label: "Enterprise Application Design" },
    { icon: Cpu, label: "Delivery Frameworks" },
  ];

  return (
    <section id="corporate" className="bg-[#F7F9FC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-4">
              For Organizations
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5">
              Enable Your Entire
              <br />
              OutSystems Team
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Lowcademy provides specialized programs for organizations looking
              to strengthen their OutSystems development teams and enterprise
              delivery capabilities.
            </p>
            <a href="#contact">
              <Button
                data-ocid="corporate.programs.button"
                className="bg-[#0B1F3A] hover:bg-[#0e2a4a] text-white font-bold px-8 h-12 transition-colors"
              >
                Corporate Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {offerings.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 shadow-card border border-gray-100 flex flex-col gap-3 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center">
                  <item.icon className="text-[#00D1FF]" size={18} />
                </div>
                <p className="font-display font-semibold text-[#0B1F3A] text-sm leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About Ankit ──────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,209,255,0.15), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-card">
              <img
                src="/assets/generated/ankit-gangrade-profile.dim_400x400.jpg"
                alt="Ankit Gangrade — Enterprise Software Architect and Principal Consultant"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0B1F3A] text-white rounded-xl px-5 py-3 shadow-xl">
              <div className="text-[#00D1FF] font-display font-black text-2xl">
                10+
              </div>
              <div className="text-white/60 text-xs mt-0.5">
                Years Enterprise
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-4">
              The Instructor
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-2">
              Ankit Gangrade
            </h2>
            <p className="text-gray-400 font-medium mb-6">
              Enterprise Software Architect · Principal Consultant
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Ankit Gangrade is an enterprise architect specializing in
              OutSystems and enterprise delivery enablement. He works with
              organizations to design scalable systems, mentor engineering
              teams, and improve software delivery practices.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lowcademy was founded to share this real industry experience with
              developers and organizations — so that enterprise architecture
              thinking becomes accessible to everyone building serious software.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "OutSystems",
                "Enterprise Architecture",
                "Low-Code Engineering",
                "AI-Ready Systems",
              ].map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#F7F9FC] text-[#0B1F3A] border border-gray-200 text-xs font-medium px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <a href="#about">
              <Button
                data-ocid="about.ankit.button"
                variant="outline"
                className="border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-bold px-8 h-12 transition-colors"
              >
                About Ankit
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  const posts = [
    {
      tag: "Enterprise Architecture",
      title: "Why Domain-Driven Design Matters in OutSystems Projects",
      excerpt:
        "DDD isn't just for traditional code. Learn how to apply domain boundaries and aggregate patterns when designing OutSystems applications.",
      readTime: "8 min read",
      date: "Mar 2025",
    },
    {
      tag: "AI in Software",
      title: "The Enterprise Architect's Guide to AI-Ready Systems",
      excerpt:
        "AI integration isn't a feature — it's an architectural decision. How to design OutSystems apps that incorporate AI without technical debt.",
      readTime: "12 min read",
      date: "Feb 2025",
    },
    {
      tag: "Low-Code Engineering",
      title: "OutSystems Performance Patterns Every Architect Should Know",
      excerpt:
        "From aggregate queries to asynchronous timers — the performance patterns that separate professional OutSystems delivery from amateur builds.",
      readTime: "10 min read",
      date: "Jan 2025",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Knowledge Base
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Insights on Enterprise Software
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              data-ocid={`blog.item.${i + 1}`}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-card card-hover"
            >
              <div className="h-1 bg-gradient-to-r from-[#00D1FF] to-[#0066cc]" />
              <div className="p-7">
                <Badge className="mb-4 bg-[#0B1F3A]/5 text-[#0B1F3A] border-0 text-xs">
                  {post.tag}
                </Badge>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-gray-400 text-xs">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ────────────────────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden">
      <NetworkBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,209,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-5">
          Take the Next Step
        </p>
        <h2 className="font-display font-black text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-5">
          Start Your Journey Toward
          <br />
          <span className="text-[#00D1FF]">Enterprise Architecture</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
          Programs that transform how you think about software. Not just skills
          — a new professional identity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#programs">
            <Button
              data-ocid="cta.explore_programs.button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 shadow-[0_0_30px_rgba(0,209,255,0.25)] hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] transition-all"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Button
            data-ocid="cta.join_cohort.button"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 h-12 bg-transparent transition-all"
          >
            Join Next Cohort
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer id="contact" className="bg-[#0B1F3A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="mb-1">
              <span className="text-white font-display font-bold text-2xl tracking-tight">
                Lowcademy
              </span>
            </div>
            <div className="text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-4">
              by Ankit Gangrade
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Architect-led learning for the enterprise software era.
              OutSystems, low-code engineering, and AI-ready systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about", ocid: "footer.about.link" },
                {
                  label: "Corporate Training",
                  href: "#corporate",
                  ocid: "footer.corporate.link",
                },
                {
                  label: "Contact",
                  href: "#contact",
                  ocid: "footer.contact.link",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={link.ocid}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mt-6 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-white/50 text-sm cursor-default">
                      {item}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic text-white/50 text-sm leading-relaxed">
              Lowcademy
              <br />
              Sch. No 74, Vijay Nagar
              <br />
              Indore, Madhya Pradesh
              <br />
              India – 452010
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Lowcademy. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="hover:text-white/60 transition-colors underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhoHelpsSection />
        <WhySection />
        <ProgramsSection />
        <CorporateSection />
        <AboutSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
