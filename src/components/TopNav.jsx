import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Users, User, Table } from "lucide-react";

export default function TopNav() {
  const loc = useLocation();

  const items = [
    { to: "/", label: "Pertandingan", icon: <Home size={22} /> },
    { to: "/standings", label: "Klasemen", icon: <Table size={22} /> },
    { to: "/stats", label: "Statistik", icon: <BarChart2 size={22} /> },
    { to: "/teams", label: "Pemain", icon: <Users size={22} /> },
    { to: "/profile", label: "Profil", icon: <User size={22} /> },
  ];

  return (
    <>
      {/*================= DESKTOP NAVBAR (TETAP DI ATAS) =================*/}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-[#1D428A] text-white z-50 shadow-lg items-center border-b-2 border-[#C8102E]">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/nba-logo.jpg" className="h-8" alt="NBA Logo" />
            <span className="font-bold tracking-wide text-lg">NBA Pedia</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="flex items-center gap-8">
            {items.map((it) => {
              const active = loc.pathname === it.to;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`text-sm tracking-wide ${
                    active
                      ? "font-semibold text-white border-b-2 border-white pb-2"
                      : "text-white/80 hover:text-white transition"
                  }`}
                >
                  {it.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Spacer Desktop */}
      <div className="hidden md:block h-16"></div>

      {/*================= MOBILE HEADER SIMPLE =================*/}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-[#1D428A] text-white flex items-center px-4 z-50 shadow-md border-b-2 border-[#C8102E]">
        <span className="text-lg font-bold tracking-wide">NBA Pedia</span>
      </div>

      {/*================= MOBILE BOTTOM NAV =================*/}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1D428A] border-t-2 border-[#C8102E] shadow-2xl z-50">
        <div className="flex justify-between items-center h-20 px-1">
          {items.map((it) => {
            const active = loc.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`flex flex-col items-center justify-center w-full py-2 ${
                  active ? "text-white font-bold" : "text-white/60"
                }`}
              >
                <div className="flex items-center justify-center w-7 h-7 [&>svg]:w-6 [&>svg]:h-6">
                  {it.icon}
                </div>
                <span className="text-[11px] tracking-wide mt-1">{it.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer supaya konten tidak tertutup navbar bawah */}
      <div className="md:hidden h-20" />
    </>
  );
}
