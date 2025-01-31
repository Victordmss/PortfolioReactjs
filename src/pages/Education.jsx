import React, {useState} from "react"
import styled from "styled-components";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {UtcComponent, RtuComponent, Hat, Map, StyledCircle, StyledContainer, StyledGradientLine} from "../components"
import {theme} from "../theme"

const Section = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.secondary};
`;

const FirstRow = styled.div`
  padding-block : 0.5rem;
  font-weight: bold;
  font-size: 4rem;
  height: 10vh;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SecondRow = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items:center;
`;

const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`;

const Button = styled.div`
  height: 10px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  background: ${theme.colors.primary};
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

const MapContainer = styled.div`
  margin-top: 20px;
  width: 500px;
  height: 500px;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  background: ${theme.colors.primary};
  animation: floating 2s infinite ease alternate;

  @keyframes floating {
    to {
      transform: translateY(20px);
    }
  }
`;

const CanvasContainer = styled.div`
  align-self: center;
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
          <FirstRow>
            EDUCATION
          </FirstRow>
          <SecondRow>
          <Left>
                <Button>
                    Click on the markers to learn more about my studies
                </Button>
                <MapContainer animation = {description}>
                    <Map setState={handleMarkerClick}/>
                </MapContainer>
            </Left>
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
                        RtuComponent(isDescriptionOpen)
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
          </SecondRow>
        </Section>
    )
}

export default Education;