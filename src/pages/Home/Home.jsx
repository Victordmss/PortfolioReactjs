import React, {useState} from "react"
import Robot from "./Robot"
import {OrbitControls} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import styled from "styled-components";
import {StyledCircle, StyledContainer, StyledGradientLine} from "../../App";



const Section = styled.div`
  height: 80vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const Middle = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 140px;
  gap: 20px;
`;

const Left = styled.div`
  text-align: center;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3.5;
`;

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: animate 2s infinite alternate;
  height: 60%;
  margin-top: 8%;
  margin-left: 10%;
  margin-right: 10%;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button`
  height: 10px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(140deg, #30167c 0%, #4b1a75 72%);
  font-size: 20px;
  transition: background-color 0.3s ease;
  animation: ${(props) => props.animation && "appearing"} 1s;

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Subtitle = styled.h2`
  margin-bottom: 40px;
`;

const Desc = styled.div`
  text-align: justify;
  overflow: hidden;
  font-size: 14px;
  height: 40%;
  letter-spacing: 0.13em;
  animation: ${(props) => props.animation? "typing" : "erasing"} 4s steps(40) normal both;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes erasing {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 75%;
  height: 90%;
  z-index: -1;
  background: linear-gradient(140deg, #110165 0%, #4b1a75 72%);
  border-radius: 50%;

  @keyframes glow {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 0 0 #ffffff, -5px -10px 0 #feac5e,

    }
    100% {
      transform: rotate(360deg);
      box-shadow: 0 -10px -10px #ffffff, -5px -10px 0 #feac5e,
    }
  }

  &:before {
    content: "";
    position: absolute;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    animation: glow 8s linear infinite;
  }
`;


function Home() {
    const [robotClicked, setRobotClicked] = useState(false)
    const [descriptionShowed, setDescriptionShowed] = useState(false)
    const [buttonShowed, setButtonShowed] = useState(false)
    const [lineSize, setLineSize] = useState(false)

    const handleRobotClicked = () => {
        if (robotClicked) {
            setRobotClicked(false)
            setTimeout(() => {
                setLineSize(false)
                setButtonShowed(true)
                setDescriptionShowed(false)
            }, 3500)
        } else {
            setTimeout(() => {
                setLineSize(true)
            }, 3500)
            setButtonShowed(false)
            setDescriptionShowed(true)
            setRobotClicked(true)
        }
    }

    return (
        <Section id="Home">
            <Left>
                <StyledContainer>
                    <StyledCircle />
                    <StyledGradientLine size = {(!lineSize && 170) || 500}
                                        animation = {(robotClicked && 'growUp') || 'growDown'}
                    />
                </StyledContainer>
            </Left>
            <Middle>
                <Title>Victor DEMESSANCE</Title>
                <Subtitle>Innovative computer science student</Subtitle>
                {(descriptionShowed && <Desc animation={robotClicked}>
                    I'm a future French engineer interested in computer science, but also in any kind of knowledge. My favorite pastime is learning and understanding how things work. From the smallest insect 🪲 to the largest galaxy 🔭, everything can be understood and absorbed. On this page, I want to share one of my passions, computer science.
                    Small projects to experiment, or bigger ones to learn. I post everything that I think is interesting to share, both to help and to present my skills.

                    At the time I write this, I am still a young engineering student with a new look on the world. However, I hope that one day this directory will show the knowledge I have acquired in the field where everything is possible and which I want to make my job:

                    Computer science ! 💻
                </Desc>) || <Button animation={buttonShowed}><text>Click on the robot to learn more about me ! </text></Button>}
            </Middle>
            <Right>
                <CanvasContainer>
                    <Circle>
                        <Canvas
                            frameloop={"demand"}
                            camera={{position: [3,2,10]}}
                        >
                            <Robot onClick={handleRobotClicked} robotClicked={robotClicked}/>
                            <OrbitControls enableZoom={false}></OrbitControls>
                        </Canvas>
                    </Circle>
                </CanvasContainer>
            </Right>
        </Section>
    )
}

export default Home;