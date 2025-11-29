export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex bg-white rounded shadow">
      {tabs.map(t => (
        <button key={t.key} onClick={() => onChange(t.key)} className={`flex-1 py-3 text-center ${active === t.key ? 'bg-blue-800 text-white' : 'text-gray-600'}`}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
