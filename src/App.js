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
            <li><a href="/awards" className="text-white">Awards</a></li>
            <li><a href="/winners" className="text-white">Winners</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <a href="https://github.com/ozzyDev27">
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
        </a>
          
      </header>
      <div className="Content">
        <div className="horizontal-container">
          <img src="/arduino.png" className="arduino" alt="arduino" />
          <div className="homeCard top">
            <h1>Abbey Park's Makers Competition</h1>
            <p className="centered-text">is an annual event held by the <b>Computer Engineering Club</b>! Bring your ideas to life using an <b>Arduino</b> to win prizes!</p>
          </div>
        </div>
        <div className="secondcontainer">
        <div className="homeCard timing">
          <h1>4 Weeks to Work!</h1>
          <p className="centered-text">The competition runs from <b>February 19th</b> to <b>March 19th</b>! During this time, we will still be holding weekly meetings to help out! Remember to stop by <b>Room 225</b>!</p>
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
            <li><a href="/awards" className="text-white">Awards</a></li>
            <li><a href="/winners" className="text-white">Winners</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <a href="https://github.com/ozzyDev27">
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
        </a>
      </header>
      <div className="Content">
        <div className="homeCard top rulescard">
          <h1>Rule #1: Groups</h1>
          <p><b>Anyone</b> is able to join, even <b>outside</b> of the club! (You still have to be enrolled at <b>APHS</b>!)</p>
          <p>Each group has a maximum of <b>3</b> people! You are also allowed to work <b>alone</b>.</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #2: Award Exclusivity</h1>
          <p>Each group is only allowed to win <b>one</b> award. Your final score is based on the <b>general criteria</b> and the <b>category criteria</b>, which are all weighted <b>equally</b>.</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #3: Late Submissions</h1>
          <p>You will present your project on <b>March 5th</b> at the club. Please submit it <b>before</b> then!</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #4: The Arduino & Microcontrollers</h1>
          <p>This is an <b>Arduino</b> based competition! The Arduino must be <b>prominently</b> shown and used. If you want to use another microcontroller in <b>conjunction</b> with the Arduino, ask an exec!</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #5: Components</h1>
          <p>You are <b>not</b> allowed to use your own components. All components must come from the club (Ask an exec if you want to bring your own)! If you want a specific component, fill out the <b>material request form</b> (at the top of this website)!</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #6: The Code</h1>
          <p><b>Please</b> try to <b>refrain</b> from using AI to write your code! Also try to either write your code <b>clearly</b> or <b>comment</b> your code so we understand its function!</p>
          <p>Plagiarism will get you <b>executed</b>.</p>
        </div>
        <div className="homeCard rulescard">
          <h1>Rule #7: Ask Questions!</h1>
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
            <li><a href="/winners" className="text-white">Winners</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <a href="https://github.com/ozzyDev27">
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
        </a>
      </header>
      <div className="Content">
        <div className="firstplace">
          <div className="homeCard award firstaward">
            <h1>Grand Prize</h1>
            <p>The first place prize for best overall project is an <b>ESP32</b> with a camera! Your project must be balanced between creativity, execution, aesthetics, usefulness, and enjoyment!</p>
          </div>
          <div className="homeCard esp">
            <img src="/esp32.png" className="esp32" alt="esp32" />
          </div>
        </div>
        <div className="hardware">
          <div className="homeCard circuit">
            <img src="/hardware.png" className="circuitboard" alt="hardware" />
          </div>
          <div className="homeCard award secondaward">
            <h1>Hardware Hacker</h1>
            <p>The hardware hacker award is for the best use of hardware in the project! If you win, you will get a <b>3D printed trophy!</b></p>
          </div>
        </div>
        <div className="firstplace">
          <div className="homeCard award firstaward">
            <h1>Programming Prize</h1>
            <p>The prize for outstanding software is a <b>3D printed trophy!</b> Your project must demonstrate skill and proficiency in programming and have creative solutions to problems!</p>
          </div>
          <div className="homeCard esp">
            <img src="/program.png" className="programming" alt="esp32" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Winners() {
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
            <li><a href="/winners" className="text-white">Winners</a></li>
          </ul>
        </nav>
        <a href="https://github.com/ozzyDev27/APMC-2025" className="github">
        <img src="/apmcgithub.png" className="github" alt="repo" />
        </a>
        <a href="https://github.com/ozzyDev27">
        <img src="/apmcozzy.png" className="ozzy" alt="ozzy" />
        </a>
      </header>
      <div className="Content">
        <div className="horizontal-container">
          <img src="/theguardian.png" className="guardian" alt="arduino" />
          <div className="homeCard top">
            <h1>Grand Prize</h1>
            <p className="centered-text">With the creation of the Guardian Headset, the <b>Grand Prize</b> goes to <b>Abdul Rahman Ahmed</b>! Being both in grade 9 and on a team consisting of one person, this is by far the most impressive project submitted in APMC history!</p>
          </div>
        </div>
        <div className="secondcontainer">
        <div className="homeCard timing">
          <h3>Programming Award</h3>
          <p className="centered-text">With the multiple microcontrollers and complex code of the Snack Alarm, <b>The Bright Fellows'</b> team takes the <b>Programming Award</b>, consisting of <b>Neel Shah</b>, <b>Duke Liu</b>, and <b>Ethan Zhang</b>!</p>
        </div>
        <img src="/snackalarm.png" className="calendar" alt="calendar" />
        </div>

        <div className="horizontal-container">
          <img src="/greenhouse.png" className="greenhouse" alt="arduino" />
          <div className="homeCard top">
            <h1>Hardware Award</h1>
            <p className="centered-text">Designing an eco-friendly system with exceptional use of hardware, <b>Jack Wang</b>, <b>Pranav Anand</b>, and <b>Kyle Hreljac</b>'s creation of an <b>Automated Greenhouse</b> demonstrates amazing potential!</p>
          </div>
        </div>
        <div className="blank"></div>

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
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </Router>
  );
}

export default App;
