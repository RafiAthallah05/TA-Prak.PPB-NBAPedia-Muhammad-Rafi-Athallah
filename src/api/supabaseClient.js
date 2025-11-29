import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Helper functions
 */
export async function fetchHighlights() {
  const { data, error } = await supabase.from('highlights').select('*').limit(1).single();
  if (error) throw error;
  return data;
}

export async function fetchGames() {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("start_time", { ascending: true });

  if (error) throw error;
  return data;
}

export async function fetchStats() {
  const { data, error } = await supabase
    .from("player_stats")
    .select("id, player_name, team, points, rebounds, assists, blocks, steals, game_id, photo, team_logo");

  if (error) throw error;
  return data;
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
