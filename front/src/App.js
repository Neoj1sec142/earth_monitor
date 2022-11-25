import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './containers/Main';
import Land from './containers/Land';
import Oops from './containers/oops';
import TransactionForm from './components/forms/TransactionForm';
import AccountForm from './components/forms/AccountForm';
import Dashboard from './containers/Dashboard'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Land />} />
          <Route path='/main' element={<Main />} />
          <Route path='/new-tra' element={<TransactionForm />} />
          <Route path='/new-acc' element={<AccountForm />} />
          <Route path='/dash' element={<Dashboard />} />
          <Route path='*' element={<Oops />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
