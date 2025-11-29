import { useEffect, useState } from 'react';
import { fetchTeams } from '../api/supabaseClient';
import TeamCard from '../components/TeamCard';

export default function Teams(){
  const [teams, setTeams] = useState([]);
  useEffect(()=>{ fetchTeams().then(setTeams).catch(()=>{}) },[]);
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold mb-3">Teams</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {teams.map(t => <TeamCard key={t.id} team={t} />)}
      </div>
    </div>
  );
}
