import React from 'react';
import HeaderComponent from './components/Layout/HeaderComponent';
import FooterComponent from './components/Layout/FooterComponent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <FooterComponent />
    </div>
  )
}

export default App;
