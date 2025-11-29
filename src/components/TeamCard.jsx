import { Link } from 'react-router-dom';
export default function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`} className="block card hover:shadow-lg">
      <div className="flex items-center gap-4">
        <img src={team.logo} alt={team.name} className="w-12 h-12 object-contain"/>
        <div>
          <div className="font-semibold">{team.name}</div>
          <div className="text-sm text-gray-500">{team.city} • {team.conference}</div>
        </div>
      </div>
    </Link>
  );
}
