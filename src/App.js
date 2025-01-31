import "./App.css"
import React from "react";
import styled from "styled-components"
import NavBar from "./pages/NavBar/NavBar";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects.jsx";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: linear-gradient(25deg, #5e0204 0%, #5104e7 51%, #532270 90%),
              linear-gradient(140deg, #1d39be 27%, #9d062e 100%),
              linear-gradient(140deg, #6f1fce 0%, #480783 72%),
              radial-gradient(100% 100% at 70% 0%, #5017b0 0%, #1a38ad 100%);
  background-blend-mode: overlay, overlay, difference, difference, color-burn, exclusion;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
       return (
    <Container>
        <NavBar/>
        <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
    </Container>
  );
}

export default App;
