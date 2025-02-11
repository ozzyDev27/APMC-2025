import React from "react";
import FloatingParticles from "./FloatingParticles";
import "./App.css";

function Rules() {
  return (
    <div className="Main Page">
      <FloatingParticles />
      <header className="Header">
        <div className="logoBG">
          <img src="/apmclogo.png" className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/rules" className="text-white">Rules</a></li>
            <li><a href="https://docs.google.com/forms/d/1ecz6TbcN_RBSE0hCNH_epF25TRaeCkhZ8mJ9HbVuctg/edit" className="text-white">Sign Up</a></li>
            <li><a href="/about" className="text-white">Awards</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
      </header>
      <div className="Content">
        <div className="homeCard"><h1>Rules page here!!!</h1></div>
        <div className="homeCard">Card 2</div>
        <div className="homeCard">Card 3</div>
      </div>
    </div>
  );
}

export default Rules;
