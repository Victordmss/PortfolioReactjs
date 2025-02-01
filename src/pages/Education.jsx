import React, {useState} from "react"
import styled from "styled-components";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {UtcComponent, RtuComponent, Hat, Map, TitleRow} from "../components"
import {theme} from "../theme"
import hexa_flower from "../assets/hexa_flower.png"
import {motion} from "framer-motion";

const Section = styled.div`
  height: 100vh;
  width : 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.secondary};
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
  gap: 5px;
  align-items:center;
`;

const Right = motion(styled.div`
  background: url(${hexa_flower}) no-repeat left top;
  background-size: contain;
  flex: 0.5;
  overflow: visible
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`);

const CanvasContainer = styled.div`
  align-self: center;
  height: 100%;
  width: 100%;
  padding: 10rem;
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
  background: ${theme.colors.tertiary};
  color: white;
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
          <TitleRow>
            EDUCATION
          </TitleRow>
          <SecondRow>
          <Left>
                <Button>
                    Click on the markers to learn more about my studies
                </Button>
                <MapContainer animation = {description}>
                    <Map setState={handleMarkerClick}/>
                </MapContainer>
            </Left>
            <Right
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} 
            >
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