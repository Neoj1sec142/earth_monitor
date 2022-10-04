import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavB from './components/nav';
import Main from './pages/main'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <header>
        <NavB />
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
