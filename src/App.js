import "./App.css"
import React from "react";
import styled from "styled-components"
import NavBar from "./pages/NavBar/NavBar";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects.jsx";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Darkmode from 'darkmode-js';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const StyledCircle = styled.div`
  margin-bottom: -5px;
  margin-top: 20px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4b1a75;
`;

export const StyledGradientLine = styled.div`
  width: 7px;
  height: ${(props) => props.size}px;
  background: linear-gradient(to bottom, #4b1a75, #683891);
  animation: ${(props) => props.animation} 3.6s;
  @keyframes growUp {
    to {
      height: 500px;
    }
  }
  @keyframes growDown {
    to {
      height: 170px;
    }
  }
`;

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

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}


function App() {
    new Darkmode(options).showWidget();

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
