import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HOME_ROUTE, ALL_SONGS_ROUTE} from './constants/routes';
import {Home, AllSongs} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ALL_SONGS_ROUTE} element={<AllSongs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
