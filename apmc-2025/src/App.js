import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Main Page">
      <header className="Header">
        <img src="/apmc.png" className="App-logo" alt="logo" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="Content">
        <h2 className="text-2xl font-semibold">Welcome to My Blog</h2>
        <p className="text-gray-600">This is a simple blog layout.</p>
      </div>6
    </div>
  );
}

export default App;
