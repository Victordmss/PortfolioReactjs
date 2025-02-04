import React, {useState} from "react"
import styled from "styled-components";
import {UtcComponent, RtuComponent, Map, TitleRow} from "../components"
import {theme} from "../theme"
import hexa_flower from "../assets/hexa_flower.png"
import {motion} from "framer-motion";

const Section = styled.div`
  height: 92vh;
  width : 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.secondary};
`;

const SecondRow = styled.div`
  overflow: hidden;
  height: 85vh;
  padding-block: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items:center;
`;

const Right = motion(styled.div`
  background: url(${hexa_flower}) no-repeat left top;
  background-size: contain;
  flex: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
`);

const MapContainer = motion(styled.div`
  margin-top: 20px;
  width: 500px;
  height: 500px;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  background: ${theme.colors.primary};
`);

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
                <MapContainer animation = {description}>
                    <Map setState={handleMarkerClick}/>
                </MapContainer>
            </Left>
            <Right // Animate only if not any marker is clicked (to prevent lag)
              initial={description === "" ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
              whileInView={description === "" ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
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
                      description==="SNU"
                      &&
                      RtuComponent(isDescriptionOpen)
                    )
                }
            </Right>
          </SecondRow>
        </Section>
    )
}

export default Education;