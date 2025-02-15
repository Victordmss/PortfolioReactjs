import React, {useState, useEffect} from "react"
import styled from "styled-components";
import {UtcComponent, RtuComponent, SnuComponent, Map, TitleRow} from "../components"
import {theme} from "../theme"
import hexa_flower from "../assets/hexa_flower.png"
import {motion} from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Section = styled.div`
  height: 92vh;
  width : 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.secondary_transparent};
`;

const SecondRow = styled.div`
  overflow: hidden;
  height: 85vh;
  padding-block: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
    align-items: center;
    padding-block: 1rem;
    overflow: visible;
  }
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
  background: url(${hexa_flower}) no-repeat center center;
  background-size: contain;
  flex: 0.45;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

const MapContainer = motion(styled.div`
  width: 40vw;
  height: fit-content;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  align-items: center;
  background: ${theme.colors.primary};
`);

function Education() {
    const [description, setDescription] = useState("")
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

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
            {isLargeScreen && <>
            <Left>
                  <MapContainer animation = {description}>
                      <Map setState={handleMarkerClick}/>
                  </MapContainer>
              </Left>
              <Right 
                initial={description === "" ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
                whileInView={description === "" ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
              >
                {description === "UTC" && <UtcComponent animation={isDescriptionOpen} />}
                {description === "RTU" && <RtuComponent animation={isDescriptionOpen} />}
                {description === "SNU" && <SnuComponent animation={isDescriptionOpen} />}
              </Right>
            </>}
            {!isLargeScreen && <>
              <UtcComponent/>
              <RtuComponent/>
              <SnuComponent/>
            </>}
          </SecondRow>
        </Section>
    )
}

export default Education;