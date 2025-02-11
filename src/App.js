import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FloatingParticles from "./FloatingParticles";
import "./App.css";

function Home() {
  return (
    <div className="Main Page">
      <FloatingParticles/>
      <header className="Header">
        <div className="logoBG">
          <img src="/apmclogo.png" className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/rules" className="text-white">Rules</a></li>
            <li><a href="https://docs.google.com/forms/d/1ecz6TbcN_RBSE0hCNH_epF25TRaeCkhZ8mJ9HbVuctg/edit" className="text-white">Sign Up</a></li>
            <li><a href="https://forms.gle/4xnHRcp9AjVPUe946" className="text-white">Materials</a></li>
            {/* <li><a href="/awards" className="text-white">Awards</a></li> */}
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
      </header>
      <div className="Content">
        <div className="horizontal-container">
          <img src="/arduino.webp" className="arduino" alt="arduino" />
          <div className="homeCard">
            <h1>Abbey Park's Makers Competition</h1>
            <p className="centered-text">is an annual event held by the <b>Computer Engineering Club</b>! Bring your ideas to life using an <b>Arduino</b> to win prizes!</p>
          </div>
        </div>
        <div className="secondcontainer">
        <div className="homeCard timing">
          <h1>3 Weeks to Work!</h1>
          <p className="centered-text">The competition runs from <b>February 12th</b> to <b>March 5th</b>! During this time, we will still be holding weekly meetings to help out! Remember to stop by <b>Room 225</b>!</p>
        </div>
        <img src="/calendar.png" className="calendar" alt="calendar" />
        </div>
        <div className="homeCard">
          <h1>APMC is for Everyone!</h1>
          <p className="centered-text">APMC features different awards, such as <b>creativity & aesthetics</b>! It could be smart to vary the people on your team, each having a different task!</p>
        </div>
      </div>
    </div>
  );
}

function Rules() {
  return (
    <div className="Main Page">
      <FloatingParticles/>
      <header className="Header">
        <div className="logoBG">
          <img src="/apmclogo.png" className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/rules" className="text-white">Rules</a></li>
            <li><a href="https://docs.google.com/forms/d/1ecz6TbcN_RBSE0hCNH_epF25TRaeCkhZ8mJ9HbVuctg/edit" className="text-white">Sign Up</a></li>
            <li><a href="https://forms.gle/4xnHRcp9AjVPUe946" className="text-white">Materials</a></li>
            {/* <li><a href="/awards" className="text-white">Awards</a></li> */}
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
      </header>
      <div className="Content">
        <div className="homeCard">
          <h1>Rules #1: Groups</h1>
          <p><b>Anyone</b> is able to join, even <b>outside</b> of the club! (You still have to be enrolled at <b>APHS</b>!)</p>
          <p>Each group has a maximum of <b>3</b> people! You are also allowed to work <b>alone</b>.</p>
        </div>
        <div className="homeCard">
          <h1>Rules #2: Award Exclusivity</h1>
          <p>Each group is only allowed to win <b>one</b> award. Your final score is based on the <b>general criteria</b> and the <b>category criteria</b>, which are all weighted <b>equally</b>.</p>
        </div>
        <div className="homeCard">
          <h1>Rules #3: Late Submissions</h1>
          <p>You will present your project on <b>March 5th</b> at the club. Please submit it <b>before</b> then!</p>
        </div>
        <div className="homeCard">
          <h1>Rules #4: The Arduino & Microcontrollers</h1>
          <p>This is an <b>Arduino</b> based competition! The Arduino must be <b>prominently</b> shown and used. If you want to use another microcontroller in <b>conjunction</b> with the Arduino, ask an exec!</p>
        </div>
        <div className="homeCard">
          <h1>Rules #5: Components</h1>
          <p>You are <b>not</b> allowed to use your own components. All components must come from the club! If you want a specific component, fill out the <b>material request form</b> (at the top of this website)!</p>
        </div>
        <div className="homeCard">
          <h1>Rules #6: The Code</h1>
          <p><b>Please</b> try to <b>refrain</b> from using AI to write your code! Also try to either write your code <b>clearly</b> or <b>comment</b> your code so we understand its function!</p>
          <p>Plagiarism will get you <b>executed</b>.</p>
        </div>
        <div className="homeCard">
          <h1>Rules #7: Ask Questions!</h1>
          <p>If you ever feel like breaking or bending a rule, <b>ask an exec!</b> If you are not sure of something, <b>ask an exec!</b> If you want help or ideas, <b>ask an exec!</b></p>
        </div>
      </div>
    </div>
  );
}

function Awards() {
  return (
    <div className="Main Page">
      <FloatingParticles/>
      <header className="Header">
        <div className="logoBG">
          <img src="/apmclogo.png" className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/rules" className="text-white">Rules</a></li>
            <li><a href="https://docs.google.com/forms/d/1ecz6TbcN_RBSE0hCNH_epF25TRaeCkhZ8mJ9HbVuctg/edit" className="text-white">Sign Up</a></li>
            <li><a href="https://forms.gle/4xnHRcp9AjVPUe946" className="text-white">Materials</a></li>
            <li><a href="/awards" className="text-white">Awards</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
      </header>
      <div className="Content">
        <div className="homeCard"><h1>Awards page here!!!</h1></div>
        <div className="homeCard">Award 1</div>
        <div className="homeCard">Award 2</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </Router>
  );
}

export default App;
