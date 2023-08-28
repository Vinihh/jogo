import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Hard from './pages/hard';
import Easy from './pages/easy';
import Normal from './pages/normal';
import Card from './components/card';
import Congratulations from './pages/congratulations';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jogo-da-memória' element={<Game />} />
        <Route path='/hard' element={<Hard />} />
        <Route path='/easy' element={<Easy/>} />
        <Route path='/normal' element={<Normal/>} />
        <Route path='/teste' element={<Card/>} />
        <Route path='congratulations' element={<Congratulations />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

