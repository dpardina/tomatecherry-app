import React from 'react';
import './assets/styles/App.scss';
import Navbar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home greeting1="De nuestra casa" greeting2="a la tuya" />
    </div>
  );
}

export default App;