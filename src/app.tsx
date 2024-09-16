import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Main from './views/main';
import Podcast from './views/podcast';
import Episode from './views/episode';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/podcast">Podcast</Link></li>
          <li><Link to="/episode">Episode</Link></li>
        </ul>
      </nav>
      
      <br/>
      <br/>
      <br/>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;