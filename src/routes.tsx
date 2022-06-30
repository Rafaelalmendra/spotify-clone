import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home';
import Login from './pages/login';
import Playlist from './pages/playlist';

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
