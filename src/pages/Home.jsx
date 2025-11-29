import { useEffect, useState } from "react";
import { fetchGames } from "../api/supabaseClient";

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    fetchGames().then(setGames).catch(() => setGames([]));
  }, []);

  if (!games) return <p className="pt-20 p-4">Loading...</p>;

  const finished = games.filter(g => g.status === "finished");
  const upcoming = games.filter(g => g.status === "upcoming");

  return (
    <div className="pt-5 px-4 pb-10 max-w-5xl mx-auto">

      {/* Header */}
      <h1 className="text-2xl font-bold text-blue-700">Pertandingan</h1>
      <p className="text-sm text-gray-600 mb-4">
        Hasil dan jadwal pertandingan NBA musim 2025
      </p>

      {/* ==========================
          FINAL MATCHES
      ============================ */}
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Final</h2>
      <div className="grid md:grid-cols-2 gap-4">

        {finished.map(game => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow p-4 flex items-center justify-between"
          >
            {/* LEFT: TEAMS */}
            <div>
              <div className="flex items-center gap-3">
                <img src={`/logos/${game.home_team}.png`} className="h-8" />
                <p className="font-semibold">{game.home_team}</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={`/logos/${game.away_team}.png`} className="h-8" />
                <p className="font-semibold">{game.away_team}</p>
              </div>
            </div>

            {/* SCORE */}
            <div className="text-right">
              <p className="text-xl font-bold text-gray-800">{game.home_score}</p>
              <p className="text-xl font-bold text-gray-800">{game.away_score}</p>

              <p className="text-xs text-gray-500 mt-1">
                Final • {new Date(game.start_time).toLocaleDateString()}
              </p>

              {/* Thumbnail recap opsional */}
              {game.thumbnail && (
                <img
                  src={game.thumbnail}
                  className="w-28 rounded mt-2"
                  alt="recap"
                />
              )}
            </div>
          </div>
        ))}

      </div>

      {/* ==========================
          UPCOMING MATCHES
      ============================ */}
      <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-2">Hari Ini</h2>

      <div className="grid md:grid-cols-2 gap-4">

        {upcoming.map(game => (
          <div
            key={game.id}
            className="bg-blue-50 rounded-xl shadow p-4 flex items-center justify-between"
          >
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3">
                <img src={`/logos/${game.home_team}.png`} className="h-8" />
                <p className="font-semibold">{game.home_team}</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={`/logos/${game.away_team}.png`} className="h-8" />
                <p className="font-semibold">{game.away_team}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-gray-700 text-sm font-medium">
                Hari ini
              </p>
              <p className="text-sm text-gray-600">
                {new Date(game.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>

              {/* Thumbnail preview (optional) */}
              {game.thumbnail && (
                <img
                  src={game.thumbnail}
                  className="w-28 rounded mt-2"
                />
              )}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
