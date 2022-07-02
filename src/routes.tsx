import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Playlist from './pages/Playlist';

const MappedRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  </Router>
);

export default MappedRoutes;
