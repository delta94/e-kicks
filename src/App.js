import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './reset.css';
import HomePage from './pages/homepage/homepage.component.jsx';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
