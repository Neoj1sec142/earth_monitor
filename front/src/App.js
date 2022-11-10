import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './containers/Main';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
