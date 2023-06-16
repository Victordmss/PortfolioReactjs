import React, {useState} from "react"
import styled from "styled-components";
import Map from "./Map.jsx"
import '../../App.css'
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {StyledContainer, StyledGradientLine, StyledCircle} from "../../App.js"
import Hat from "./GraduationHat";
import UtcComponent from "./Schools/UTC"
import rtuComponent from "./Schools/RTU";
import LfcComponent from "./Schools/LFC";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const Left = styled.div`
  text-align: center;
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;

const Middle = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 50px;
`;

const Right = styled.div`
  //background: #db2b39;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const Button = styled.div`
  height: 10px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(140deg, #30167c 0%, #4b1a75 72%);
  font-size: 18px;
  transition: background-color 0.3s ease;
  animation: ${(props) => (props.animation && "appearing") || ""} 1s;

  @keyframes appearing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Title = styled.h1`
  font-size: 74px;
  padding-bottom: 20px;
`;

const MapContainer = styled.div`
  margin-top: 30px;
  width: 500px;
  height: 500px;
  display: flex;
  background: #050519;
  border-radius: 50px;
  overflow: hidden;
  background: linear-gradient(140deg, #110165 0%, #4b1a75 72%);
  animation: floating 2s infinite ease alternate;

  @keyframes floating {
    to {
      transform: translateY(20px);
    }
  }
`;

const CanvasContainer = styled.div`
  align-self: center;
  //background: aqua;
  height: 70%;
  width: 70%;
  animation: ${(props) => (props.animation && "getIn") || "getOut"} 0.5s ease-in;

  @keyframes getIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes getOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

function Education() {
    const [description, setDescription] = useState("")
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(true);


    const handleMarkerClick = (event, new_description) => {
        if (new_description === description) {
            setIsDescriptionOpen(!isDescriptionOpen)
            setTimeout(() => {
                setDescription("");
                setIsModelOpen(true)
            }, 490);}
    else {
            console.log(isModelOpen, isDescriptionOpen, description);
            setIsModelOpen(false)
            setIsDescriptionOpen(false)
            setTimeout(() => {
                setDescription(new_description);
                setIsDescriptionOpen(true);
            }, 490);}
    };

    return (
        <Section id="Education">
            <Left>
                <StyledContainer>
                    <StyledCircle />
                    <StyledGradientLine  size = {635}/>
                </StyledContainer>
            </Left>
            <Middle>
                <Title>
                    Education
                </Title>
                <Button>
                    Click on the map to learn more about my studies
                </Button>
                <MapContainer animation = {description}>
                    <Map setState={handleMarkerClick}/>
                </MapContainer>
            </Middle>
            <Right>
                {
                    (
                        description==="UTC"
                        &&
                        UtcComponent(isDescriptionOpen)
                    )
                    ||
                    (
                        description==="RTU"
                        &&
                        rtuComponent(isDescriptionOpen)
                    )
                    ||
                    (
                        description==="LFC"
                        &&
                        LfcComponent(isDescriptionOpen)
                    )
                    ||
                    (
                        <CanvasContainer animation = {isModelOpen}>
                            <Canvas frameloop={"demand"} camera={{position: [3, 2, 10]}}>
                                <Hat/>
                                <OrbitControls enableZoom={false} enablePan={false} autoRotate={true}/>
                            </Canvas>
                    </CanvasContainer>)
                }
            </Right>
        </Section>
    )
}

export default Education;