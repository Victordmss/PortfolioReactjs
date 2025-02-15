import React, {useState, useEffect} from "react"
import {Robot} from "../components"
import {OrbitControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import {motion} from "framer-motion";
import styled from "styled-components";
import logoUTC from "../assets/Schools/UTC/logoUTC.png"
import logoRTU from "../assets/Schools/RTU/logoRTU.png"
import logoSNU from "../assets/Schools/SNU/logoSNU.png"
import {theme} from "../theme"
import backgroundImage from "../assets/HomeTR_background.png";
import robotBackgroundImage from "../assets/HomeRobot_background.png";

import HexaLeftImg from "../assets/hexa_left.png"

const Section = styled.div`
  position: relative;
  height: 100vh;
  width : 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${theme.gradient.background}
`;

const FirstRow = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: center;
    overflow: visible;
  }
`;

const Left = styled.div`
  flex: 0.60;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10vh;
  gap: 20px;

  @media (max-width: 768px) {
    flex: 1;
    padding-left: 0;
  }
`;

const Right = styled.div`
  flex: 0.40;
  background: url(${backgroundImage}) no-repeat right top;
  background-size: contain;
  position: relative;

  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

const BackgroundRightSmartphone = styled.div`
  @media (max-width: 768px) {
    right: 0px;
    top: 0px;
    height: 30vh;
    width: 30vw;
    z-index: 1;
    background: url(${backgroundImage}) no-repeat right top;
    background-size: contain;
    position: absolute;
  }
`;

const CanvasContainer = styled.div`
  background: url(${robotBackgroundImage}) no-repeat center center;
  background-size: contain;
  position: absolute;
  bottom: 30%;
  animation: animate 2s infinite alternate;
  height: 50%;
  width: 30vw;
  @keyframes animate {
    to {
      transform: translateY(0px);
    }
  }
`;

const Title = styled.h1`
  font-size: 4vw;
  color: ${theme.colors.tertiary};
  z-index: 1000;
  
  @media (max-width: 768px) {
    font-size: 10vw;
    text-align: center;
    color: ${theme.colors.tertiary_dark};
  }
`;

const Subtitle = styled.h2`
  font-size: 2vw;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
  }
`;

const Desc = styled.div`
  overflow: hidden;
  font-size: 1vw;
  height: fit-content;
  padding-right: 5rem;
  margin-block: 1rem;
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

  @media (max-width: 768px) {
    display: none;
  }  
`;

const Button = styled.button`
  height: fit-content;
  width: fit-content;
  background: ${theme.gradient.secondary};
  box-shadow: rgba(62, 62, 62, 0.06) 0px 0px 1rem 1rem;
  border: none;
  padding: 1vh 1vw;
  border-radius: 10px;
  font-size: 1.5vw;
  font-weight: bold;
  color: white;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 10;
  transition: background-color 0.3s ease;
  transition: scale 0.1s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    scale: 1.1;
    box-shadow: rgba(59, 59, 59, 0.07) 0px 0px 1rem 1rem;
  }    

  &:active {
    background: ${theme.gradient.secondary_transparent};
    scale: 1;
  }

  @media (max-width: 768px) {
    align-self: center;
    font-size: 3vw;
    margin-block: 5vw;
  }  
`;

const SecondRow = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5vw;
  align-items: flex-start;
  padding-bottom: 5vh;

  @media (max-width: 768px) {
    flex: 0.75;
    flex-direction: column;
  }
`;

const LogoUTC = styled.div`
  z-index: 10;
  align-self: center;
  width: 15vw;
  height: 10vh;
  background-image: url(${logoUTC});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 30vw;
    height: 15vh;
  }
`;

const LogoRTU = styled.div`
  z-index: 10;
  align-self: center;
  width: 15vw;
  height: 10vh;
  background-image: url(${logoRTU});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 20vw;
    height: 15vh;
  }
`;

const LogoSNU = styled.div`
  z-index: 10;
  align-self: center;
  width: 15vw;
  height: 10vh;
  background-image: url(${logoSNU});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 20vw;
    height: 15vh;
  }
`;

const HexaLeft = motion(styled.div`
  position: absolute;
  bottom: -10vh; 
  width: 20vw; 
  height: 40vh;
  background: url(${HexaLeftImg}) no-repeat left;
  background-size: contain;
  transition: scale 0.3s ease-in-out;
  
  &:hover {
    scale: 1.05;
  }   
    
  @media (max-width: 768px) {
    width: 30vw; 
    height: 60vh;
    bottom: 0vh; 
  }
`);

function Home() {
    const [robotClicked, setRobotClicked] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    // Setters 
    const handleRobotClicked = () => {
        setRobotClicked(!robotClicked)
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Scrool value update
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    // Screen size update
    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768);
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); 
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <Section id="Home">
            <FirstRow>
              <Left>
                  <Title>VICTOR DEMESSANCE</Title>
                  <Subtitle>Computer science & robotics engineer</Subtitle>
                  <Desc>
                    A computer engineer trained at the UTC, I'm passionate about discovering and understanding the world, 
                    whether it's the mechanisms of the smallest insect 🪲 or the mysteries of the universe 🔭. 
                    My favourite field is embedded computing and autonomous transport systems. <br/> <br/>
                    On this website, I want to share my passion for computing and showcase my projects. 
                    To combine learning and practice, I designed this portfolio in React.js from scratch.
                    </Desc>
                  <Button onClick={() => window.open(`${process.env.PUBLIC_URL}/CV_Victordemessance.pdf`, '_blank')}>
                    Click to learn more about me !
                  </Button>              
                </Left>
              <BackgroundRightSmartphone/>
              <Right
                style={{
                  transform: `translateX(${scrollPosition * 0.5}px)` 
                }}
              >
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
            {isLargeScreen && <HexaLeft
              initial={{x: -200}} 
              whileInView={{ x: 0}}
              transition={{ duration: 1, ease: "easeOut"}}
              viewport={{ once: false, amount: 0.01 }}
            />}
            {!isLargeScreen && <HexaLeft/>}
        </Section>
    )
}

export default Home;