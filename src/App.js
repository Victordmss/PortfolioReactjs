import "./App.css"
import React from "react";
import styled from "styled-components"
import NavBar from "./pages/NavBar";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { staticContactComponent } from "./components";

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;


function App() {
  return (
    <>
      {staticContactComponent()}

      <NavBar />
      <Container>
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;