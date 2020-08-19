import React from 'react';
import './assets/styles/App.scss';
import Navbar from "./components/NavBar";
import Greeting from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
    </div>
  );
}

export default App;