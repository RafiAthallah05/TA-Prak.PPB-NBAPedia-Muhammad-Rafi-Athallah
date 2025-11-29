import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Stats from "./pages/Stats";
import TeamDetail from './pages/TeamDetail';
import Standings from './pages/Standings';
import Profile from './pages/Profile';

export default function App(){
  return (
    <>
      <TopNav />
      <main className="app-body container">
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
