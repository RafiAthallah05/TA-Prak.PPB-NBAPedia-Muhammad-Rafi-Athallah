import { useEffect, useState } from 'react';
import { fetchStandings } from '../api/supabaseClient';
import Tabs from '../components/Tabs';

export default function Standings(){
  const [all, setAll] = useState([]);
  const [active, setActive] = useState('east');
  useEffect(()=>{ fetchStandings().then(setAll).catch(()=>{}) },[]);

  const east = all.filter(r => r.conference.toLowerCase() === 'east').sort((a,b)=>a.rank-b.rank);
  const west = all.filter(r => r.conference.toLowerCase() === 'west').sort((a,b)=>a.rank-b.rank);

  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold">Klasemen</h2>
      <div className="mt-4">
        <Tabs tabs={[{key:'east',label:'Wilayah Timur'},{key:'west',label:'Wilayah Barat'}]} active={active} onChange={setActive} />
        <div className="mt-3 card">
          <div className="grid grid-cols-12 gap-2 font-semibold text-sm border-b pb-2">
            <div className="col-span-8">Tim</div>
            <div className="col-span-2 text-right">W</div>
            <div className="col-span-2 text-right">L</div>
          </div>

          {(active === 'east' ? east : west).map(r => (
            <div key={r.rank} className="grid grid-cols-12 gap-2 items-center py-3 border-b">
              <div className="col-span-8 flex items-center gap-3">
                <div className="text-sm font-medium">{r.rank}.</div>
                <img src={r.logo} alt="" className="w-8 h-8 object-contain" />
                <div>
                  <div className="font-medium">{r.team}</div>
                  <div className="text-xs text-gray-500">{r.division || ''}</div>
                </div>
              </div>
              <div className="col-span-2 text-right font-semibold">{r.wins}</div>
              <div className="col-span-2 text-right text-gray-600">{r.losses}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
