import React, {useState} from "react"
import {Robot} from "../components"
import {OrbitControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import {motion} from "framer-motion";
import styled from "styled-components";
import logoUTC from "../assets/Schools/UTC/logoUTC1.png"
import logoRTU from "../assets/Schools/RTU/logoRTU.png"
import logoSNU from "../assets/Schools/SNU/logoSNU.png"
import {theme} from "../theme"
import backgroundImage from "../assets/PortfolioBackground.png";
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

const Right = motion(styled.div`
  flex: 0.40;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${backgroundImage}) no-repeat right top;
  background-size: contain;
`);

const CanvasContainer = styled.div`
  animation: animate 2s infinite alternate;
  height: 40vh;
  width: 60%;
  margin-bottom : 8vh;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button`
  background: ${theme.gradient.secondary};
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
  color: ${theme.colors.tertiary}
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

const Desc = styled.div`
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  height: 10rem;
  padding-right: 5rem;
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
`);

function Home() {
    const [robotClicked, setRobotClicked] = useState(true)

    const handleRobotClicked = () => {
        setRobotClicked(!robotClicked)
    }


    return (
        <Section id="Home">
            <FirstRow>
              <Left>
                  <Title>VICTOR DEMESSANCE</Title>
                  <Subtitle>Computer science & robotics engineer</Subtitle>
                  <Desc>
                      I'm a future French engineer interested in computer science, but also in any kind of knowledge. My favorite pastime is learning and understanding how things work. From the smallest insect 🪲 to the largest galaxy 🔭, everything can be understood and absorbed. <br/><br/>
                      On this website, I want to present one of my passions, computer science.
                      As a way to present myself and to discover a new knowledge, I decided to create this portfolio in React.js from scratch. <br></br>
                  </Desc>
                  <Button onClick={() => window.open("/files/CV_Victordemessance.pdf", '_blank')}>Click to learn more about me !</Button>
              </Left>
              <Right 
                initial={{ x: 500}} 
                whileInView={{ x: 0}}
                transition={{ duration: 2, ease: "easeOut"}}
                viewport={{ once: false, amount: 0.01 }}>
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
              <LogoSNU/>
              <LogoUTC/>
              <LogoRTU/>
            </SecondRow>
            <HexaLeft
              initial={{x: -200}} 
              whileInView={{ x: 0}}
              transition={{ duration: 1, ease: "easeOut"}}
              viewport={{ once: false, amount: 0.01 }}
            />
        </Section>
    )
}

export default Home;