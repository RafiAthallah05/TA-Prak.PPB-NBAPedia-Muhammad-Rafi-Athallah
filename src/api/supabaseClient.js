import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchGames() {
  const { data, error } = await supabase
    .from("games")
    .select(`
      id,
      home_score,
      away_score,
      start_time,
      status,
      thumbnail,
      home_team:home_team_id ( id, name, logo ),
      away_team:away_team_id ( id, name, logo )
    `)
    .order("start_time", { ascending: false });

  if (error) throw error;
  return data;
}

export async function fetchStats() {
  const { data, error } = await supabase
    .from("player_stats")
    .select(`
      id,
      player_name,
      photo,
      points,
      rebounds,
      assists,
      team:team_id (
        id,
        name,
        logo
      )
    `);

  if (error) throw error;

  // Merapikan agar sesuai dengan kode Stats.jsx yang kamu buat
  return data.map(p => ({
    ...p,
    team: p.team?.name,
    team_logo: p.team?.logo
  }));
}


export async function fetchTeams() {
  const { data, error } = await supabase.from('teams').select('*').order('name', { ascending: true });
  if (error) throw error;
  return data;
}

export async function fetchTeam(id) {
  const { data, error } = await supabase.from('teams').select('*, players(*)').eq('id', id).single();
  if (error) throw error;
  return data;
}

export async function fetchStandings() {
  const { data, error } = await supabase.from('standings').select('*').order('rank', { ascending: true });
  if (error) throw error;
  return data;
}
