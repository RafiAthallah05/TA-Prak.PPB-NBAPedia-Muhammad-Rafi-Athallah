import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeam } from '../api/supabaseClient';

export default function TeamDetail(){
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  useEffect(()=>{ if(id) fetchTeam(id).then(setTeam).catch(()=>setTeam(null)); },[id]);

  if (!team) return <div className="card">Loading...</div>;

  return (
    <div className="pt-5">
      <div className="flex items-center gap-4">
        <img src={team.logo} alt="" className="w-20 h-20 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{team.name}</h1>
          <div className="text-gray-500">{team.city} • {team.division} • Coach: {team.coach}</div>
        </div>
      </div>

      <div className="mt-4 card">
        <h3 className="font-semibold">Roster</h3>
        <div className="mt-2">
          {team.players?.map((p, i) => (
            <div key={i} className="flex justify-between py-2 border-b">
              <div>{p.name}</div>
              <div className="text-sm text-gray-500">{p.position || ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
