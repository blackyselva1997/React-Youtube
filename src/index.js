import React from 'react';
import ReactDOM from 'react-dom/client';
import './home.scss'
import ProviderSetUp from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ProviderSetUp />
  </>
);
