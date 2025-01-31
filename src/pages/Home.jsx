import React, {useState} from "react"
import {Robot} from "../components"
import {OrbitControls} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components";
import {StyledCircle, StyledContainer, StyledGradientLine} from "../components";
import logoUTC from "../assets/Schools/UTC/logoUTC1.png"
import logoRTU from "../assets/Schools/RTU/logoRTU.png"
import logoSNU from "../assets/Schools/SNU/logoSNU.png"
import {theme} from "../theme"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FirstRow = styled.div`
  height: 75%;
  display: flex;
  flex-direction: row;
`;

const SecondRow = styled.div`
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  align-items: flex-start;
  padding-bottom: 2rem;
`;

const Left = styled.div`
  flex: 0.60;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 140px;
  gap: 20px;
`;

const Right = styled.div`
  flex: 0.40;
  padding-right:5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: animate 2s infinite alternate;
  height: 400px;
  width: 500px;
  margin-top: 15%;
  margin-left: 10%;
  margin-right: 10%;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button`
  background: ${theme.colors.tertiary};
  color: white;
  height: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(62, 62, 62, 0.06) 0px 0px 1rem 1rem;
  font-size: 20px;
  transition: background-color 0.3s ease;
  transition: scale 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    box-shadow: rgba(59, 59, 59, 0.07) 0px 0px 1rem 1rem;
  }    
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

const Desc = styled.div`
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  height: 10rem;
  letter-spacing: 0.1em;
  animation: typing 3s steps(40) normal both;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const LogoUTC = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  background-image: url(${logoUTC});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoRTU = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  background-image: url(${logoRTU});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoSNU = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  background-image: url(${logoSNU});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;


function Home() {
    const [robotClicked, setRobotClicked] = useState(true)

    const handleRobotClicked = () => {
        setRobotClicked(!robotClicked)
    }


    return (
        <Section id="Home">
            <FirstRow>
              <Left>
                  <Title>Victor DEMESSANCE</Title>
                  <Subtitle>Computer science & robotics engineer</Subtitle>
                  <Desc>
                      I'm a future French engineer interested in computer science, but also in any kind of knowledge. My favorite pastime is learning and understanding how things work. From the smallest insect 🪲 to the largest galaxy 🔭, everything can be understood and absorbed. <br/><br/>
                      On this website, I want to present one of my passions, computer science.
                      As a way to present myself and to discover a new knowledge, I decided to create this portfolio in React.js from scratch. <br></br>
                  </Desc>
                  <Button onClick={() => window.open("/CV_Victordemessance.pdf", '_blank')}>Click to learn more about me !</Button>
              </Left>
              <Right>
                  <CanvasContainer>
                    <Canvas
                        frameloop={"demand"}
                        camera={{position: [3,2,10]}}
                    >
                      <Robot onClick={handleRobotClicked} robotClicked={robotClicked} />
                      <OrbitControls enableZoom={false}></OrbitControls>
                    </Canvas>
                  </CanvasContainer>
              </Right>
            </FirstRow>
            <SecondRow>
              <LogoRTU/>
              <LogoUTC/>
              <LogoSNU/>
            </SecondRow>
        </Section>
    )
}

export default Home;