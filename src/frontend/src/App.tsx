import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
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
  HardHat,
  Layers,
  Mail,
  MapPin,
  Menu,
  Network,
  Send,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Page =
  | "home"
  | "about"
  | "corporate"
  | "programs"
  | "contact"
  | "courses"
  | "cohort-details";

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
interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate("home");
    setMobileOpen(false);
  };

  const handleCorporateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate("corporate");
    setMobileOpen(false);
  };

  const handleHashLink = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        document
          .getElementById(hash.replace("#", ""))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(hash.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[#0B1F3A] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex flex-col leading-none cursor-pointer"
            data-ocid="nav.home.link"
          >
            <span className="text-white font-display font-bold text-xl tracking-tight">
              Lowcademy
            </span>
            <span className="text-[#00D1FF] text-[10px] font-medium tracking-widest uppercase">
              by Ankit Gangrade
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={handleHomeClick}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.about.link"
              onClick={() => {
                onNavigate("about");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "about"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              type="button"
              data-ocid="nav.courses.link"
              onClick={() => {
                onNavigate("courses");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "courses"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Courses
            </button>
            <button
              type="button"
              data-ocid="nav.corporate.link"
              onClick={handleCorporateClick}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "corporate"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Corporate Training
            </button>
            <button
              type="button"
              data-ocid="nav.programs.link"
              onClick={() => {
                onNavigate("programs");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "programs"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Programs
            </button>
            <button
              type="button"
              data-ocid="nav.contact.link"
              onClick={() => {
                onNavigate("contact");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "contact"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              data-ocid="nav.get_started.button"
              onClick={handleHashLink("#programs")}
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold text-sm px-5 h-9 rounded-md transition-colors"
            >
              Get Started
            </Button>
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
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={handleHomeClick}
              className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.about.link"
              onClick={() => {
                onNavigate("about");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "about"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              type="button"
              data-ocid="nav.courses.link"
              onClick={() => {
                onNavigate("courses");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "courses"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Courses
            </button>
            <button
              type="button"
              data-ocid="nav.corporate.link"
              onClick={handleCorporateClick}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "corporate"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Corporate Training
            </button>
            <button
              type="button"
              data-ocid="nav.programs.link"
              onClick={() => {
                onNavigate("programs");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "programs"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Programs
            </button>
            <button
              type="button"
              data-ocid="nav.contact.link"
              onClick={() => {
                onNavigate("contact");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "contact"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </button>
            <Button
              data-ocid="nav.mobile.get_started.button"
              className="w-full mt-2 bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold"
              onClick={handleHashLink("#programs")}
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

// ── Corporate Section (homepage teaser) ─────────────────────────────────────
function CorporateSection({
  onNavigate,
}: { onNavigate: (page: Page) => void }) {
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
            <Button
              data-ocid="corporate.programs.button"
              onClick={() => onNavigate("corporate")}
              className="bg-[#0B1F3A] hover:bg-[#0e2a4a] text-white font-bold px-8 h-12 transition-colors"
            >
              Corporate Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
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
              <li>
                <button
                  type="button"
                  data-ocid="footer.about.link"
                  onClick={() => onNavigate("about")}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.corporate.link"
                  onClick={() => onNavigate("corporate")}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Corporate Training
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.courses.link"
                  onClick={() => onNavigate("courses")}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.programs.link"
                  onClick={() => onNavigate("programs")}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="footer.contact.link"
                  onClick={() => onNavigate("contact")}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
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

// ── Programs Page ─────────────────────────────────────────────────────────────
function ProgramsPage({
  onNavigate: _onNavigate,
}: { onNavigate: (page: Page) => void }) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    message: "",
  });

  function handleApplySubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleDialogClose(open: boolean) {
    setApplyOpen(open);
    if (!open) setSubmitted(false);
  }

  return (
    <div className="pt-16">
      {/* Application Form Dialog */}
      <Dialog open={applyOpen} onOpenChange={handleDialogClose}>
        <DialogContent
          data-ocid="programs.apply_form.dialog"
          className="max-w-lg"
        >
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-[#0B1F3A] text-xl">
              Apply for the Next Cohort
            </DialogTitle>
          </DialogHeader>
          {submitted ? (
            <div
              data-ocid="programs.apply_form.success_state"
              className="py-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#00D1FF]/10 border-2 border-[#00D1FF]/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-[#00D1FF]" size={28} />
              </div>
              <p className="text-[#0B1F3A] font-semibold text-base leading-relaxed">
                Thank you for applying. Our team will review your application
                and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4 mt-2">
              <div>
                <Label
                  htmlFor="apply-name"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Name
                </Label>
                <Input
                  id="apply-name"
                  data-ocid="programs.apply_form.input"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="apply-email"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Email
                </Label>
                <Input
                  id="apply-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="apply-role"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Current Role
                </Label>
                <Input
                  id="apply-role"
                  required
                  placeholder="e.g. Software Developer"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, role: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="apply-exp"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Years of Experience
                </Label>
                <Input
                  id="apply-exp"
                  required
                  placeholder="e.g. 3"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, experience: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="apply-message"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Message
                </Label>
                <Textarea
                  id="apply-message"
                  placeholder="Tell us about yourself and why you want to join..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </div>
              <Button
                type="submit"
                data-ocid="programs.apply_form.submit_button"
                className="w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold h-11 rounded-md transition-all"
              >
                Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Hero */}
      <section
        data-ocid="programs.hero.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Live Cohort Programs
          </Badge>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Join the Next Live Cohort
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Architect-led programs where software professionals learn how real
            enterprise systems are designed and delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="programs.hero.primary_button"
              onClick={() => setApplyOpen(true)}
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Apply for Next Cohort
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              data-ocid="programs.hero.secondary_button"
              variant="outline"
              onClick={() => {
                document
                  .getElementById("upcoming-cohort")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-12 rounded-md transition-all"
            >
              View Program Overview
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Cohort */}
      <section
        id="upcoming-cohort"
        data-ocid="programs.upcoming.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Upcoming Cohort
          </Badge>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            OutSystems Architecture Accelerator
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            A live cohort learning experience designed for software
            professionals to develop enterprise system design thinking and
            real-world development practices.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {[
              { label: "Start Date", value: "TBA" },
              { label: "End Date", value: "TBA" },
              { label: "Mode", value: "Live Online" },
            ].map((detail) => (
              <div
                key={detail.label}
                className="bg-[#0B1F3A] rounded-xl p-5 text-center"
              >
                <div className="text-[#00D1FF] font-display font-bold text-base">
                  {detail.value}
                </div>
                <div className="text-white/50 text-xs mt-1 tracking-wide">
                  {detail.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              data-ocid="programs.upcoming.apply_button"
              onClick={() => setApplyOpen(true)}
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold px-8 h-11 rounded-md transition-all"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              data-ocid="programs.upcoming.curriculum_button"
              variant="outline"
              className="border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#0B1F3A]/5 font-semibold px-8 h-11 rounded-md transition-all"
            >
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section
        data-ocid="programs.audience.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Who Should Attend
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Who This Program Is For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Software Developers",
                desc: "Developers who want to strengthen enterprise software skills.",
              },
              {
                icon: Building2,
                title: "Engineering Professionals",
                desc: "Professionals working in real-world development teams.",
              },
              {
                icon: Layers,
                title: "Experienced Programmers",
                desc: "Developers who want to understand system design and architecture thinking.",
              },
              {
                icon: Users,
                title: "Technology Professionals",
                desc: "Anyone involved in building and delivering software systems.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-ocid={`programs.audience.card.${i + 1}`}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Learning Flow Timeline */}
      <section
        data-ocid="programs.timeline.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Program Structure
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              How the Cohort Works
            </h2>
          </div>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#0B1F3A]/10 hidden sm:block" />
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  activities: [
                    "Live Class",
                    "Pre-recorded Lecture",
                    "Exercises",
                    "Quiz",
                  ],
                  isFinal: false,
                },
                {
                  phase: "Phase 2",
                  activities: ["Live Class", "Assignments", "Quiz"],
                  isFinal: false,
                },
                {
                  phase: "Phase 3",
                  activities: [
                    "Live Class",
                    "Pre-recorded Concept",
                    "Hands-on Exercises",
                    "Quiz",
                  ],
                  isFinal: false,
                },
                {
                  phase: "Phase 4",
                  activities: [
                    "Live Class",
                    "Project Work",
                    "Pre-recorded Concepts",
                    "Doubt Clearing Session",
                    "Quiz",
                  ],
                  isFinal: false,
                },
                {
                  phase: "Final Phase",
                  activities: ["Final Assessment"],
                  isFinal: true,
                },
              ].map((p) => (
                <div key={p.phase} className="relative flex gap-6 items-start">
                  {/* Phase dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs border-2 ${
                      p.isFinal
                        ? "bg-[#00D1FF] border-[#00D1FF] text-[#0B1F3A]"
                        : "bg-white border-[#00D1FF] text-[#0B1F3A]"
                    }`}
                  >
                    {p.isFinal ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <span>{p.phase.replace("Phase ", "")}</span>
                    )}
                  </div>
                  {/* Phase content */}
                  <div
                    className={`flex-1 rounded-xl p-5 border ${
                      p.isFinal
                        ? "bg-[#0B1F3A] border-[#00D1FF]/30"
                        : "bg-[#F7F9FC] border-gray-100"
                    }`}
                  >
                    <h3
                      className={`font-display font-bold text-sm mb-3 ${
                        p.isFinal ? "text-[#00D1FF]" : "text-[#0B1F3A]"
                      }`}
                    >
                      {p.phase}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {p.activities.map((a) => (
                        <span
                          key={a}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            p.isFinal
                              ? "bg-[#00D1FF]/20 text-[#00D1FF]"
                              : "bg-white text-[#0B1F3A] border border-gray-200"
                          }`}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Program Different */}
      <section
        data-ocid="programs.differentiators.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Why Choose This Program
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              What Makes This Program Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Architect-Led Learning",
                desc: "Programs are designed and led by a practicing enterprise software architect.",
              },
              {
                icon: Users,
                title: "Live Cohort Experience",
                desc: "Interactive learning with real discussions and practical thinking.",
              },
              {
                icon: Globe,
                title: "Real Industry Context",
                desc: "Understand how enterprise software systems are designed and delivered.",
              },
              {
                icon: Network,
                title: "Practical System Thinking",
                desc: "Focus on architecture thinking, scalability, and real delivery practices.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-ocid={`programs.differentiators.card.${i + 1}`}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Learning Support */}
      <section
        data-ocid="programs.support.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Additional Support
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Beyond the Program
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Career Roadmap Guidance",
                desc: "Understand long-term career growth paths in software engineering and architecture.",
              },
              {
                icon: Briefcase,
                title: "Interview Preparation",
                desc: "Guidance on technical interviews and architecture discussions.",
              },
              {
                icon: BarChart3,
                title: "Industry Insights",
                desc: "Learn how real software teams operate in production environments.",
              },
              {
                icon: Users,
                title: "Community Interaction",
                desc: "Interact with other experienced software professionals.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-ocid={`programs.support.card.${i + 1}`}
                className="bg-[#F7F9FC] rounded-xl p-7 border border-gray-100 card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        data-ocid="programs.cta.section"
        className="relative bg-[#0B1F3A] py-20 lg:py-28 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Apply for the Next Cohort
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Limited seats to ensure interactive learning.
          </p>
          <Button
            data-ocid="programs.cta.primary_button"
            onClick={() => setApplyOpen(true)}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-10 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
// ── Contact Page ─────────────────────────────────────────────────────────────
function CohortDetailsPage({
  onNavigate,
}: { onNavigate: (page: Page) => void }) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    message: "",
  });

  function handleApplySubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleDialogClose(open: boolean) {
    setApplyOpen(open);
    if (!open) setSubmitted(false);
  }

  const weeks = [
    {
      label: "Week 1 — Foundations",
      days: [
        {
          day: 1,
          title: "Kickoff & Foundations",
          activities: [
            "Live Session: Welcome & Program Overview",
            "Pre-recorded: Introduction to Enterprise Architecture",
            "Exercise: Architecture thinking warm-up",
          ],
          outcome: "Understand the program structure and enterprise mindset",
        },
        {
          day: 2,
          title: "OutSystems Platform Deep Dive",
          activities: [
            "Live Session: OutSystems Architecture Overview",
            "Pre-recorded: Platform Capabilities & Limitations",
            "Hands-on: Build a basic OutSystems module",
            "Quiz: Platform fundamentals check",
          ],
          outcome: "Navigate and understand OutSystems confidently",
        },
        {
          day: 3,
          title: "System Design Thinking",
          activities: [
            "Live Session: How Real Systems Are Designed",
            "Pre-recorded: System Design Patterns in Low-Code",
            "Exercise: Design a simple enterprise module",
            "Quiz: System design concepts",
          ],
          outcome: "Apply design thinking to real problems",
        },
        {
          day: 4,
          title: "Application Scalability",
          activities: [
            "Live Session: Designing for Scale",
            "Pre-recorded: Scalability in OutSystems Applications",
            "Hands-on: Refactor a module for scalability",
            "Assignment: Document a scalability decision",
          ],
          outcome: "Design scalable application architectures",
        },
        {
          day: 5,
          title: "Delivery Frameworks",
          activities: [
            "Live Session: How Enterprise Teams Deliver Software",
            "Pre-recorded: Agile + Low-Code Delivery",
            "Exercise: Map a delivery workflow",
            "Quiz: Delivery concepts",
          ],
          outcome: "Understand delivery in enterprise context",
        },
      ],
    },
    {
      label: "Week 2 — Architecture Patterns",
      days: [
        {
          day: 6,
          title: "Team Collaboration Patterns",
          activities: [
            "Live Session: Working in Enterprise Teams",
            "Pre-recorded: Cross-team Architecture Coordination",
            "Exercise: Collaboration scenario analysis",
          ],
          outcome: "Navigate team dynamics in large projects",
        },
        {
          day: 7,
          title: "Integration Patterns",
          activities: [
            "Live Session: Enterprise Integration Architecture",
            "Pre-recorded: APIs, Services, and Data Flows",
            "Hands-on: Build an integration in OutSystems",
            "Quiz: Integration patterns",
          ],
          outcome: "Design integration-ready architectures",
        },
        {
          day: 8,
          title: "Real Project Case Study (Part 1)",
          activities: [
            "Live Session: Analyzing a Real Enterprise Project",
            "Pre-recorded: Case Study Walkthrough",
            "Exercise: Identify architecture decisions in the case",
          ],
          outcome: "Apply learnings to real-world context",
        },
        {
          day: 9,
          title: "Real Project Case Study (Part 2)",
          activities: [
            "Live Session: Architecture Decisions Deep Dive",
            "Exercise: Redesign a component of the case study",
            "Doubt Clearing Session",
          ],
          outcome: "Develop architecture judgment",
        },
        {
          day: 10,
          title: "Mid-Program Review",
          activities: [
            "Live Session: Progress Check & Open Discussion",
            "Quiz: Week 2 Knowledge Review",
            "Q&A with Instructor",
          ],
          outcome: "Consolidate learning from the first half",
        },
      ],
    },
    {
      label: "Week 3 — Advanced Concepts",
      days: [
        {
          day: 11,
          title: "Advanced Architecture Patterns",
          activities: [
            "Live Session: Complex System Design in Low-Code",
            "Pre-recorded: Advanced Patterns & Anti-patterns",
            "Hands-on: Implement an advanced pattern",
          ],
          outcome: "Handle complex architecture scenarios",
        },
        {
          day: 12,
          title: "Performance & Optimization",
          activities: [
            "Live Session: Application Performance in OutSystems",
            "Pre-recorded: Query Optimization & Caching",
            "Exercise: Performance analysis exercise",
            "Quiz: Performance concepts",
          ],
          outcome: "Build performant applications",
        },
        {
          day: 13,
          title: "Security & Governance",
          activities: [
            "Live Session: Enterprise Security Architecture",
            "Pre-recorded: Governance Models for Low-Code",
            "Exercise: Security review checklist",
          ],
          outcome: "Apply security thinking to designs",
        },
        {
          day: 14,
          title: "Architecture Documentation",
          activities: [
            "Live Session: Documenting Enterprise Systems",
            "Pre-recorded: Architecture Decision Records (ADRs)",
            "Exercise: Write an ADR for a design decision",
          ],
          outcome: "Communicate architecture effectively",
        },
        {
          day: 15,
          title: "Stakeholder Communication",
          activities: [
            "Live Session: Presenting Architecture to Business",
            "Pre-recorded: Non-technical Communication for Architects",
            "Exercise: Prepare a mini architecture presentation",
          ],
          outcome: "Bridge technical and business conversations",
        },
      ],
    },
    {
      label: "Week 4 — Capstone & Assessment",
      days: [
        {
          day: 16,
          title: "Capstone Project Kickoff",
          activities: [
            "Live Session: Project Brief & Requirements",
            "Pre-recorded: How to Structure Your Project",
            "Exercise: Define project scope and architecture",
          ],
          outcome: "Start building your capstone project",
        },
        {
          day: 17,
          title: "Capstone Project Work",
          activities: [
            "Project Work Session (self-paced)",
            "Doubt Clearing: Office Hours with Instructor",
          ],
          outcome: "Build the core of your capstone project",
        },
        {
          day: 18,
          title: "Capstone Project Completion",
          activities: [
            "Project Work Session (self-paced)",
            "Peer Review: Share with cohort members",
          ],
          outcome: "Complete and refine the capstone project",
        },
        {
          day: 19,
          title: "Final Review & Preparation",
          activities: [
            "Live Session: Program Summary & Key Takeaways",
            "Revision: Review key concepts from all modules",
            "Q&A Session: Final Doubt Clearing",
          ],
          outcome: "Prepare for the final assessment",
        },
        {
          day: 20,
          title: "Final Assessment",
          activities: [
            "Final Assessment (timed)",
            "Architecture Design Challenge",
            "Program Completion & Certificate",
          ],
          outcome: "Demonstrate full program mastery",
          isFinal: true,
        },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Apply Form Dialog */}
      <Dialog open={applyOpen} onOpenChange={handleDialogClose}>
        <DialogContent
          data-ocid="cohort.apply_form.dialog"
          className="max-w-lg"
        >
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-[#0B1F3A] text-xl">
              Apply for the Next Cohort
            </DialogTitle>
          </DialogHeader>
          {submitted ? (
            <div
              data-ocid="cohort.apply_form.success_state"
              className="py-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#00D1FF]/10 border-2 border-[#00D1FF]/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-[#00D1FF]" size={28} />
              </div>
              <p className="text-[#0B1F3A] font-semibold text-base leading-relaxed">
                Thank you for applying. Our team will review your application
                and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4 mt-2">
              <div>
                <Label
                  htmlFor="cohort-apply-name"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Name
                </Label>
                <Input
                  id="cohort-apply-name"
                  data-ocid="cohort.apply_form.input"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="cohort-apply-email"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Email
                </Label>
                <Input
                  id="cohort-apply-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="cohort-apply-role"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Current Role
                </Label>
                <Input
                  id="cohort-apply-role"
                  required
                  placeholder="e.g. Software Developer"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, role: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="cohort-apply-exp"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Years of Experience
                </Label>
                <Input
                  id="cohort-apply-exp"
                  required
                  placeholder="e.g. 3"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, experience: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="cohort-apply-msg"
                  className="text-[#0B1F3A] font-medium mb-1 block"
                >
                  Message
                </Label>
                <Textarea
                  id="cohort-apply-msg"
                  placeholder="Tell us about yourself and why you want to join..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </div>
              <Button
                type="submit"
                data-ocid="cohort.apply_form.submit_button"
                className="w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold h-11 rounded-md transition-all"
              >
                Submit Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Hero */}
      <section
        data-ocid="cohort.hero.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            data-ocid="cohort.hero.button"
            type="button"
            onClick={() => onNavigate("programs")}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </button>
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Cohort Curriculum
          </Badge>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            OutSystems Architecture Accelerator
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            A structured 4-week live cohort with day-by-day learning progression
            designed to build real enterprise architecture thinking.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              <Clock size={14} />4 Weeks · 20 Days
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              <Globe size={14} />
              Live Online
            </span>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        data-ocid="cohort.curriculum.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Full Curriculum
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Day-by-Day Curriculum
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Every day is structured for maximum learning — live sessions,
              self-paced content, exercises, and reflection.
            </p>
          </div>
          <div className="space-y-12">
            {weeks.map((week) => (
              <div key={week.label}>
                {/* Week divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-[#00D1FF]/20" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#00D1FF] bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full px-4 py-1.5">
                    {week.label}
                  </span>
                  <div className="flex-1 h-px bg-[#00D1FF]/20" />
                </div>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#0B1F3A]/10 hidden sm:block" />
                  <div className="space-y-6">
                    {week.days.map((d) => (
                      <div
                        key={d.day}
                        data-ocid={`cohort.curriculum.item.${d.day}`}
                        className="relative flex gap-6 items-start"
                      >
                        {/* Day circle */}
                        <div
                          className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                            d.isFinal
                              ? "bg-[#00D1FF] border-[#00D1FF] text-[#0B1F3A]"
                              : "bg-white border-[#00D1FF] text-[#0B1F3A]"
                          }`}
                        >
                          {d.isFinal ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <span>{d.day}</span>
                          )}
                        </div>
                        {/* Day card */}
                        <div
                          className={`flex-1 rounded-xl p-5 border ${
                            d.isFinal
                              ? "bg-[#0B1F3A] border-[#00D1FF]/30"
                              : "bg-[#F7F9FC] border-gray-100"
                          }`}
                        >
                          <h3
                            className={`font-display font-bold text-base mb-3 ${d.isFinal ? "text-[#00D1FF]" : "text-[#0B1F3A]"}`}
                          >
                            Day {d.day} — {d.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {d.activities.map((a) => (
                              <span
                                key={a}
                                className={`text-xs px-3 py-1 rounded-full font-medium ${
                                  d.isFinal
                                    ? "bg-[#00D1FF]/20 text-[#00D1FF]"
                                    : "bg-white text-[#0B1F3A] border border-gray-200"
                                }`}
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                          <p
                            className={`text-xs font-semibold ${d.isFinal ? "text-[#00D1FF]/80" : "text-[#00D1FF]"}`}
                          >
                            ✦ Outcome: {d.outcome}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section
        data-ocid="cohort.details.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Program Overview
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight">
              Program Details
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Clock, label: "Duration", value: "4 Weeks · 20 Days" },
              { icon: Globe, label: "Format", value: "Live Online Cohort" },
              { icon: Users, label: "Seats", value: "Limited Enrollment" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-display font-bold text-[#0B1F3A] text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#0B1F3A] border-2 border-[#00D1FF]/30 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-[#00D1FF]" size={28} />
            </div>
            <div>
              <p className="font-display font-black text-[#0B1F3A] text-lg">
                Ankit Gangrade
              </p>
              <p className="text-gray-500 text-sm">
                Enterprise Software Architect · Principal Consultant · Founder,
                Lowcademy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-ocid="cohort.cta.section"
        className="relative bg-[#0B1F3A] py-20 lg:py-28 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Ready to Join the Cohort?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Limited seats for each cohort to ensure high-quality, interactive
            learning.
          </p>
          <Button
            data-ocid="cohort.cta.primary_button"
            onClick={() => setApplyOpen(true)}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-10 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function ContactPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        data-ocid="contact.hero.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Get in Touch
          </Badge>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            For learning programs, corporate training, or collaboration
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section
        data-ocid="contact.form.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Send a Message
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight">
              Reach Out Directly
            </h2>
          </div>
          {submitted ? (
            <div
              data-ocid="contact.form.success_state"
              className="bg-[#00D1FF]/5 border border-[#00D1FF]/20 rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#00D1FF]/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="text-[#00D1FF]" size={28} />
              </div>
              <h3 className="font-display font-bold text-[#0B1F3A] text-2xl mb-3">
                Message Sent
              </h3>
              <p className="text-gray-600 text-base">
                Thank you for reaching out. We'll get back to you shortly at{" "}
                <strong>{formData.email}</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact.form.input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 text-[#0B1F3A] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    data-ocid="contact.email.input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 rounded-lg border border-gray-200 text-[#0B1F3A] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                >
                  Company
                </label>
                <input
                  id="contact-company"
                  data-ocid="contact.company.input"
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, company: e.target.value }))
                  }
                  placeholder="Your company or organization"
                  className="w-full h-11 px-4 rounded-lg border border-gray-200 text-[#0B1F3A] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  data-ocid="contact.form.textarea"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us about your learning goals or training needs..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#0B1F3A] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF] transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.form.submit_button"
                className="w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold h-12 rounded-md transition-all shadow-[0_0_20px_rgba(0,209,255,0.2)] hover:shadow-[0_0_30px_rgba(0,209,255,0.35)]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <section
        data-ocid="contact.details.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Our Details
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight">
              Find Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="text-[#00D1FF]" size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-3">
                  Address
                </h3>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
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
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center shrink-0 mt-1">
                <Mail className="text-[#00D1FF]" size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-3">
                  Email
                </h3>
                <a
                  href="mailto:contact@lowcademy.com"
                  className="text-[#00D1FF] text-sm font-medium hover:underline"
                >
                  contact@lowcademy.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-ocid="contact.cta.section"
        className="relative bg-[#0B1F3A] py-20 lg:py-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(0,209,255,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Start Your Low-Code Architecture Journey
          </h2>
          <Button
            data-ocid="contact.cta.primary_button"
            onClick={() => onNavigate("programs")}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-10 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

// ── Corporate Training Page ──────────────────────────────────────────────────
function CorporateTrainingPage() {
  const programs = [
    {
      icon: Layers,
      title: "OutSystems Architecture Enablement",
      description:
        "Structured guidance to help your team design scalable, maintainable OutSystems applications using proven enterprise architecture patterns.",
    },
    {
      icon: BarChart3,
      title: "Enterprise Application Design",
      description:
        "Workshops focused on translating complex enterprise requirements into well-structured OutSystems solutions that scale with your business.",
    },
    {
      icon: BookOpen,
      title: "Development Best Practices",
      description:
        "Embed OutSystems coding standards, performance patterns, and quality practices directly into your team's delivery workflow.",
    },
    {
      icon: Cpu,
      title: "Delivery Frameworks",
      description:
        "Adopt proven delivery methodologies for OutSystems projects — from sprint planning to release governance in enterprise environments.",
    },
  ];

  const audience = [
    {
      icon: Users,
      title: "Engineering Teams",
      description:
        "Upskill developers with hands-on OutSystems architecture training tailored to your organization's technology stack and delivery context.",
    },
    {
      icon: TrendingUp,
      title: "Technology Leaders",
      description:
        "Equip CTOs and technology directors with the architectural insight needed to make informed decisions about OutSystems strategy.",
    },
    {
      icon: Truck,
      title: "Delivery Managers",
      description:
        "Help delivery managers understand OutSystems project dynamics, dependencies, and delivery risks to lead teams more effectively.",
    },
    {
      icon: HardHat,
      title: "Enterprise Architects",
      description:
        "Deep-dive sessions for architects responsible for defining OutSystems governance, domain boundaries, and integration patterns.",
    },
  ];

  const formats = [
    {
      icon: Building2,
      title: "Private Corporate Workshops",
      description:
        "Dedicated, in-depth workshops designed exclusively for your organization — aligned to your team's current challenges and delivery goals.",
    },
    {
      icon: Users,
      title: "Team Enablement Programs",
      description:
        "Multi-session enablement journeys that progressively build your team's OutSystems architecture capability over weeks.",
    },
    {
      icon: UserCheck,
      title: "Architecture Mentoring",
      description:
        "One-on-one or small group mentoring with Ankit Gangrade, focused on real architectural decisions in your live OutSystems projects.",
    },
    {
      icon: Briefcase,
      title: "Enterprise Project Advisory",
      description:
        "Strategic advisory engagements for organizations navigating complex OutSystems implementations, migrations, or platform transformations.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        data-ocid="corporate_page.hero.section"
        className="relative bg-[#0B1F3A] pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
      >
        <NetworkBackground />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,209,255,0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-[#00D1FF] text-xs font-semibold tracking-wider uppercase">
              For Organizations
            </span>
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-6">
            Enable Your Entire
            <br />
            <span className="text-[#00D1FF]">OutSystems Team</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Architect-led programs designed for organizations building
            enterprise applications with OutSystems.
          </p>
          <a href="#contact">
            <Button
              data-ocid="corporate_page.cta.button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Request Corporate Training
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Corporate Programs */}
      <section
        data-ocid="corporate_page.programs.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Specialized Programs
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Corporate Training Programs
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Lowcademy provides specialized training for organizations
              including:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <div
                key={program.title}
                data-ocid={`corporate_page.programs.item.${i + 1}`}
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-card card-hover"
                style={{ borderTop: "2px solid #00D1FF" }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <program.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2 leading-snug">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section
        data-ocid="corporate_page.audience.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Target Audience
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Who This Is For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`corporate_page.audience.item.${i + 1}`}
                className="bg-white rounded-xl p-7 shadow-card card-hover border border-gray-100"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section
        data-ocid="corporate_page.formats.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Delivery Options
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Training Formats
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {formats.map((format, i) => (
              <div
                key={format.title}
                data-ocid={`corporate_page.formats.item.${i + 1}`}
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-card card-hover flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0B1F3A] flex items-center justify-center">
                  <format.icon className="text-[#00D1FF]" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                    {format.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {format.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Get Started?
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-5">
            Strengthen Your OutSystems
            <br />
            <span className="text-[#00D1FF]">Delivery Capability</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Work with a practicing enterprise architect to build lasting
            OutSystems capability across your entire organization.
          </p>
          <a href="#contact">
            <Button
              data-ocid="corporate_page.cta.button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 shadow-[0_0_30px_rgba(0,209,255,0.25)] hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] transition-all"
            >
              Request Corporate Training
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

// ── About Page ───────────────────────────────────────────────────────────────
function AboutPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const pillars = [
    {
      icon: Layers,
      title: "OutSystems Development",
      description:
        "Hands-on mastery of OutSystems — from core reactive web development to advanced module architecture and integration patterns.",
    },
    {
      icon: Network,
      title: "Enterprise Architecture Thinking",
      description:
        "Understand how large-scale systems are designed: domain boundaries, service composition, governance, and scalability.",
    },
    {
      icon: Cpu,
      title: "Low-Code Engineering",
      description:
        "Engineering discipline applied to low-code platforms — performance, maintainability, testing, and delivery best practices.",
    },
    {
      icon: BarChart3,
      title: "AI-Ready Software Delivery",
      description:
        "Design OutSystems applications that incorporate AI capabilities without introducing technical debt or architectural fragility.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        data-ocid="about.hero.section"
        className="relative bg-[#0B1F3A] pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
      >
        <NetworkBackground />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,209,255,0.05) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00D1FF]">
              About Lowcademy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Architect-Led Learning for the{" "}
            <span className="text-[#00D1FF]">Enterprise Software Era</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Lowcademy is built to help developers understand how real enterprise
            systems are designed and delivered.
          </p>
        </div>
      </section>

      {/* About Lowcademy */}
      <section
        data-ocid="about.lowcademy.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              The Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-5 tracking-tight">
              What Is Lowcademy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lowcademy is a focused learning platform built for developers and
              organizations working in the enterprise software space. Every
              program is grounded in the architectural thinking and delivery
              discipline that real enterprise projects demand — not generic
              tutorials or surface-level introductions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  data-ocid={`about.lowcademy.item.${i + 1}`}
                  className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-[#00D1FF]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center mb-4 group-hover:bg-[#00D1FF]/10 transition-colors">
                    <Icon
                      size={22}
                      className="text-[#0B1F3A] group-hover:text-[#00D1FF] transition-colors"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1F3A] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section
        data-ocid="about.founder.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#0B1F3A]/8 text-[#0B1F3A] border-[#0B1F3A]/10 text-xs font-semibold tracking-wider uppercase">
              The Founder
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              About the Founder
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-72 bg-[#0B1F3A] p-10 flex flex-col items-center justify-center text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#00D1FF]/20 border-2 border-[#00D1FF]/40 flex items-center justify-center mb-5">
                  <span className="text-2xl font-bold text-[#00D1FF]">AG</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Ankit Gangrade
                </h3>
                <p className="text-[#00D1FF] text-sm font-medium leading-snug">
                  Enterprise Software Architect
                </p>
                <p className="text-white/60 text-sm mt-0.5">
                  Principal Consultant
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 w-full">
                  <p className="text-white/40 text-xs tracking-widest uppercase">
                    Lowcademy Founder
                  </p>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  Ankit Gangrade works with organizations to design scalable
                  systems, mentor engineering teams, and improve software
                  delivery practices. With deep experience across enterprise
                  software projects, he brings architectural clarity to
                  organizations navigating complex delivery challenges.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  He specializes in OutSystems architecture and enterprise
                  delivery enablement — helping teams move from functional
                  development to deliberate, scalable software design.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Lowcademy shares this real industry experience directly with
                  developers and organizations — no padding, no generic content.
                  Just the architectural thinking that makes enterprise systems
                  succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        data-ocid="about.mission.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Our Mission
          </Badge>
          <div className="relative">
            <div
              className="text-8xl text-[#00D1FF]/15 font-serif leading-none mb-2 select-none"
              aria-hidden="true"
            >
              "
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B1F3A] leading-snug tracking-tight -mt-6">
              Lowcademy exists to bridge the gap between academic learning and
              real enterprise software development.
            </p>
            <div className="mt-8 w-16 h-1 bg-[#00D1FF] mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-ocid="about.cta.section"
        className="relative bg-[#0B1F3A] py-20 lg:py-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(0,209,255,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Learn from a Practicing Enterprise Architect
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Programs built on real architectural experience — not academic
            theory or generic course content.
          </p>
          <Button
            data-ocid="about.explore_programs.button"
            onClick={() => onNavigate("home")}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold px-8 h-12 rounded-md text-base transition-colors"
          >
            Explore Programs
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}

// ── Courses Page ─────────────────────────────────────────────────────────────
function CoursesPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const courses = [
    {
      title: "OutSystems Fundamentals",
      description:
        "Learn the foundations of building applications using the OutSystems low-code platform.",
      level: "Beginner",
      levelColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      duration: "6 Hours",
      type: "Self-Paced",
      icon: BookOpen,
      ocid: "courses.catalog.item.1",
    },
    {
      title: "OutSystems Architecture Essentials",
      description:
        "Understand how enterprise applications are structured using OutSystems architecture patterns.",
      level: "Intermediate",
      levelColor: "bg-amber-50 text-amber-700 border border-amber-200",
      duration: "8 Hours",
      type: "Self-Paced",
      icon: Layers,
      ocid: "courses.catalog.item.2",
    },
    {
      title: "Enterprise Low-Code Development",
      description:
        "Learn best practices for building scalable enterprise applications using low-code platforms.",
      level: "Advanced",
      levelColor: "bg-[#00D1FF]/10 text-[#0B1F3A] border border-[#00D1FF]/30",
      duration: "10 Hours",
      type: "Self-Paced",
      icon: Globe,
      ocid: "courses.catalog.item.3",
    },
  ];

  const differentiators = [
    {
      icon: Layers,
      title: "Architect Perspective",
      desc: "Courses are designed from real enterprise architecture experience, not just platform documentation.",
    },
    {
      icon: Network,
      title: "Practical Thinking",
      desc: "Focus on real system design, scalability decisions, and architectural trade-offs — not just platform features.",
    },
    {
      icon: Building2,
      title: "Enterprise Context",
      desc: "Understand how software systems operate inside real organizations, teams, and delivery environments.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        data-ocid="courses.hero.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Self-Paced Learning
          </Badge>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Self-Paced OutSystems Learning
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Learn enterprise low-code development through structured self-paced
            programs designed by Enterprise Software Architect Ankit Gangrade.
          </p>
          <a href="#course-catalog">
            <Button
              data-ocid="courses.hero.primary_button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Course Catalog */}
      <section
        id="course-catalog"
        data-ocid="courses.catalog.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Course Catalog
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Self-Paced Courses
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                data-ocid={course.ocid}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                style={{ borderTop: "3px solid #00D1FF" }}
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center">
                      <course.icon className="text-[#00D1FF]" size={22} />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${course.levelColor}`}
                    >
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#0B1F3A] text-xl mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-5 mb-6 border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <Clock size={13} className="text-[#00D1FF]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <UserCheck size={13} className="text-[#00D1FF]" />
                      <span>{course.type}</span>
                    </div>
                  </div>
                  <Button
                    data-ocid={`${course.ocid}.button`}
                    className="w-full bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-semibold h-10 rounded-lg transition-colors"
                  >
                    View Course
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section
        data-ocid="courses.approach.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
              Our Approach
            </Badge>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              What Makes Lowcademy Courses Different
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center mb-6">
                  <item.icon className="text-[#00D1FF]" size={22} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-ocid="courses.cta.section"
        className="relative bg-[#0B1F3A] py-20 lg:py-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(0,209,255,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Start Building Real Enterprise Skills
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              data-ocid="courses.cta.primary_button"
              onClick={() => onNavigate("programs")}
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="#course-catalog">
              <Button
                data-ocid="courses.cta.secondary_button"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 h-12 rounded-md bg-transparent transition-all"
              >
                View All Courses
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === "home" ? (
          <>
            <HeroSection />
            <WhoHelpsSection />
            <WhySection />
            <ProgramsSection />
            <CorporateSection onNavigate={handleNavigate} />
            <AboutSection />
            <BlogSection />
            <CtaSection />
          </>
        ) : currentPage === "about" ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : currentPage === "programs" ? (
          <ProgramsPage onNavigate={handleNavigate} />
        ) : currentPage === "contact" ? (
          <ContactPage onNavigate={handleNavigate} />
        ) : currentPage === "courses" ? (
          <CoursesPage onNavigate={handleNavigate} />
        ) : currentPage === "cohort-details" ? (
          <CohortDetailsPage onNavigate={handleNavigate} />
        ) : (
          <CorporateTrainingPage />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
