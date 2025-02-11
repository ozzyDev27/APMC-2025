import React from "react";
import "./App.css";

function App() {
  return (
    
    <div className="Main Page">
    
      <header className="Header">
        <div className="logoBG"><img src="/apmclogo.png" className="App-logo" alt="logo" /></div>
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="http://localhost:3000/" className="text-white">Home</a></li>
            <li><a href="/rules" className="text-white">Rules</a></li>
            <li><a href="https://docs.google.com/forms/d/1ecz6TbcN_RBSE0hCNH_epF25TRaeCkhZ8mJ9HbVuctg/edit" className="text-white">Sign Up</a></li>
            <li><a href="/about" className="text-white">Awards</a></li>
          </ul>
        </nav>
      </header>
      <div className="Content">
        <div className="homeCard">
          <h1>Hello</h1>
        </div>
        <div className="homeCard">Card 2</div>
        <div className="homeCard">Card 3</div>
      </div>
    </div>
  );
}

export default App;
