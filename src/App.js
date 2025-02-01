import "./App.css"
import React from "react";
import styled from "styled-components"
import NavBar from "./pages/NavBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {theme} from "./theme"

const Container = styled.div`
  height: 100vh;
  width : 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  background: ${theme.gradient.background}
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
        <Education/>
        <About/>
        <Projects/>
        <Contact/>
    </Container>
  );
}

export default App;
