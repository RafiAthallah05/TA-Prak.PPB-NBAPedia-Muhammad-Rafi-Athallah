import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Stats from "./pages/Stats";
import TeamDetail from "./pages/TeamDetail";
import Standings from "./pages/Standings";
import Profile from "./pages/Profile";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <TopNav />

      {/* MAIN CONTENT */}
      <main className="container px-4 pt-3 pb-24 md:pt-20 md:pb-0 -mt-2 md:mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </>
  );
}
