import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Bot,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  HardHat,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Network,
  Quote,
  Send,
  Star,
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
  | "cohort-details"
  | "course-details"
  | "cohort-landing"
  | "event";

// ── Cohort Config (edit these values to update cohort details) ──────────────
const COHORT_CONFIG = {
  programTitle: "OutSystems + ODC + Agentic AI Career Accelerator",
  startDate: "July 2026",
  duration: "8 Weeks",
  landingUrl: "#", // Update with real cohort landing page URL
};

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
  onOpenLeadForm: () => void;
}

function Header({ currentPage, onNavigate, onOpenLeadForm }: HeaderProps) {
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

  const _handleHashLink = (hash: string) => (e: React.MouseEvent) => {
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
                currentPage === "programs" || currentPage === "cohort-landing"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Programs
            </button>
            <button
              type="button"
              data-ocid="nav.event.link"
              onClick={() => onNavigate("event")}
              className={`text-sm font-medium transition-colors duration-150 ${
                currentPage === "event"
                  ? "text-[#00D1FF]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Event
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
              onClick={onOpenLeadForm}
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
                currentPage === "programs" || currentPage === "cohort-landing"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Programs
            </button>
            <button
              type="button"
              data-ocid="nav.event.link"
              onClick={() => {
                onNavigate("event");
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 transition-colors ${
                currentPage === "event"
                  ? "text-[#00D1FF]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Event
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
              onClick={onOpenLeadForm}
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
function HeroSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
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
          Actually Design Systems
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Architect-led learning by{" "}
          <span className="text-white font-medium">Ankit Gangrade</span> — a
          practicing Enterprise Architect helping developers understand real
          enterprise system design, architecture thinking, and delivery
          practices.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            data-ocid="hero.explore_programs.button"
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            data-ocid="hero.join_cohort.button"
            variant="outline"
            onClick={() => onNavigate("cohort-landing")}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 h-12 rounded-md bg-transparent transition-all"
          >
            Check-out Next Cohort
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "10+ Years Enterprise Experience",
            "500+ Professionals Impacted",
            "Real Enterprise System Experience",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 text-white/60 text-xs font-medium"
            >
              <span className="w-1 h-1 rounded-full bg-[#00D1FF]" />
              {item}
            </span>
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
      icon: GraduationCap,
      title: "Students",
      description:
        "Helping graduates move beyond academic knowledge and understand real enterprise software development.",
      tag: "Foundational Skills",
    },
    {
      icon: Briefcase,
      title: "Software Professionals",
      description:
        "Helping developers move from coding mindset to architecture and system design thinking.",
      tag: "Career Growth",
    },
    {
      icon: Building2,
      title: "Organizations",
      description:
        "Helping companies enable their OutSystems teams to deliver enterprise-grade applications.",
      tag: "Team Enablement",
    },
  ];

  return (
    <section id="who" className="bg-[#F7F9FC] py-20 lg:py-28">
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
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-ocid={`who.card.${i + 1}`}
              className="group bg-white border border-gray-100 rounded-xl p-8 card-hover shadow-card"
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

// ── Meet the Architect ───────────────────────────────────────────────────────
function MeetTheArchitectSection({
  onNavigate,
}: { onNavigate: (page: Page) => void }) {
  const credentials = [
    "Enterprise Software Architect",
    "Principal Consultant",
    "OutSystems Specialist",
  ];

  return (
    <section id="architect" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:hidden">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            The Architect
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight">
            Meet the Architect Behind Lowcademy
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-last lg:order-first">
            <div
              className="absolute -inset-4 rounded-2xl opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,209,255,0.15), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-card max-w-sm mx-auto">
              <img
                src="https://static.wixstatic.com/media/83c4df_891db97947eb462b8549e5e152249333~mv2.avif/v1/fill/w_372,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Who-Is-Ankit-Gangrade.avif"
                alt="Ankit Gangrade — Enterprise Software Architect and Principal Consultant"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-4 bg-[#0B1F3A] text-white rounded-xl px-5 py-3 shadow-xl">
              <div className="text-[#00D1FF] font-display font-black text-2xl">
                10+
              </div>
              <div className="text-white/60 text-xs mt-0.5">
                Years Enterprise
              </div>
            </div>
          </div>

          <div>
            <div className="hidden lg:block mb-4">
              <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
                The Architect
              </p>
              <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-2">
                Meet the Architect Behind Lowcademy
              </h2>
            </div>
            <h3 className="font-display font-black text-[#0B1F3A] text-2xl sm:text-3xl mt-2 mb-1">
              Ankit Gangrade
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {credentials.map((c) => (
                <Badge
                  key={c}
                  className="bg-[#00D1FF]/10 text-[#0B1F3A] border border-[#00D1FF]/30 text-xs font-medium px-3 py-1"
                >
                  {c}
                </Badge>
              ))}
            </div>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Lowcademy is led by a practicing architect who designs and
              delivers real enterprise systems. Ankit Gangrade works with
              organizations to design scalable systems, mentor engineering
              teams, and improve software delivery practices.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lowcademy brings this real industry experience directly to
              developers and teams — so that enterprise architecture thinking is
              accessible to everyone building serious software.
            </p>
            <Button
              data-ocid="architect.about.button"
              onClick={() => onNavigate("about")}
              variant="outline"
              className="border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-bold px-8 h-12 transition-colors"
            >
              About Ankit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How You Can Learn ───────────────────────────────────────────────────────
function HowYouCanLearnSection({
  onNavigate,
  onOpenLeadForm,
}: {
  onNavigate: (page: Page) => void;
  onOpenLeadForm: () => void;
}) {
  const cards = [
    {
      icon: Globe,
      title: "Free Learning",
      description:
        "Explore architecture thinking, OutSystems insights, and enterprise development concepts through free educational content.",
      button: {
        label: "Watch on YouTube",
        action: () => window.open("https://youtube.com/@lowcademy/", "_blank"),
        ocid: "learn.youtube.button",
        variant: "outline" as const,
      },
    },
    {
      icon: BookOpen,
      title: "Self-Paced Programs",
      description:
        "Structured programs designed to help developers build strong foundations in OutSystems and enterprise application development.",
      button: {
        label: "Explore Programs",
        action: () => onNavigate("courses"),
        ocid: "learn.self_paced.button",
        variant: "default" as const,
      },
    },
    {
      icon: Users,
      title: "Live Architect Cohorts",
      description:
        "Small-group deep learning programs focused on architecture thinking, enterprise system design, and real-world delivery practices.",
      button: {
        label: "View Next Cohort",
        action: () => onNavigate("cohort-landing"),
        ocid: "learn.cohort.button",
        variant: "default" as const,
      },
    },
    {
      icon: Building2,
      title: "Corporate Enablement",
      description:
        "Capability development programs designed to help organizations strengthen their OutSystems development and architecture practices.",
      button: {
        label: "Contact for Corporate Training",
        action: onOpenLeadForm,
        ocid: "learn.corporate.button",
        variant: "outline" as const,
      },
    },
  ];

  return (
    <section id="learn" className="bg-[#F7F9FC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Learning Paths
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            How You Can Learn at Lowcademy
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Choose your learning path
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-7 shadow-card border border-gray-100 flex flex-col card-hover"
            >
              <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                <card.icon className="text-[#00D1FF]" size={20} />
              </div>
              <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {card.description}
              </p>
              <Button
                data-ocid={card.button.ocid}
                onClick={card.button.action}
                variant={card.button.variant}
                className={
                  card.button.variant === "default"
                    ? "w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold h-10 text-sm transition-colors"
                    : "w-full border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-semibold h-10 text-sm transition-colors"
                }
              >
                {card.button.label}
              </Button>
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
        "Learn from someone designing real enterprise systems — not just teaching theory.",
    },
    {
      icon: Globe,
      title: "Enterprise Perspective",
      description:
        "Understand architecture, scalability, and long-term system design as practiced in real organizations.",
    },
    {
      icon: Network,
      title: "Real Project Thinking",
      description:
        "Learn patterns used in real enterprise projects — from DDD to delivery frameworks.",
    },
    {
      icon: TrendingUp,
      title: "Delivery Mindset",
      description:
        "Learn how systems are actually built and delivered in organizations — beyond just writing code.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
            The Difference
          </p>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Why Developers and Architects Choose Lowcademy
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F7F9FC] rounded-xl p-7 card-hover border border-gray-100"
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

// ── For Organizations ────────────────────────────────────────────────────────
function ForOrganizationsSection({
  onNavigate,
  onOpenLeadForm,
}: {
  onNavigate: (page: Page) => void;
  onOpenLeadForm: () => void;
}) {
  const capabilities = [
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
              Lowcademy provides architect-led programs for organizations
              looking to strengthen their OutSystems development teams and
              enterprise delivery capabilities.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                data-ocid="orgs.enquiry.button"
                onClick={onOpenLeadForm}
                className="bg-[#0B1F3A] hover:bg-[#0e2a4a] text-white font-bold px-8 h-12 transition-colors"
              >
                Corporate Enquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                data-ocid="orgs.corporate_page.button"
                onClick={() => onNavigate("corporate")}
                variant="outline"
                className="border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-semibold px-8 h-12 transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((item) => (
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
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop&q=80",
    },
    {
      tag: "AI in Software",
      title: "The Enterprise Architect's Guide to AI-Ready Systems",
      excerpt:
        "AI integration isn't a feature — it's an architectural decision. How to design OutSystems apps that incorporate AI without technical debt.",
      readTime: "12 min read",
      date: "Feb 2025",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop&q=80",
    },
    {
      tag: "Low-Code Engineering",
      title: "OutSystems Performance Patterns Every Architect Should Know",
      excerpt:
        "From aggregate queries to asynchronous timers — the performance patterns that separate professional OutSystems delivery from amateur builds.",
      readTime: "10 min read",
      date: "Jan 2025",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
              </div>
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
function CtaSection({
  onNavigate,
}: {
  onNavigate: (page: Page) => void;
}) {
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
          Programs designed to help developers think beyond coding and
          understand how real enterprise systems are designed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            data-ocid="cta.explore_programs.button"
            onClick={() => onNavigate("courses")}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 shadow-[0_0_30px_rgba(0,209,255,0.25)] hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] transition-all"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            data-ocid="cta.join_cohort.button"
            onClick={() => onNavigate("cohort-landing")}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 h-12 bg-transparent transition-all"
          >
            Check Out Next Cohort
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── Lead Form Popup ───────────────────────────────────────────────────────────
function LeadFormDialog({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
  });

  function handleClose(val: boolean) {
    if (!val) {
      onClose();
      if (submitted) {
        setTimeout(() => setSubmitted(false), 300);
        setTimeout(
          () =>
            setFormData({
              name: "",
              email: "",
              phone: "",
              role: "",
              experience: "",
              message: "",
            }),
          400,
        );
      }
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="lead_form.dialog"
        className="max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="font-display font-bold text-[#0B1F3A] text-xl">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div
            data-ocid="lead_form.success_state"
            className="text-center py-10"
          >
            <CheckCircle2 className="text-[#00D1FF] mx-auto mb-4" size={48} />
            <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
              Thank You!
            </h3>
            <p className="text-gray-500 text-sm">
              We will get in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label
                htmlFor="lf-name"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Name *
              </Label>
              <Input
                id="lf-name"
                data-ocid="lead_form.input"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="lf-email"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Email *
              </Label>
              <Input
                id="lf-email"
                data-ocid="lead_form.input"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="lf-phone"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Phone
              </Label>
              <Input
                id="lf-phone"
                data-ocid="lead_form.input"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, phone: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="lf-role"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Current Role
              </Label>
              <Input
                id="lf-role"
                data-ocid="lead_form.input"
                placeholder="e.g. Software Developer"
                value={formData.role}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, role: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="lf-exp"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Years of Experience
              </Label>
              <Input
                id="lf-exp"
                data-ocid="lead_form.input"
                placeholder="e.g. 3"
                value={formData.experience}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, experience: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="lf-msg"
                className="text-[#0B1F3A] font-medium text-sm"
              >
                Message
              </Label>
              <Textarea
                id="lf-msg"
                data-ocid="lead_form.textarea"
                placeholder="Tell us about your learning goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className="mt-1"
                rows={3}
              />
            </div>
            <Button
              data-ocid="lead_form.submit_button"
              type="submit"
              className="w-full bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold h-11"
            >
              Submit
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
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
function ProgramsPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="pt-16">
      {/* Section 1 — Hero */}
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
          <Button
            data-ocid="programs.hero.primary_button"
            onClick={() => onNavigate("cohort-landing")}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-10 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] mb-8"
          >
            Check out Next Cohort
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              `Next Start: ${COHORT_CONFIG.startDate}`,
              `Duration: ${COHORT_CONFIG.duration}`,
              "Mode: Live Online",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium border border-white/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Upcoming Cohort Program */}
      <section
        data-ocid="programs.upcoming.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-[#00D1FF]/10 text-[#0B1F3A] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Upcoming Cohort Program
          </Badge>
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            {COHORT_CONFIG.programTitle}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A live cohort learning experience designed for software
            professionals who want to build enterprise applications using
            OutSystems, explore the OutSystems Developer Cloud (ODC), and
            understand how modern AI-assisted applications are built using
            Agentic AI approaches. This program focuses not only on tools but on
            developing the thinking required to design and deliver real
            enterprise systems.
          </p>
        </div>
      </section>

      {/* Section 3 — Architect-Led Learning */}
      <section
        data-ocid="programs.architect.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight mb-6">
                Architect-Led Learning
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                This program is designed and delivered by Enterprise Software
                Architect Ankit Gangrade. With extensive experience designing
                enterprise systems and leading real-world software delivery,
                this cohort focuses on how modern applications are actually
                built in production environments. Instead of focusing only on
                platform features, the program teaches architectural thinking,
                system design, and delivery practices used by professional
                teams.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/20 to-[#0B1F3A]/10 blur-xl" />
                <img
                  src="https://static.wixstatic.com/media/83c4df_891db97947eb462b8549e5e152249333~mv2.avif/v1/fill/w_372,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Who-Is-Ankit-Gangrade.avif"
                  alt="Ankit Gangrade"
                  className="relative w-64 rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="mt-4 text-center lg:text-right">
                <p className="font-display font-bold text-[#0B1F3A] text-lg">
                  Ankit Gangrade
                </p>
                <p className="text-slate-500 text-sm">
                  Enterprise Software Architect · Principal Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Why This Program Exists */}
      <section
        data-ocid="programs.why.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight mb-8">
            Why This Program Exists
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Most developers learn platforms and tools. Very few learn how real
            enterprise systems are designed and delivered. This program bridges
            that gap by focusing on architectural thinking, real-world
            constraints, and practical system design decisions used in
            production environments. Participants learn not only how to build
            applications, but how to think like engineers responsible for real
            systems.
          </p>
        </div>
      </section>

      {/* Section 5 — What You Will Walk Away With */}
      <section
        data-ocid="programs.outcomes.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight text-center mb-12">
            What You Will Walk Away With
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Code2 size={22} />,
                title: "Enterprise Application Development",
                desc: "Build scalable applications using OutSystems and modern development practices.",
              },
              {
                icon: <Cloud size={22} />,
                title: "OutSystems Developer Cloud (ODC)",
                desc: "Learn how modern cloud-native OutSystems platforms work.",
              },
              {
                icon: <Cpu size={22} />,
                title: "AI-Assisted Application Development",
                desc: "Understand how Agentic AI can be used to build intelligent applications.",
              },
              {
                icon: <TrendingUp size={22} />,
                title: "Career Roadmap in OutSystems Ecosystem",
                desc: "Understand how to grow from developer to senior engineer and architect roles.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`programs.outcomes.card.${idx + 1}`}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center text-[#0B1F3A] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Who This Program Is For */}
      <section
        data-ocid="programs.who.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight text-center mb-12">
            Who This Program Is For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 size={20} />,
                title: "Software Developers",
                desc: "Developers who want to transition into enterprise-grade development.",
              },
              {
                icon: <Users size={20} />,
                title: "Engineering Professionals",
                desc: "Professionals working in real-world delivery teams.",
              },
              {
                icon: <Layers size={20} />,
                title: "Experienced Programmers",
                desc: "Developers who want to strengthen system design thinking.",
              },
              {
                icon: <Building2 size={20} />,
                title: "Technology Professionals",
                desc: "Anyone involved in designing, building, or delivering software systems.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`programs.who.card.${idx + 1}`}
                className="bg-[#F7F9FC] rounded-xl p-6 border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#00D1FF]/10 flex items-center justify-center text-[#0B1F3A] mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — How the Cohort Learning Cycle Works */}
      <section
        data-ocid="programs.cycle.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight text-center mb-4">
            How the Cohort Learning Cycle Works
          </h2>
          <p className="text-slate-500 text-center text-sm mb-12">
            This cycle continues throughout the cohort.
          </p>
          <div className="space-y-4">
            {[
              {
                step: "Step 1",
                title: "Live Architectural Session",
                desc: "Concepts explained through real-world examples.",
                highlight: false,
              },
              {
                step: "Step 2",
                title: "Guided Implementation",
                desc: "Participants implement concepts through practical exercises.",
                highlight: false,
              },
              {
                step: "Step 3",
                title: "Assignments & Practice",
                desc: "Hands-on development tasks to strengthen understanding.",
                highlight: false,
              },
              {
                step: "Step 4",
                title: "Review & Next Session",
                desc: "Discussion, feedback, and deeper architectural insights.",
                highlight: false,
              },
              {
                step: "Final",
                title: "Final Assessment and Program Review",
                desc: "Comprehensive evaluation and program completion.",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`flex items-start gap-5 p-5 rounded-xl border ${
                  item.highlight
                    ? "bg-[#0B1F3A] border-[#00D1FF]/30 text-white"
                    : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                <div
                  className={`min-w-[60px] text-center font-display font-black text-sm uppercase tracking-widest pt-0.5 ${item.highlight ? "text-[#00D1FF]" : "text-[#00D1FF]"}`}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className={`font-display font-bold text-lg mb-1 ${item.highlight ? "text-white" : "text-[#0B1F3A]"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${item.highlight ? "text-white/70" : "text-slate-500"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — What Makes This Program Different */}
      <section
        data-ocid="programs.different.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight text-center mb-12">
            What Makes This Program Different
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Star size={20} />,
                title: "Architect-Led Learning",
                desc: "Programs designed and led by a practicing enterprise architect.",
              },
              {
                icon: <Users size={20} />,
                title: "Live Cohort Interaction",
                desc: "Real-time discussions, feedback, and collaborative learning.",
              },
              {
                icon: <Building2 size={20} />,
                title: "Real Industry Context",
                desc: "Learn from systems built and delivered in real organizations.",
              },
              {
                icon: <Layers size={20} />,
                title: "Practical System Thinking",
                desc: "Focus on architecture, scalability, and delivery thinking.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`programs.different.card.${idx + 1}`}
                className="bg-[#F7F9FC] rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center text-[#0B1F3A] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Beyond the Program */}
      <section
        data-ocid="programs.beyond.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight text-center mb-12">
            Beyond the Program
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp size={20} />,
                title: "Career Roadmap Guidance",
                desc: "Understand pathways from developer to architect roles.",
              },
              {
                icon: <Briefcase size={20} />,
                title: "Interview Preparation",
                desc: "Prepare for enterprise software and architecture interviews.",
              },
              {
                icon: <Lightbulb size={20} />,
                title: "Industry Insights",
                desc: "Access real-world patterns from enterprise software delivery.",
              },
              {
                icon: <Users size={20} />,
                title: "Community Interaction",
                desc: "Connect with professionals on the same learning journey.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`programs.beyond.card.${idx + 1}`}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#00D1FF]/10 flex items-center justify-center text-[#0B1F3A] mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Limited Cohort Size */}
      <section
        data-ocid="programs.limited.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl tracking-tight mb-8">
            Limited Cohort Size
          </h2>
          <div className="bg-[#0B1F3A]/5 border border-[#00D1FF]/20 rounded-2xl p-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              Each cohort is intentionally limited to a small group of
              participants to ensure meaningful discussions, direct feedback,
              and deeper architectural learning.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11 — Final CTA */}
      <section
        data-ocid="programs.cta.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Apply for the Next Cohort
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Limited seats to ensure interactive learning.
          </p>
          <Button
            data-ocid="programs.cta.primary_button"
            onClick={() => onNavigate("cohort-landing")}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-10 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Check out Next Cohort
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

// ── Course Details Page ──────────────────────────────────────────────────────
function CourseDetailsPage({
  onNavigate,
}: { onNavigate: (page: Page) => void }) {
  return (
    <div className="pt-16">
      <section className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden">
        <NetworkBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/20 text-xs font-semibold tracking-wider uppercase">
            Course Details
          </Badge>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            OutSystems + ODC + Agentic AI Career Accelerator
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Full course details coming soon. This page is being designed.
          </p>
          <Button
            data-ocid="course-details.back.button"
            onClick={() => onNavigate("programs")}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-12 rounded-md"
          >
            Back to Programs
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

  // Cohort meta
  const cohortMeta = {
    title: "OutSystems Architecture Accelerator",
    subtitle:
      "A structured 4-week live cohort with day-by-day learning progression designed to build real enterprise architecture thinking.",
    startingFrom: "March 15, 2026",
    endingOn: "April 11, 2026",
    totalSessions: "20 Days",
  };

  const allDays = [
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
  ];

  // Start date: March 15, 2026
  const startDate = new Date(2026, 2, 15);

  function getDayDate(dayNum: number): string {
    const d = new Date(startDate);
    d.setDate(d.getDate() + dayNum - 1);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function extractTopics(activities: string[]): string {
    return activities
      .map((a) => {
        const colonIdx = a.indexOf(":");
        if (colonIdx !== -1) return a.slice(colonIdx + 1).trim();
        return a.trim();
      })
      .join(", ");
  }

  function getActivityTags(
    activities: string[],
  ): { label: string; icon: string }[] {
    const tags: { label: string; icon: string }[] = [];
    const lower = activities.map((a) => a.toLowerCase());
    if (lower.some((a) => a.startsWith("live session")))
      tags.push({ label: "Live Session", icon: "🎙️" });
    if (lower.some((a) => a.startsWith("pre-recorded")))
      tags.push({ label: "Pre-Recorded", icon: "📹" });
    if (
      lower.some(
        (a) =>
          a.startsWith("hands-on") ||
          a.startsWith("exercise") ||
          a.startsWith("project work"),
      )
    )
      tags.push({ label: "Hands-on Exercise", icon: "🛠️" });
    if (lower.some((a) => a.startsWith("quiz")))
      tags.push({ label: "Quiz", icon: "❓" });
    if (lower.some((a) => a.startsWith("assignment")))
      tags.push({ label: "Assignment", icon: "📝" });
    return tags.slice(0, 3);
  }

  // Inter-day content between day N and day N+1 — always show typical fillers
  function getInterDayItems(
    dayIndex: number,
  ): { label: string; icon: string }[] {
    const patterns = [
      [
        { label: "Pre-Recorded session available", icon: "📹" },
        { label: "Quiz to attempt", icon: "❓" },
      ],
      [
        { label: "Assignments to complete", icon: "📝" },
        { label: "Pre-Recorded session available", icon: "📹" },
      ],
      [
        { label: "Exercises to practice", icon: "🛠️" },
        { label: "Quiz to attempt", icon: "❓" },
      ],
      [
        { label: "Pre-Recorded session available", icon: "📹" },
        { label: "Assignments to complete", icon: "📝" },
        { label: "Quiz to attempt", icon: "❓" },
      ],
    ];
    return patterns[dayIndex % patterns.length];
  }

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
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            {cohortMeta.title}
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            {cohortMeta.subtitle}
          </p>
          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              <Calendar size={14} />
              Starting From: {cohortMeta.startingFrom}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              <Calendar size={14} />
              Ending On: {cohortMeta.endingOn}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              <Clock size={14} />
              Total Sessions: {cohortMeta.totalSessions}
            </span>
          </div>
          <Button
            data-ocid="cohort.hero.primary_button"
            onClick={() => setApplyOpen(true)}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Day-by-Day Curriculum */}
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
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
              Every day is structured for maximum learning — live sessions,
              self-paced content, exercises, and reflection.
            </p>
          </div>

          {/* Flat timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D1FF]/30 via-[#0B1F3A]/10 to-[#00D1FF]/30 hidden sm:block" />

            <div className="space-y-0">
              {allDays.map((d, idx) => {
                const _tags = getActivityTags(d.activities);
                const topics = extractTopics(d.activities);
                const dayDate = getDayDate(d.day);
                const isLast = idx === allDays.length - 1;
                const interItems = !isLast ? getInterDayItems(idx) : [];

                return (
                  <div key={d.day}>
                    {/* Day row */}
                    <div
                      data-ocid={`cohort.curriculum.item.${d.day}`}
                      className="relative flex gap-5 sm:gap-6 items-start"
                    >
                      {/* Day circle */}
                      <div
                        className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 ${d.isFinal ? "bg-[#00D1FF] border-[#00D1FF] text-[#0B1F3A]" : "bg-white border-[#00D1FF] text-[#0B1F3A]"}`}
                      >
                        {d.isFinal ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          <span>{d.day}</span>
                        )}
                      </div>

                      {/* Day card */}
                      <div
                        className={`flex-1 rounded-xl border mb-0 ${d.isFinal ? "bg-[#0B1F3A] border-[#00D1FF]/40" : "bg-[#F7F9FC] border-gray-200"} p-5 shadow-sm`}
                      >
                        {/* Header row: title + date + final badge */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3
                            className={`font-display font-bold text-base leading-snug ${d.isFinal ? "text-[#00D1FF]" : "text-[#0B1F3A]"}`}
                          >
                            Day {d.day} — {d.title}
                          </h3>
                          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            {d.isFinal && (
                              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#00D1FF] text-[#0B1F3A] shadow-sm">
                                ✓ Final Assessment
                              </span>
                            )}
                            <span
                              className={`text-xs font-semibold whitespace-nowrap px-2 py-0.5 rounded-full border ${d.isFinal ? "text-[#00D1FF]/80 border-[#00D1FF]/30 bg-[#00D1FF]/10" : "text-[#00D1FF] border-[#00D1FF]/30 bg-[#00D1FF]/5"}`}
                            >
                              {dayDate}
                            </span>
                          </div>
                        </div>

                        {/* Live Sessions highlight */}
                        {d.activities.filter((a) =>
                          a.startsWith("Live Session:"),
                        ).length > 0 && (
                          <div
                            className={`mb-3 pl-3 border-l-2 border-[#00D1FF] rounded-r-md py-2 ${d.isFinal ? "bg-[#00D1FF]/10" : "bg-[#00D1FF]/5"}`}
                          >
                            <p className="text-xs font-bold text-[#00D1FF] mb-1">
                              🎙️ Live Session
                            </p>
                            {d.activities
                              .filter((a) => a.startsWith("Live Session:"))
                              .map((a) => (
                                <p
                                  key={a}
                                  className={`text-sm leading-snug ${d.isFinal ? "text-white/90" : "text-[#0B1F3A]"}`}
                                >
                                  {a.replace("Live Session:", "").trim()}
                                </p>
                              ))}
                          </div>
                        )}

                        {/* Learning & Outcome */}
                        <p
                          className={`text-sm mb-2 ${d.isFinal ? "text-white/70" : "text-gray-700"}`}
                        >
                          <span
                            className={`font-semibold ${d.isFinal ? "text-white" : "text-[#0B1F3A]"}`}
                          >
                            Learning:{" "}
                          </span>
                          {topics}
                        </p>

                        <p
                          className={`text-sm mb-3 ${d.isFinal ? "text-[#00D1FF]/80" : "text-[#0B1F3A]/70"}`}
                        >
                          <span
                            className={`font-semibold ${d.isFinal ? "text-[#00D1FF]" : "text-[#0B1F3A]"}`}
                          >
                            Outcome:{" "}
                          </span>
                          {d.outcome}
                        </p>

                        {/* Followed By section */}
                        {(() => {
                          const lower = d.activities.map((a) =>
                            a.toLowerCase(),
                          );
                          const followedBy: {
                            label: string;
                            icon: string;
                            colorClass: string;
                          }[] = [];
                          if (
                            lower.some(
                              (a) =>
                                a.startsWith("assignment") ||
                                (a.startsWith("hands-on") &&
                                  a.includes("assignment")),
                            )
                          )
                            followedBy.push({
                              label: "Assignment",
                              icon: "📝",
                              colorClass:
                                "bg-amber-100 text-amber-700 border-amber-200",
                            });
                          if (
                            lower.some(
                              (a) =>
                                a.startsWith("exercise") ||
                                a.startsWith("hands-on"),
                            )
                          )
                            followedBy.push({
                              label: "Exercise",
                              icon: "🛠️",
                              colorClass:
                                "bg-blue-100 text-blue-700 border-blue-200",
                            });
                          if (lower.some((a) => a.startsWith("quiz")))
                            followedBy.push({
                              label: "Quiz",
                              icon: "❓",
                              colorClass:
                                "bg-green-100 text-green-700 border-green-200",
                            });
                          if (followedBy.length === 0) return null;
                          return (
                            <div
                              className={`flex flex-wrap items-center gap-2 pt-2.5 border-t ${d.isFinal ? "border-white/10" : "border-gray-200"}`}
                            >
                              <span
                                className={`text-xs font-semibold ${d.isFinal ? "text-white/50" : "text-gray-400"} mr-0.5`}
                              >
                                Followed By:
                              </span>
                              {followedBy.map((fb) => (
                                <span
                                  key={fb.label}
                                  className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-semibold border ${d.isFinal ? "bg-white/10 text-white/80 border-white/20" : fb.colorClass}`}
                                >
                                  {fb.icon} {fb.label}
                                </span>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Inter-day connector */}
                    {!isLast && interItems.length > 0 && (
                      <div className="relative flex gap-5 sm:gap-6 items-center py-3 pl-0">
                        {/* Spacer to align with cards */}
                        <div className="flex-shrink-0 w-12 flex justify-center">
                          <div className="w-1.5 h-full min-h-[2px] bg-transparent" />
                        </div>
                        <div className="flex-1 flex flex-wrap gap-2 opacity-60">
                          {interItems.map((item) => (
                            <span
                              key={item.label}
                              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-dashed border-gray-300 bg-gray-50 text-gray-500 font-medium"
                            >
                              {item.icon} {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Enroll Now button at end of curriculum */}
            <div className="flex justify-center mt-12">
              <Button
                data-ocid="cohort.curriculum.primary_button"
                onClick={() => setApplyOpen(true)}
                className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-12 h-13 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.35)] min-w-[220px]"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
function CorporateTrainingPage({
  onOpenLeadForm,
}: {
  onOpenLeadForm: () => void;
}) {
  const enablementAreas = [
    {
      icon: Layers,
      title: "OutSystems Architecture Enablement",
      description:
        "Help teams design scalable, maintainable applications using proven enterprise architecture patterns.",
    },
    {
      icon: BarChart3,
      title: "Enterprise Application Design",
      description:
        "Workshops focused on translating complex enterprise requirements into structured OutSystems solutions.",
    },
    {
      icon: BookOpen,
      title: "Development Best Practices",
      description:
        "Establish coding standards, architecture patterns, and quality practices for enterprise delivery.",
    },
    {
      icon: Cpu,
      title: "Delivery Frameworks",
      description:
        "Adopt modern delivery models for OutSystems projects from planning to production.",
    },
  ];

  const audience = [
    {
      icon: Users,
      title: "Engineering Teams",
      description: "Teams building enterprise applications using OutSystems.",
    },
    {
      icon: TrendingUp,
      title: "Technology Leaders",
      description:
        "Leaders responsible for architecture decisions and delivery quality.",
    },
    {
      icon: Truck,
      title: "Delivery Managers",
      description: "Managers overseeing enterprise software delivery.",
    },
    {
      icon: HardHat,
      title: "Enterprise Architects",
      description: "Architects designing scalable application ecosystems.",
    },
  ];

  const formats = [
    {
      icon: Building2,
      title: "Private Corporate Workshops",
      description: "Programs delivered specifically for one organization.",
    },
    {
      icon: Users,
      title: "Team Enablement Programs",
      description:
        "Multi-session programs designed to strengthen internal teams.",
    },
    {
      icon: UserCheck,
      title: "Architecture Advisory Sessions",
      description: "Architectural reviews and technical guidance.",
    },
    {
      icon: Briefcase,
      title: "Enterprise Project Enablement",
      description:
        "Support for organizations launching new OutSystems initiatives.",
    },
  ];

  const whyWork = [
    {
      icon: GraduationCap,
      title: "Architect-Led Programs",
      description:
        "Programs designed and delivered by an enterprise software architect.",
    },
    {
      icon: Globe,
      title: "Real Delivery Experience",
      description: "Focused on real-world enterprise delivery challenges.",
    },
    {
      icon: Lightbulb,
      title: "Practical Enablement",
      description:
        "Hands-on sessions focused on real system design and development.",
    },
    {
      icon: Star,
      title: "Customized for Each Organization",
      description:
        "Programs adapted to the organization's architecture and delivery maturity.",
    },
  ];

  const challenges = [
    "Scaling applications beyond initial implementations",
    "Maintaining consistent architecture across teams",
    "Establishing development standards and best practices",
    "Ensuring delivery quality across large projects",
  ];

  const testimonials = [
    {
      quote:
        "Working with Ankit transformed how our team approaches OutSystems architecture. The depth of real enterprise experience brought to every session was invaluable. Our team now designs systems with a completely different mindset.",
      name: "Rajesh Kumar",
      designation: "Senior Engineering Lead",
      organization: "TechCorp India",
    },
    {
      quote:
        "The architecture enablement program gave our team a framework for building scalable OutSystems applications that we continue to use in every project. The focus on real enterprise patterns made all the difference.",
      name: "Priya Sharma",
      designation: "Technology Director",
      organization: "Enterprise Solutions Ltd",
    },
  ];

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section
        data-ocid="corporate_page.hero.section"
        className="relative bg-[#0B1F3A] pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
      >
        <NetworkBackground />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)",
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
            Enable Enterprise-Grade
            <br />
            <span className="text-[#00D1FF]">OutSystems Delivery</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Architect-led enablement programs designed for organizations
            building and scaling enterprise applications with OutSystems.
          </p>
          <Button
            data-ocid="corporate_page.hero.primary_button"
            onClick={onOpenLeadForm}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
          >
            Request Corporate Enablement
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* SECTION 2 — CHALLENGES */}
      <section
        data-ocid="corporate_page.challenges.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              The Reality
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Challenges Many OutSystems Teams Face
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Organizations adopting OutSystems often encounter challenges as
              applications and delivery teams grow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {challenges.map((challenge, i) => (
              <div
                key={challenge}
                data-ocid={`corporate_page.challenges.item.${i + 1}`}
                className="flex items-start gap-3 bg-[#F7F9FC] rounded-xl p-5 border border-gray-100"
              >
                <CheckCircle2
                  className="text-[#00D1FF] flex-shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-[#0B1F3A] font-medium text-sm leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-base">
            Lowcademy works with organizations to strengthen engineering
            capability and delivery maturity.
          </p>
        </div>
      </section>

      {/* SECTION 3 — ENABLEMENT AREAS */}
      <section
        data-ocid="corporate_page.programs.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Corporate Enablement Programs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enablementAreas.map((area, i) => (
              <div
                key={area.title}
                data-ocid={`corporate_page.programs.item.${i + 1}`}
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-card card-hover"
                style={{ borderTop: "2px solid #00D1FF" }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <area.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <section
        data-ocid="corporate_page.audience.section"
        className="bg-white py-20 lg:py-28"
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
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-card card-hover"
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

      {/* SECTION 5 — ENGAGEMENT FORMATS */}
      <section
        data-ocid="corporate_page.formats.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Engagement Models
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Corporate Engagement Formats
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt, i) => (
              <div
                key={fmt.title}
                data-ocid={`corporate_page.formats.item.${i + 1}`}
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-card card-hover"
                style={{ borderTop: "2px solid #00D1FF" }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <fmt.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2 leading-snug">
                  {fmt.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {fmt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY ORGANIZATIONS WORK WITH LOWCADEMY */}
      <section
        data-ocid="corporate_page.why.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Our Differentiators
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Why Organizations Work With Lowcademy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`corporate_page.why.item.${i + 1}`}
                className="bg-[#F7F9FC] border border-gray-100 rounded-xl p-7 card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5">
                  <item.icon className="text-[#00D1FF]" size={20} />
                </div>
                <h3 className="font-display font-bold text-[#0B1F3A] text-lg mb-2 leading-snug">
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

      {/* SECTION 7 — TESTIMONIALS */}
      <section
        data-ocid="corporate_page.testimonials.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              Client Feedback
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
              What Clients Say
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Feedback from professionals and organizations who have worked with
              Lowcademy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-ocid={`corporate_page.testimonials.item.${i + 1}`}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_4px_32px_rgba(0,209,255,0.12)] hover:border-[#00D1FF]/20 transition-all duration-300"
              >
                <Quote className="text-[#00D1FF] mb-5 opacity-80" size={28} />
                <p className="text-gray-700 text-base leading-relaxed mb-7 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-display font-bold text-[#0B1F3A] text-base">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm">{t.designation}</p>
                  <p className="text-[#00D1FF] text-sm font-medium">
                    {t.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — ABOUT INSTRUCTOR */}
      <section
        data-ocid="corporate_page.instructor.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-3">
              The Expert
            </p>
            <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              About the Instructor
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center bg-[#F7F9FC] rounded-2xl p-8 border border-gray-100">
            <div className="flex-shrink-0">
              <img
                src="https://static.wixstatic.com/media/83c4df_891db97947eb462b8549e5e152249333~mv2.avif/v1/fill/w_372,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Who-Is-Ankit-Gangrade.avif"
                alt="Ankit Gangrade"
                className="w-40 h-40 object-cover object-top rounded-full border-4 border-[#00D1FF]/20 shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-[#0B1F3A] text-2xl mb-1">
                Ankit Gangrade
              </h3>
              <p className="text-[#00D1FF] font-semibold text-sm mb-4">
                Enterprise Software Architect
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Ankit specializes in OutSystems architecture and enterprise
                application delivery. He works with organizations to strengthen
                engineering capability, improve architectural practices, and
                enable scalable software delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section
        data-ocid="corporate_page.cta.section"
        className="relative bg-[#0B1F3A] py-24 lg:py-32 overflow-hidden"
      >
        <NetworkBackground />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#00D1FF] text-sm font-semibold tracking-widest uppercase mb-5">
            Get in Touch
          </p>
          <h2 className="font-display font-black text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-5">
            Strengthen Your OutSystems
            <br />
            <span className="text-[#00D1FF]">Delivery Capability</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Discuss how Lowcademy can support your organization's engineering
            teams.
          </p>
          <Button
            data-ocid="corporate_page.cta.button"
            onClick={onOpenLeadForm}
            className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 shadow-[0_0_30px_rgba(0,209,255,0.25)] hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] transition-all"
          >
            Request Corporate Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
  const [activeTab, setActiveTab] = useState<"free" | "self-paced" | "cohort">(
    "self-paced",
  );

  const freeCourses = [
    {
      title: "OutSystems Basics",
      description:
        "Get started with OutSystems — build your first app and understand the core development model.",
      duration: "2 Hours",
      icon: BookOpen,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.free.item.1",
    },
    {
      title: "OutSystems UI Fundamentals",
      description:
        "Learn how to build responsive, professional-looking screens using OutSystems UI framework.",
      duration: "2.5 Hours",
      icon: Layers,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.free.item.2",
    },
    {
      title: "Introduction to OutSystems Logic",
      description:
        "Understand how to build application logic, workflows, and integrations in OutSystems.",
      duration: "2 Hours",
      icon: Network,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.free.item.3",
    },
  ];

  const selfPacedCourses = [
    {
      title: "OutSystems Fundamentals",
      description:
        "Learn the foundations of building applications using the OutSystems low-code platform.",
      level: "Beginner",
      levelColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      duration: "6 Hours",
      icon: BookOpen,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.catalog.item.1",
    },
    {
      title: "OutSystems Architecture Essentials",
      description:
        "Understand how enterprise applications are structured using OutSystems architecture patterns.",
      level: "Intermediate",
      levelColor: "bg-amber-50 text-amber-700 border border-amber-200",
      duration: "8 Hours",
      icon: Layers,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.catalog.item.2",
    },
    {
      title: "Enterprise Low-Code Development",
      description:
        "Learn best practices for building scalable enterprise applications using low-code platforms.",
      level: "Advanced",
      levelColor: "bg-[#00D1FF]/10 text-[#0B1F3A] border border-[#00D1FF]/30",
      duration: "10 Hours",
      icon: Globe,
      link: "https://lowcademy.grafikart.fr",
      ocid: "courses.catalog.item.3",
    },
  ];

  const cohortProgram = {
    title: "OutSystems Career Accelerator",
    description:
      "A live mentor-led cohort designed to help developers transition into enterprise-grade OutSystems development.",
    nextCohort: "June 2026",
    duration: "6 Weeks",
    seats: "Limited Seats Available",
    link: "https://lowcademy.grafikart.fr",
  };

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

  const tabs: {
    label: string;
    value: "free" | "self-paced" | "cohort";
    ocid: string;
  }[] = [
    { label: "Free Courses", value: "free", ocid: "courses.tab.free" },
    {
      label: "Self-Paced Programs",
      value: "self-paced",
      ocid: "courses.tab.self-paced",
    },
    { label: "Live Cohort", value: "cohort", ocid: "courses.tab.cohort" },
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
            Learn enterprise low-code development through structured programs
            designed by Enterprise Software Architect Ankit Gangrade.
          </p>
          <a href="#course-catalog">
            <Button
              data-ocid="courses.hero.primary_button"
              className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
            >
              Browse Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Tab Navigation + Course Catalog */}
      <section
        id="course-catalog"
        data-ocid="courses.catalog.section"
        className="bg-white py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Nav */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                  <button
                    type="button"
                    key={tab.value}
                    data-ocid={tab.ocid}
                    onClick={() => setActiveTab(tab.value)}
                    className={[
                      "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                      isActive
                        ? "bg-[#00D1FF] text-[#0B1F3A] border-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.4)] font-bold"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#00D1FF]/50 hover:text-[#0B1F3A]",
                    ].join(" ")}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Free Courses */}
          {activeTab === "free" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeCourses.map((course) => (
                <div
                  key={course.title}
                  data-ocid={course.ocid}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#00D1FF]/40 transition-all duration-300 flex flex-col cursor-pointer"
                  style={{ borderTop: "3px solid #00D1FF" }}
                  onClick={() => window.open(course.link, "_blank")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && window.open(course.link, "_blank")
                  }
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center">
                        <course.icon className="text-[#00D1FF]" size={22} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Free
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-[#0B1F3A] text-xl mb-3 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-6 border-t border-gray-100 pt-5">
                      <Clock size={13} className="text-[#00D1FF]" />
                      <span>{course.duration}</span>
                    </div>
                    <Button
                      data-ocid={`${course.ocid}.button`}
                      className="w-full bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-semibold h-10 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(course.link, "_blank");
                      }}
                    >
                      View Course
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Self-Paced Programs */}
          {activeTab === "self-paced" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selfPacedCourses.map((course) => (
                <div
                  key={course.title}
                  data-ocid={course.ocid}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#00D1FF]/40 transition-all duration-300 flex flex-col cursor-pointer"
                  style={{ borderTop: "3px solid #00D1FF" }}
                  onClick={() => window.open(course.link, "_blank")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && window.open(course.link, "_blank")
                  }
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
                        <span>Self-Paced</span>
                      </div>
                    </div>
                    <Button
                      data-ocid={`${course.ocid}.button`}
                      className="w-full bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-semibold h-10 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(course.link, "_blank");
                      }}
                    >
                      View Course
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Live Cohort */}
          {activeTab === "cohort" && (
            <div className="flex justify-center">
              <div
                data-ocid="courses.cohort.card"
                className="w-full max-w-2xl bg-gradient-to-br from-[#0B1F3A]/5 to-[#00D1FF]/5 border border-gray-200 rounded-2xl shadow-md overflow-hidden"
              >
                <div className="h-[3px] bg-[#00D1FF]" />
                <div className="p-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#00D1FF]/10 text-[#0B1F3A] border border-[#00D1FF]/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
                    Live Cohort
                  </span>
                  <h2 className="font-display font-black text-[#0B1F3A] text-3xl sm:text-4xl mb-4 leading-tight">
                    {cohortProgram.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {cohortProgram.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Calendar size={16} className="text-[#00D1FF] shrink-0" />
                      <span>
                        Next Cohort: <strong>{cohortProgram.nextCohort}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Clock size={16} className="text-[#00D1FF] shrink-0" />
                      <span>
                        Duration: <strong>{cohortProgram.duration}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Users size={16} className="text-[#00D1FF] shrink-0" />
                      <span>
                        <strong>{cohortProgram.seats}</strong>
                      </span>
                    </div>
                  </div>
                  <Button
                    data-ocid="courses.cohort.primary_button"
                    className="bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-white font-bold px-8 h-12 rounded-lg shadow-md transition-all hover:shadow-lg"
                    onClick={() => window.open(cohortProgram.link, "_blank")}
                  >
                    View Cohort Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What Makes Lowcademy Courses Different */}
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
        className="bg-[#0B1F3A] py-20 lg:py-28 relative overflow-hidden"
      >
        <NetworkBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Start Building Real Enterprise Skills
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Choose your learning path and start developing enterprise-grade
            OutSystems expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#course-catalog">
              <Button
                data-ocid="courses.cta.primary_button"
                className="bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-base px-8 h-12 rounded-md shadow-[0_0_30px_rgba(0,209,255,0.25)] transition-all hover:shadow-[0_0_40px_rgba(0,209,255,0.4)]"
              >
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Button
              data-ocid="courses.cta.secondary_button"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 h-12 rounded-md"
              onClick={() => onNavigate("programs")}
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── CohortLandingPage ─────────────────────────────────────────────────────────
const cohortConfig = {
  enrollmentMode: "lead-capture" as "lead-capture" | "direct-enrollment",
  checkoutUrl: "#",
  price: "₹ Contact for Pricing",
  seatsAvailable: "Limited",
  programTitle: "OutSystems + ODC + Agentic AI Career Accelerator",
  programSubtitle:
    "Build enterprise-grade applications using OutSystems, explore the OutSystems Developer Cloud, and learn how AI-assisted applications are designed using Agentic AI approaches.",
  startDate: "June 2026",
  duration: "6 Weeks",
  schedule: "Weekends, 10:00 AM – 12:30 PM IST",
  mode: "Live Online",
  overview:
    "This cohort is designed for software professionals who want to build modern enterprise applications using OutSystems.\n\nParticipants will learn how to design scalable applications, explore the OutSystems Developer Cloud (ODC), and understand how modern AI-assisted workflows can be implemented using Agentic AI approaches.\n\nThe program focuses on practical development experience and architectural thinking used in real production environments.",
};

function CohortLandingPage({
  onNavigate,
  onOpenLeadForm,
}: {
  onNavigate: (page: Page) => void;
  onOpenLeadForm: () => void;
}) {
  const infoBadges = [
    { label: "Start Date", value: cohortConfig.startDate },
    { label: "Duration", value: cohortConfig.duration },
    { label: "Schedule", value: cohortConfig.schedule },
    { label: "Mode", value: cohortConfig.mode },
  ];

  const handlePrimaryAction = () => {
    if (cohortConfig.enrollmentMode === "lead-capture") {
      onOpenLeadForm();
    } else {
      window.open(cohortConfig.checkoutUrl, "_blank");
    }
  };

  const overviewParagraphs = cohortConfig.overview.split("\n\n");

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section
        data-ocid="cohort_landing.hero.section"
        className="relative bg-[#0B1F3A] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #00D1FF 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #00D1FF 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-[#00D1FF] text-xs font-semibold tracking-wider uppercase">
              Live Cohort Program
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {cohortConfig.programTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {cohortConfig.programSubtitle}
          </p>

          {/* Info badges row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {infoBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
              >
                <span className="text-white/50 text-xs font-medium uppercase tracking-wide">
                  {badge.label}
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="text-white text-sm font-semibold">
                  {badge.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              data-ocid="cohort_landing.apply.primary_button"
              onClick={handlePrimaryAction}
              className="px-8 py-3.5 bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-semibold text-sm rounded-md transition-colors shadow-lg shadow-[#00D1FF]/20 min-w-[180px]"
            >
              {cohortConfig.enrollmentMode === "lead-capture"
                ? "Apply for Cohort"
                : "Enroll Now"}
            </button>
            <button
              type="button"
              data-ocid="cohort_landing.view_agenda.secondary_button"
              onClick={() => onNavigate("cohort-details")}
              className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-md transition-colors min-w-[180px]"
            >
              View Full Agenda
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAM OVERVIEW */}
      <section
        data-ocid="cohort_landing.overview.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Program Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              About This Cohort
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="space-y-5">
            {overviewParagraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS COHORT IS FOR */}
      <section
        data-ocid="cohort_landing.audience.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Ideal Audience
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              Who This Cohort Is For
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Code2",
                title: "Software Developers",
                description:
                  "Developers transitioning into enterprise low-code development and exploring modern application platforms.",
              },
              {
                icon: "Briefcase",
                title: "Engineering Professionals",
                description:
                  "Developers working on real production systems who want to strengthen architectural thinking and system design skills.",
              },
              {
                icon: "Layers",
                title: "OutSystems Developers",
                description:
                  "Professionals expanding their expertise into OutSystems Developer Cloud and modern enterprise application architecture.",
              },
              {
                icon: "Cpu",
                title: "Technology Professionals",
                description:
                  "Engineers interested in understanding how AI-assisted applications and modern development workflows are designed.",
              },
            ].map((card, i) => {
              const icons: Record<string, React.ReactNode> = {
                Code2: <Code2 className="w-6 h-6 text-[#00D1FF]" />,
                Briefcase: <Briefcase className="w-6 h-6 text-[#00D1FF]" />,
                Layers: <Layers className="w-6 h-6 text-[#00D1FF]" />,
                Cpu: <Cpu className="w-6 h-6 text-[#00D1FF]" />,
              };
              return (
                <div
                  key={card.title}
                  data-ocid={`cohort_landing.audience.item.${i + 1}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#00D1FF]/30"
                >
                  <div className="w-12 h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center mb-4">
                    {icons[card.icon]}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT YOU WILL LEARN */}
      <section
        data-ocid="cohort_landing.outcomes.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Learning Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              What You Will Learn
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 className="w-6 h-6 text-[#00D1FF]" />,
                title: "Building Enterprise Applications with OutSystems",
                description:
                  "Learn how to design and build scalable applications using the OutSystems platform.",
              },
              {
                icon: <Cloud className="w-6 h-6 text-[#00D1FF]" />,
                title: "Understanding OutSystems Developer Cloud (ODC)",
                description:
                  "Explore how cloud-native development works within the modern OutSystems ecosystem.",
              },
              {
                icon: <Bot className="w-6 h-6 text-[#00D1FF]" />,
                title: "Designing Applications with AI-Assisted Workflows",
                description:
                  "Understand how agentic AI concepts can be integrated into modern enterprise applications.",
              },
              {
                icon: <CheckSquare className="w-6 h-6 text-[#00D1FF]" />,
                title: "Enterprise Development Best Practices",
                description:
                  "Learn real-world engineering practices used in production environments.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-[#00D1FF]" />,
                title: "Career Growth in the OutSystems Ecosystem",
                description:
                  "Understand how developers progress from platform usage to architectural roles.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                data-ocid={`cohort_landing.outcomes.item.${i + 1}`}
                className="bg-[#F7F9FC] rounded-xl p-6 border border-gray-100 hover:border-[#00D1FF]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CURRICULUM PREVIEW */}
      <section
        data-ocid="cohort_landing.curriculum.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Program Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              Program Curriculum
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
            <p>
              The cohort follows a structured learning journey across multiple
              live sessions. Each session focuses on a specific aspect of
              enterprise application development and system design.
            </p>
            <p>
              Participants attend live sessions where concepts are explained,
              demonstrated, and discussed in depth. After each session,
              participants complete guided exercises using pre-recorded
              walkthroughs and assignments.
            </p>
            <p>
              These exercises help reinforce the concepts covered during the
              live sessions and prepare participants for the next session. To
              explore the complete day-by-day learning journey, you can view the
              full program agenda.
            </p>
          </div>
          <div className="text-center">
            <button
              type="button"
              data-ocid="cohort_landing.view_agenda.button"
              onClick={() => onNavigate("cohort-details")}
              className="px-8 py-3.5 bg-transparent border-2 border-[#0B1F3A] text-[#0B1F3A] font-semibold text-sm rounded-md hover:bg-[#0B1F3A] hover:text-white transition-colors"
            >
              View Full Agenda
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LEARNING STRUCTURE */}
      <section
        data-ocid="cohort_landing.learning_structure.section"
        className="bg-[#0B1F3A] py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #00D1FF 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Learning Structure
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                step: 1,
                title: "Live Session",
                description:
                  "Concepts are explained through live sessions where architectural thinking and development practices are demonstrated.",
              },
              {
                step: 2,
                title: "Guided Practice",
                description:
                  "Participants follow structured walkthroughs and demonstrations that reinforce the concepts introduced during the live session.",
              },
              {
                step: 3,
                title: "Assignments",
                description:
                  "Participants complete hands-on development exercises designed to strengthen practical understanding.",
              },
              {
                step: 4,
                title: "Review Session",
                description:
                  "Key implementation decisions and architectural considerations are discussed and reviewed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                data-ocid={`cohort_landing.learning_structure.item.${item.step}`}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00D1FF]/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#00D1FF] text-[#0B1F3A] font-bold text-base flex items-center justify-center mb-4 shadow-lg shadow-[#00D1FF]/30">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm italic">
            This learning cycle continues throughout the duration of the cohort.
          </p>
        </div>
      </section>

      {/* SECTION 7 — INSTRUCTOR */}
      <section
        data-ocid="cohort_landing.instructor.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Your Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              Meet Your Instructor
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-56 lg:w-64 flex-shrink-0">
                <img
                  src="https://static.wixstatic.com/media/83c4df_891db97947eb462b8549e5e152249333~mv2.avif/v1/fill/w_372,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Who-Is-Ankit-Gangrade.avif"
                  alt="Ankit Gangrade"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full px-3 py-1 mb-4 self-start">
                  <span className="text-[#00D1FF] text-xs font-semibold tracking-wider uppercase">
                    Cohort Lead
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-1">
                  Ankit Gangrade
                </h3>
                <p className="text-[#00D1FF] text-sm font-semibold mb-5">
                  Enterprise Software Architect
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Ankit specializes in OutSystems architecture and enterprise
                  application delivery. The program focuses on practical
                  architectural thinking, real-world development practices, and
                  insights gained from production environments. Participants
                  learn not only platform usage but also how modern enterprise
                  systems are designed and delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SEATS & PRICING */}
      <section
        data-ocid="cohort_landing.pricing.section"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
            Enrollment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-10">
            Seats &amp; Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F7F9FC] rounded-xl p-8 border border-gray-100">
              <p className="text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-2">
                Program Fee
              </p>
              <p className="text-3xl font-bold text-[#0B1F3A]">
                {cohortConfig.price}
              </p>
            </div>
            <div className="bg-[#F7F9FC] rounded-xl p-8 border border-gray-100">
              <p className="text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-2">
                Seats Available
              </p>
              <p className="text-3xl font-bold text-[#0B1F3A]">
                {cohortConfig.seatsAvailable}
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Seats are intentionally limited to ensure meaningful interaction,
            deeper discussion, and direct feedback during the cohort sessions.
          </p>
          <button
            type="button"
            data-ocid="cohort_landing.pricing.primary_button"
            onClick={handlePrimaryAction}
            className="px-10 py-4 bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-sm rounded-md transition-colors shadow-lg shadow-[#00D1FF]/20"
          >
            {cohortConfig.enrollmentMode === "lead-capture"
              ? "Apply Now"
              : "Enroll Now"}
          </button>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section
        data-ocid="cohort_landing.faq.section"
        className="bg-[#F7F9FC] py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00D1FF] text-xs font-semibold tracking-widest uppercase mb-3">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3A]">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-[#00D1FF] mx-auto" />
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Do I need prior OutSystems experience?",
                a: "No prior OutSystems experience is required. The cohort is structured to accommodate both beginners and professionals with some familiarity with the platform.",
              },
              {
                q: "Are sessions recorded?",
                a: "Yes, all live sessions are recorded. Participants get access to recordings for review and self-paced study after each session.",
              },
              {
                q: "How long do I get access to course materials?",
                a: "Participants retain access to all course materials, recordings, and resources for an extended period after the cohort concludes.",
              },
              {
                q: "Will there be assignments during the cohort?",
                a: "Yes, each session is followed by hands-on development exercises designed to reinforce the concepts covered and strengthen practical skills.",
              },
              {
                q: "Will I get project work?",
                a: "Yes — both minor and major project work will be included throughout the cohort. You will also receive complete project implementation support to ensure you can confidently build and deliver real enterprise applications.",
              },
              {
                q: "Will I get doubt clearing sessions?",
                a: "Yes — dedicated doubt clearing classes will be scheduled separately, giving you focused time to resolve questions and deepen your understanding of the concepts covered.",
              },
              {
                q: "Will I get interview support?",
                a: "Yes — a one-on-one mock interview will be conducted by Ankit himself once you feel ready for your job interview. This gives you direct feedback from an enterprise architect on your interview readiness.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i + 1}`}
                data-ocid={`cohort_landing.faq.item.${i + 1}`}
                className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-[#0B1F3A] font-semibold text-sm text-left hover:text-[#00D1FF] hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section
        data-ocid="cohort_landing.final_cta.section"
        className="bg-[#0B1F3A] py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, #00D1FF 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
            Secure Your Seat in the Upcoming Cohort
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join a focused group of professionals learning how modern enterprise
            applications are built.
          </p>
          <button
            type="button"
            data-ocid="cohort_landing.final_cta.primary_button"
            onClick={handlePrimaryAction}
            className="px-10 py-4 bg-[#00D1FF] hover:bg-[#00bbee] text-[#0B1F3A] font-bold text-sm rounded-md transition-colors shadow-lg shadow-[#00D1FF]/20"
          >
            {cohortConfig.enrollmentMode === "lead-capture"
              ? "Apply Now"
              : "Enroll Now"}
          </button>
        </div>
      </section>
    </div>
  );
}

// ── Event Page ───────────────────────────────────────────────────────────────
function EventPage({
  onNavigate: _onNavigate,
  onOpenLeadForm,
}: {
  onNavigate: (page: Page) => void;
  onOpenLeadForm: () => void;
}) {
  const whoForCards = [
    {
      title: "OutSystems Developers",
      desc: "Developers looking to strengthen their platform knowledge and get real architectural guidance from a practicing architect.",
    },
    {
      title: "Career Switchers",
      desc: "Professionals exploring OutSystems as a career path who want live insights and honest answers from someone actively working in the field.",
    },
    {
      title: "Engineering Students",
      desc: "Students preparing to enter enterprise software development and looking for real-world context they can't get from documentation.",
    },
    {
      title: "Technology Professionals",
      desc: "Anyone involved in software delivery who wants to understand how enterprise applications are truly built and maintained.",
    },
  ];

  const learnCards = [
    {
      title: "Live OutSystems Architecture Walkthrough",
      desc: "See how real enterprise applications are structured and designed by a practicing architect — not a simplified tutorial.",
    },
    {
      title: "OutSystems Developer Cloud (ODC) Overview",
      desc: "Understand how ODC differs from the traditional platform and where it fits in modern enterprise delivery.",
    },
    {
      title: "Agentic AI in Enterprise Apps",
      desc: "A practical introduction to how AI-assisted workflows are being integrated into OutSystems applications today.",
    },
    {
      title: "Common OutSystems Mistakes",
      desc: "Learn the architectural mistakes developers make and how to avoid them before they become production problems.",
    },
    {
      title: "Career Path in the OutSystems Ecosystem",
      desc: "Understand how developers grow from platform users to architects and what skills matter most at each stage.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        data-ocid="event.hero.section"
        className="relative overflow-hidden"
        style={{ background: "#0B1F3A" }}
      >
        {/* Decorative grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,209,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1F3A]" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(0,209,255,0.12)",
              color: "#00D1FF",
              border: "1px solid rgba(0,209,255,0.3)",
            }}
          >
            Live Online Event
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            OutSystems Live Q&A
            <br />+ Demo Session
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a live interactive session with Enterprise Software Architect
            Ankit Gangrade — get your OutSystems and enterprise development
            questions answered in real time.
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "Date", value: "April 15, 2026" },
              { label: "Time", value: "7:00 PM – 9:00 PM IST" },
              { label: "Duration", value: "2 Hours" },
              { label: "Mode", value: "Online — Live" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                }}
              >
                <span style={{ color: "#00D1FF" }}>{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            data-ocid="event.join_now.primary_button"
            onClick={onOpenLeadForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "#00D1FF", color: "#0B1F3A" }}
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Who Is This For */}
      <section
        data-ocid="event.who_for.section"
        className="py-20 px-6"
        style={{ background: "#0B1F3A" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Is This For
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              This session is designed for anyone who works with or wants to
              understand OutSystems and enterprise development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoForCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(0,209,255,0.4)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 30px rgba(0,209,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ background: "#00D1FF" }}
                />
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section
        data-ocid="event.learn.section"
        className="py-20 px-6"
        style={{ background: "#F7F9FC" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0B1F3A" }}
            >
              What You Will Learn
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A focused, practical session covering the topics that matter most
              for OutSystems practitioners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-xl p-6 bg-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(0,209,255,0.4)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 30px rgba(0,209,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#e5e7eb";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.07)";
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-bold"
                  style={{
                    background: "rgba(0,209,255,0.12)",
                    color: "#00D1FF",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "#0B1F3A" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-14">
            <p className="text-gray-500 mb-6">
              Seats are limited. Reserve your spot today.
            </p>
            <button
              type="button"
              onClick={onOpenLeadForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all hover:scale-105"
              style={{ background: "#0B1F3A", color: "#00D1FF" }}
            >
              Register for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const openLeadForm = () => setLeadFormOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLeadForm={openLeadForm}
      />
      <main>
        {currentPage === "home" ? (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <WhoHelpsSection />
            <MeetTheArchitectSection onNavigate={handleNavigate} />
            <HowYouCanLearnSection
              onNavigate={handleNavigate}
              onOpenLeadForm={openLeadForm}
            />
            <WhySection />
            <ForOrganizationsSection
              onNavigate={handleNavigate}
              onOpenLeadForm={openLeadForm}
            />
            <BlogSection />
            <CtaSection onNavigate={handleNavigate} />
          </>
        ) : currentPage === "about" ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : currentPage === "programs" ? (
          <ProgramsPage onNavigate={handleNavigate} />
        ) : currentPage === "contact" ? (
          <ContactPage onNavigate={handleNavigate} />
        ) : currentPage === "courses" ? (
          <CoursesPage onNavigate={handleNavigate} />
        ) : currentPage === "cohort-landing" ? (
          <CohortLandingPage
            onNavigate={handleNavigate}
            onOpenLeadForm={openLeadForm}
          />
        ) : currentPage === "cohort-details" ? (
          <CohortDetailsPage onNavigate={handleNavigate} />
        ) : currentPage === "course-details" ? (
          <CourseDetailsPage onNavigate={handleNavigate} />
        ) : currentPage === "event" ? (
          <EventPage
            onNavigate={handleNavigate}
            onOpenLeadForm={openLeadForm}
          />
        ) : (
          <CorporateTrainingPage onOpenLeadForm={openLeadForm} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <LeadFormDialog
        open={leadFormOpen}
        onClose={() => setLeadFormOpen(false)}
      />
    </div>
  );
}
