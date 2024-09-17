import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/app.css';

import Main from './views/main';
import Podcast from './views/podcast';
import Episode from './views/episode';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/podcast/:podcastId" element={<Podcast />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;