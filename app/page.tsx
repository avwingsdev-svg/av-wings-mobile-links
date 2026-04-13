"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Shield,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { MdFlight, MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { RiVipCrownLine } from "react-icons/ri";
import { TbPlaneTilt } from "react-icons/tb";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setNavSolid(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      icon: <MdFlightTakeoff size={28} className="text-sky-300/70" />,
      num: "01",
      title: "Private Charter",
      text: "On-demand private flights shaped entirely around your schedule — domestic routes or global destinations.",
    },
    {
      icon: <TbPlaneTilt size={28} className="text-sky-300/70" />,
      num: "02",
      title: "Aircraft Management",
      text: "Complete lifecycle management of your aircraft — crew, maintenance, compliance, and operations.",
    },
    {
      icon: <RiVipCrownLine size={28} className="text-sky-300/70" />,
      num: "03",
      title: "Elite Concierge",
      text: "Seamless travel curation — curated hotels, ground transfers, and bespoke experiences at every destination.",
    },
    {
      icon: <LuPackage size={28} className="text-sky-300/70" />,
      num: "04",
      title: "Air Cargo",
      text: "Priority freight solutions for time-critical, high-value shipments with worldwide reach.",
    },
  ];

  const stats = [
    {
      value: "200+",
      label: "Destinations",
      icon: <Globe size={14} className="text-sky-400/50" />,
    },
    {
      value: "15 yrs",
      label: "In aviation",
      icon: <Clock size={14} className="text-sky-400/50" />,
    },
    {
      value: "99.7%",
      label: "On-time rate",
      icon: <Star size={14} className="text-sky-400/50" />,
    },
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "#070d1c",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Google Fonts + custom keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400;500&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.25; }
        }
        @keyframes scroll-line {
          0%   { height: 0; opacity: 0; }
          40%  { height: 40px; opacity: 1; }
          100% { height: 40px; opacity: 0; transform: translateY(20px); }
        }

        .anim-slide-1 { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .anim-slide-2 { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .anim-slide-3 { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.54s both; }
        .anim-slide-4 { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
        .anim-fade    { animation: fadeIn 1.2s ease 0.9s both; }
        .pulse-dot    { animation: pulse-dot 2s ease infinite; }
        .scroll-line  { animation: scroll-line 2.4s ease-in-out infinite; }

        .card-hover { transition: border-color 0.3s, background 0.3s, transform 0.35s; }
        .card-hover:hover {
          border-color: rgba(147,197,253,0.22) !important;
          background: rgba(255,255,255,0.04) !important;
          transform: translateY(-5px);
        }

        .btn-silver {
          background: linear-gradient(135deg, #b8cce0 0%, #e2ecf5 50%, #b8cce0 100%);
          background-size: 200% 200%;
          transition: background-position 0.4s ease, transform 0.2s;
        }
        .btn-silver:hover { background-position: 100% 100%; transform: translateY(-1px); }

        .nav-link-hover { position: relative; }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: rgba(186,220,255,0.5);
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .nav-link-hover:hover::after { transform: scaleX(1); }
        .nav-link-hover:hover { color: rgba(200,220,240,0.95) !important; }

        .ghost-btn-hover {
          transition: color 0.25s, border-color 0.25s;
        }
        .ghost-btn-hover:hover {
          color: rgba(180,205,230,0.9) !important;
          border-color: rgba(180,205,230,0.4) !important;
        }
      `}</style>

      {/* ─── NAVBAR ──────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "py-3 border-b border-white/5"
            : "py-5 border-b border-transparent"
        }`}
        style={{
          background: navSolid
            ? "rgba(7,13,28,0.96)"
            : "linear-gradient(180deg,rgba(7,13,28,0.8) 0%,transparent 100%)",
          backdropFilter: navSolid ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo wordmark */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/brandlogo.jpg"
              alt="AVwings"
              width={100}
              height={100}
              className="rounded-sm opacity-90 w-10 h-10 md:w-16 md:h-16"
            />
            <span
              className="text-[11px] tracking-[3.5px] uppercase font-normal"
              style={{
                color: "rgba(190,210,235,0.85)",
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              AVwings
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {["Fleet", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link-hover text-[10px] tracking-[2.5px] uppercase font-light transition-colors"
                style={{
                  color: "rgba(180,200,225,0.45)",
                  fontFamily: "'Montserrat',sans-serif",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 btn-silver text-[9.5px] tracking-[2.5px] uppercase font-medium px-5 py-2.5 text-[#0a1628]"
            >
              Book a Flight <MdFlightTakeoff size={13} />
            </a>
            <button
              className="md:hidden text-sky-200/50 hover:text-sky-200 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-5 border-t border-white/5"
            style={{ background: "rgba(7,13,28,0.97)" }}
          >
            {["Fleet", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] tracking-[2.5px] uppercase font-light"
                style={{ color: "rgba(180,200,225,0.55)" }}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="btn-silver text-center text-[10px] tracking-[2.5px] uppercase font-medium px-5 py-3 text-[#0a1628] mt-2"
            >
              Book a Flight
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        className="pt-40 relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 130% 90% at 50% -5%, #152540 0%, #070d1c 58%)",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(160,185,220,1) 1px,transparent 1px),linear-gradient(90deg,rgba(160,185,220,1) 1px,transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Radial glow blob */}
        <div
          className="absolute top-0 left-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(60,110,200,0.1) 0%, transparent 65%)",
            transform: `translateX(-50%) translateY(${scrollY * 0.08}px)`,
          }}
        />

        {/* Vertical accent line */}
        <div
          className="absolute top-0 right-[20%] w-px h-full opacity-[0.06]"
          style={{
            background:
              "linear-gradient(180deg,transparent 0%,rgba(160,185,220,1) 25%,rgba(160,185,220,1) 75%,transparent 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        >
          {/* Live badge */}
          <div className="anim-slide-1 inline-flex items-center gap-2.5 mb-10 border border-white/10 px-4 py-2">
            <span
              className="pulse-dot w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{ background: "rgba(140,210,160,0.85)" }}
            />
            <span
              className="text-[9px] tracking-[3px] uppercase font-light"
              style={{
                color: "rgba(180,205,230,0.45)",
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              Now accepting charter bookings · 2026
            </span>
          </div>
          {/* Headline */}
          <h1
            className="font-display anim-slide-2 mb-5"
            style={{
              fontSize: "clamp(3rem,9vw,7rem)",
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: "0.02em",
              color: "#dce8f4",
            }}
          >
            Above Every
            <br />
            <span
              className="font-display"
              style={{ color: "rgba(180,205,230,0.38)", fontStyle: "italic" }}
            >
              Horizon
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="anim-slide-3 max-w-md mx-auto mb-10 leading-8"
            style={{
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "rgba(180,205,230,0.48)",
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            Private aviation reimagined — where precision meets elegance, and
            every journey is crafted entirely around you.
          </p>

          {/* CTA row */}
          <div className="anim-slide-4 flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="#"
              className="btn-silver inline-flex items-center gap-2.5 text-[10px] tracking-[2.5px] uppercase font-medium px-7 py-3.5 text-[#0a1628]"
            >
              Explore Fleet <ArrowRight size={13} />
            </a>
            <a
              href="#services"
              className="ghost-btn-hover inline-flex items-center gap-2.5 text-[10px] tracking-[2.5px] uppercase font-light px-7 py-3.5 border"
              style={{
                color: "rgba(180,205,230,0.5)",
                borderColor: "rgba(180,205,230,0.15)",
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              Our Services <BiSolidPlaneAlt size={13} />
            </a>
          </div>

          {/* Stats strip */}
          <div className="anim-fade flex items-stretch border border-white/[0.07]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center px-8 py-5 ${
                  i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
                }`}
                style={{ background: "rgba(255,255,255,0.015)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {s.icon}
                  <span
                    className="font-display"
                    style={{
                      fontSize: "1.85rem",
                      fontWeight: 300,
                      color: "#c8daea",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                </div>
                <span
                  className="text-[9px] tracking-[2.5px] uppercase"
                  style={{
                    color: "rgba(180,205,230,0.3)",
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade-out */}
        <div
          className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
          style={{
            background: "linear-gradient(0deg,#060c1a 0%,transparent 100%)",
          }}
        />

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <ChevronDown size={14} className="text-sky-200/20" />
          <div
            className="scroll-line w-px"
            style={{
              background:
                "linear-gradient(180deg,rgba(160,185,220,0.4),transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────── */}
      <section
        id="services"
        className="relative py-36 px-6 md:px-12"
        style={{ background: "#060c1a" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(ellipse,rgba(50,90,170,0.07) 0%,transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-5">
                <HiOutlineSparkles size={12} className="text-sky-400/40" />
                <span
                  className="text-[9px] tracking-[4px] uppercase font-light"
                  style={{
                    color: "rgba(180,205,230,0.3)",
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  What we offer
                </span>
              </div>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2.2rem,5vw,3.8rem)",
                  fontWeight: 300,
                  color: "#dce8f4",
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                }}
              >
                Crafted for those
                <br />
                <span
                  className="font-display"
                  style={{
                    color: "rgba(180,205,230,0.38)",
                    fontStyle: "italic",
                  }}
                >
                  who demand more
                </span>
              </h2>
              <div
                className="w-full h-px"
                style={{
                  background:
                    "linear-gradient(90deg,rgba(160,185,220,0.3) 0%,transparent 100%)",
                }}
              />
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[9.5px] tracking-[2.5px] uppercase font-light self-start md:self-auto mb-1 transition-colors hover:text-sky-200/60"
              style={{
                color: "rgba(160,185,220,0.4)",
                fontFamily: "'Montserrat',sans-serif",
              }}
            >
              View all services <ArrowRight size={12} />
            </a>
          </div>

          {/* Service cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-28"
            style={{ background: "rgba(160,185,220,0.06)" }}
          >
            {services.map((card) => (
              <div
                key={card.num}
                className="card-hover p-10 flex flex-col gap-5 border border-transparent"
                style={{ background: "#060c1a" }}
              >
                <span
                  className="text-[9px] tracking-[3px] font-light"
                  style={{
                    color: "rgba(160,185,220,0.2)",
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  {card.num}
                </span>
                <div>{card.icon}</div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 300,
                    color: "#c2d8ed",
                    letterSpacing: "0.03em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 300,
                    color: "rgba(180,205,230,0.38)",
                    lineHeight: 1.9,
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  {card.text}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-1.5">
                  <span
                    className="text-[9px] tracking-[2px] uppercase font-light"
                    style={{
                      color: "rgba(160,185,220,0.25)",
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                  >
                    Learn more
                  </span>
                  <ArrowRight size={10} className="text-sky-300/25" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px mb-28"
            style={{ background: "rgba(160,185,220,0.06)" }}
          >
            {[
              {
                icon: <Shield size={18} className="text-sky-300/50" />,
                title: "Fully Certified",
                text: "ICAO, IOSA & local aviation authority compliant across every operation.",
              },
              {
                icon: <Zap size={18} className="text-sky-300/50" />,
                title: "24 / 7 Dispatch",
                text: "Round-the-clock operations centre ready for last-minute departures.",
              },
              {
                icon: <MdFlight size={18} className="text-sky-300/50" />,
                title: "Global Network",
                text: "Bilateral agreements with 200+ airports and FBOs worldwide.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 px-8 py-7"
                style={{ background: "rgba(255,255,255,0.015)" }}
              >
                <div
                  className="mt-0.5 w-9 h-9 flex items-center justify-center flex-shrink-0 border"
                  style={{
                    borderColor: "rgba(160,185,220,0.1)",
                    background: "rgba(160,185,220,0.04)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-display mb-1"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "#bcd3e8",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "rgba(160,185,220,0.38)",
                      lineHeight: 1.85,
                      fontFamily: "'Montserrat',sans-serif",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border"
            style={{
              borderColor: "rgba(160,185,220,0.08)",
              background: "rgba(160,185,220,0.02)",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MdFlightLand size={13} className="text-sky-400/40" />
                <span
                  className="text-[9px] tracking-[3.5px] uppercase font-light"
                  style={{
                    color: "#d8e8f4",
                    fontFamily: "'Montserrat',sans-serif",
                  }}
                >
                  Ready to depart?
                </span>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.6rem,4vw,2.8rem)",
                  fontWeight: 300,
                  color: "#d8e8f4",
                  lineHeight: 1.15,
                }}
              >
                Your runway awaits.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#"
                className="btn-silver inline-flex items-center justify-center gap-2.5 text-[10px] tracking-[2.5px] uppercase font-medium px-8 py-3.5 text-[#0a1628]"
              >
                Plan a Journey <ArrowRight size={12} />
              </a>
              <a
                href="#"
                className="ghost-btn-hover inline-flex items-center justify-center gap-2 text-[10px] tracking-[2.5px] uppercase font-light px-8 py-3.5 border"
                style={{
                  color: "rgba(180,205,230,0.5)",
                  borderColor: "rgba(180,205,230,0.15)",
                  fontFamily: "'Montserrat',sans-serif",
                }}
              >
                <Phone size={12} /> Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer
        className="border-t px-8 md:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          background: "#050a17",
          borderColor: "rgba(160,185,220,0.07)",
          color: "#d8e8f4",
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/brandlogo.jpg"
            alt="AVwings"
            width={22}
            height={22}
            className="rounded-sm opacity-60"
          />
          <span
            className="text-[10px] tracking-[3px] uppercase font-light"
            style={{
              color: "#d8e8f4",
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            AVwings
          </span>
        </div>
        <p
          className="text-[10px] tracking-wider font-light"
          style={{
            color: "#d8e8f4",
            fontFamily: "'Montserrat',sans-serif",
          }}
        >
          © 2026 AVwings. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@avwings.com"
            className="flex items-center gap-1.5 text-[10px] tracking-wide font-light hover:text-sky-200/50 transition-colors"
            style={{
              color: "#d8e8f4",
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            <Mail size={11} /> support@avwings.com
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[10px] tracking-wide font-light hover:text-sky-200/50 transition-colors"
            style={{
              color: "#d8e8f4",
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            <MapPin size={11} /> Lagos, NG
          </a>
        </div>
      </footer>
    </div>
  );
}
