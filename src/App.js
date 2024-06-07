import "./App.css";
import { Fragment } from "react";

import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <Navbar2 />

        <div className="main-container">
          <Home />
          <About />
          <Skills />
          <Projects />
          {/* <Services /> */}
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
