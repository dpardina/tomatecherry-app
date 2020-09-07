import React from 'react';
import './assets/styles/App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;