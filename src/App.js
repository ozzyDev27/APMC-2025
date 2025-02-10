import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Main Page">
      <header className="Header">
        <img src="/apmc.png" className="App-logo" alt="logo" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/home" className="text-white">Home</a></li>
            <li><a href="/home" className="text-white">Rules</a></li>
            <li><a href="/signup" className="text-white">Sign Up</a></li>
            <li><a href="/about" className="text-white">Awards</a></li>
          </ul>
        </nav>
      </header>
      <div className="Content">
        <div className="Carousel">
          <div className="Card">Card 1</div>
          <div className="Card">Card 2</div>
          <div className="Card">Card 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
