import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function TopNav() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const items = [
    { to: "/", label: "Pertandingan" },
    { to: "/standings", label: "Klasemen" },
    { to: "/stats", label: "Statistik" },
    { to: "/teams", label: "Pemain" },
    { to: "/profile", label: "Profil" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <header className="app-header bg-blue-700 text-white fixed top-0 left-0 right-0 h-16 z-50 shadow-md flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-white text-lg font-semibold flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#fff" />
            </svg>
            NBA
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {items.map((it) => {
              const active = loc.pathname === it.to;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`text-sm ${
                    active
                      ? "text-white font-semibold border-b-2 border-white pb-2"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {it.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-blue-700 text-white shadow-lg z-40 animate-slideDown">
          <div className="flex flex-col p-4 gap-4">
            {items.map((it) => {
              const active = loc.pathname === it.to;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className={`text-base ${
                    active
                      ? "font-bold text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {it.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
