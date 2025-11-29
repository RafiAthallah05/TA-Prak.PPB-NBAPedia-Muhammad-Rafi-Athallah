import { useEffect, useState } from "react";
import { fetchStats } from "../api/supabaseClient";

export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats().then(setStats).catch(() => setStats([]));
  }, []);

  if (!stats) return <p className="pt-20 p-4">Loading...</p>;

  // Kelompokkan sesuai kategori statistik
  const ppg = [...stats].sort((a, b) => b.points - a.points).slice(0, 5);
  const rpg = [...stats].sort((a, b) => b.rebounds - a.rebounds).slice(0, 5);
  const apg = [...stats].sort((a, b) => b.assists - a.assists).slice(0, 5);

  return (
    <div className="pt-5 pb-10 px-4 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-700 mb-4">Statistik NBA 2025</h1>

      {/* ============================
          POIN PER PERTANDINGAN
      ============================= */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Poin per pertandingan</h2>

      {/* HEADER */}
      <div className="text-gray-500 text-sm grid grid-cols-12 py-2 border-b">
        <p className="col-span-6">Pemain</p>
        <p className="col-span-6 text-right">PPG</p>
      </div>

      {ppg.map((p, i) => (
        <div key={p.id} className="grid grid-cols-12 py-3 border-b items-center">
          
          {/* RANK */}
          <div className="col-span-1 text-gray-700 font-semibold">{i + 1}</div>

          {/* PLAYER FOTO */}
          <div className="col-span-1">
            <img
              src={p.photo}
              className="h-10 w-10 rounded-full object-cover border"
              alt={p.player_name}
            />
          </div>

          {/* PLAYER NAME + TEAM */}
          <div className="col-span-6">
            <p className="font-semibold text-gray-900">{p.player_name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img src={p.team_logo} className="h-4" />
              <span>{p.team}</span>
            </div>
          </div>

          {/* VALUE */}
          <div className="col-span-4 text-right text-lg font-semibold text-gray-900">
            {p.points.toFixed(1)}
          </div>
        </div>
      ))}

      {/* ============================
          REBOUND PER PERTANDINGAN
      ============================= */}
      <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-3">Rebound per pertandingan</h2>

      <div className="text-gray-500 text-sm grid grid-cols-12 py-2 border-b">
        <p className="col-span-6">Pemain</p>
        <p className="col-span-6 text-right">RPG</p>
      </div>

      {rpg.map((p, i) => (
        <div key={p.id} className="grid grid-cols-12 py-3 border-b items-center">
          <div className="col-span-1 text-gray-700 font-semibold">{i + 1}</div>

          <div className="col-span-1">
            <img
              src={p.photo}
              className="h-10 w-10 rounded-full border object-cover"
            />
          </div>

          <div className="col-span-6">
            <p className="font-semibold">{p.player_name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img src={p.team_logo} className="h-4" />
              <span>{p.team}</span>
            </div>
          </div>

          <div className="col-span-4 text-right text-lg font-semibold">
            {p.rebounds.toFixed(1)}
          </div>
        </div>
      ))}

      {/* ============================
          ASSISTS PER GAME
      ============================= */}
      <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-3">Assist per pertandingan</h2>

      <div className="text-gray-500 text-sm grid grid-cols-12 py-2 border-b">
        <p className="col-span-6">Pemain</p>
        <p className="col-span-6 text-right">APG</p>
      </div>

      {apg.map((p, i) => (
        <div key={p.id} className="grid grid-cols-12 py-3 border-b items-center">
          <div className="col-span-1 text-gray-700 font-semibold">{i + 1}</div>

          <div className="col-span-1">
            <img
              src={p.photo}
              className="h-10 w-10 rounded-full border object-cover"
            />
          </div>

          <div className="col-span-6">
            <p className="font-semibold">{p.player_name}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img src={p.team_logo} className="h-4" />
              <span>{p.team}</span>
            </div>
          </div>

          <div className="col-span-4 text-right text-lg font-semibold">
            {p.assists.toFixed(1)}
          </div>
        </div>
      ))}

    </div>
  );
}
