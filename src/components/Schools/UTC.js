import React, {useState} from "react"
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {theme} from "../../theme"

// Logo School
import logoUTC from "../../assets/Schools/UTC/logoUTC.png";

// Logo Skills Engineer
import logoSQL from "../../assets/Logos/logoSQL.png";
import logoC from "../../assets/Logos/logoC.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoVHDL from "../../assets/Logos/logoVHDL.png";
import logoPOSTGRESQL from "../../assets/Logos/logoPOSTGRESQL.png";
import logoLINUX from "../../assets/Logos/logoLINUX.png";
import logoR from "../../assets/Logos/logoR.png";
import logoUML from "../../assets/Logos/logoUML.png";

// Logo Skills Master
import logoMATLAB from "../../assets/Logos/logoMatlab.png"
import logoSIMULINK from "../../assets/Logos/logoSimulink.png"

// Logo Voluntering 
import logoCANDIDE from "../../assets/Schools/UTC/logoCANDIDE.jpg";
import logoEPI from "../../assets/Schools/UTC/logoEPI.jpg";
import logoFABLAB from "../../assets/Schools/UTC/logoFABLAB.png";
import logoINTEGFEV from "../../assets/Logos/logoINTEGFEV.png";
import logoUCC from "../../assets/Schools/UTC/logoUCC.png";

// Logo degrees
import logoRobotics from "../../assets/Logos/logoRobotics.png";
import logoComputer from "../../assets/Logos/logoComputerScience.png";

// Card component imports
import {
    AssociationBox,
    AssociationList,
    AssociationListContainer,
    DateLink,
    DateTitle,
    DateTitleRow,
    DescriptionContainer, FirstRow, KeyWords, Presentation,
    RightArrow,
    SchoolDescription, SchoolTitle, SecondRow, SemiLine, StackBox, StackListContainer,
    TextDescription, VolunteeringTitle, Word
} from "./SchoolLayout";

import {Line} from "../index"

// Different FirstCol because of the degree selection
const FirstCol = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  gap: 1rem;
  width: 100%;

`;

// School logo
const Logo = styled.div`
  background-image: url(${logoUTC});
  align-self: center;
  height: 13vh;
  width: 90%;
  margin-inline: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Degree selection raw
const DegreeButtonRaw = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly; 
  width: 100%;
`;

// Degree selection button
const DegreeButton = styled.div`
  padding: 30px;
  background-image: url(${(props) => props.url}); 
  opacity: ${(props) => (props.activated ? 0.5 : 1)};
  scale : ${(props) => (props.activated ? 1.1 : 1)};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale : 1.1; 
  }
`;

// Degree selected title 
const DegreeTitle = styled.div`
    flex: 0.05;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1vw;
    gap: 5px;
    font-weight: bold;

    @media (max-width: 768px) {
        display: none;
    }
`;


function UTCDescription({degreeDisplayed}) {

    return (<SchoolDescription>
        {
            degreeDisplayed === "Engineer" && 
            <>
                <DateTitleRow>
                    <DateTitle gradient="linear-gradient(90deg, rgba(231, 177, 0, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                        <b>2020</b>
                    </DateTitle>
                    <DateLink size={60} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(231, 177, 0, 0.82) 92%);"/>
                    <DateTitle gradient="linear-gradient(90deg, rgba(231, 177, 0, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                        <b>2024</b>
                    </DateTitle>
                    <DateLink size={25} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.12) 92%);"/>
                    <RightArrow color="rgba(230, 192, 22, 0.3)"/>
                </DateTitleRow>
            </>
        }
        {
            degreeDisplayed === "Master" && 
            <>
                <DateTitleRow>
                    <DateTitle gradient="linear-gradient(90deg, rgba(231, 177, 0, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                        <b>2024</b>
                    </DateTitle>
                    <DateLink size={60} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(231, 177, 0, 0.82) 92%);"/>
                    <DateTitle gradient="linear-gradient(90deg, rgba(231, 177, 0, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                        <b>2025</b>
                    </DateTitle>
                    <DateLink size={25} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.12) 92%);"/>
                    <RightArrow color="rgba(230, 192, 22, 0.3)"/>
                </DateTitleRow>
            </>
        }
        <TextDescription>
        {
            degreeDisplayed === "Engineer" && 
            <>
                My Computer Science engineering degree from UTC is specialising in embedded and autonomous systems (INES).
                Although the course is general and covers all the concepts that are essential for any computer engineer,
                it also covers concepts that are specific to embedded programming and real-time operating systems.
            </>
        }
        {
            degreeDisplayed === "Master" &&
            <>
                My master's degree in Robotics and Autonomous Systems (ARS) 
                focuses on the research and development of advanced robotic systems. 
                The program covers control theory, artificial intelligence, perception, and autonomous decision-making, 
                with a strong emphasis on modeling, simulation, and innovative robotic transport applications 
                in real-world environments.
            </>
        }
        </TextDescription>
    </SchoolDescription>);
}

export function UtcComponent({animation}) {
    const [degreeDisplayed, setDegreeDisplayed] = useState("Engineer");

    const handleDegreeChange = (degreeType) => {
        setDegreeDisplayed(degreeType); 
    };

    const stackBoxImagesEngineer = [
        ["C", logoC, "https://en.wikipedia.org/wiki/C_(programming_language)"],
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["SQL", logoSQL, "https://en.wikipedia.org/wiki/SQL"],
        ["VHDL", logoVHDL, "https://en.wikipedia.org/wiki/VHDL"],
        ["PostreSQL", logoPOSTGRESQL, "https://en.wikipedia.org/wiki/PostgreSQL"],
        ["Linux", logoLINUX, "https://en.wikipedia.org/wiki/Linux"],
        ["R", logoR, "https://en.wikipedia.org/wiki/R_(programming_language)"],
        ["UML", logoUML, "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
    ];

    const stackBoxImagesMaster = [
        ["Matlab", logoMATLAB, "https://www.mathworks.com/products/matlab.html"],
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Simulink", logoSIMULINK, "https://en.wikipedia.org/wiki/Simulink"],
    ];

    const associationBoxImages = [
        [logoCANDIDE, "#ffffff", "https://www.instagram.com/candide.utc/?hl=fr"],
        [logoEPI, "#ffffff", "https://epi.assos.utc.fr/"],
        [logoFABLAB, "#ffffff", "https://fablabutc.fr/"],
        [logoINTEGFEV, "#000000", "https://www.instagram.com/bill.fev/?hl=fr"],
        [logoUCC, "rgba(121,102,155,0.68)", "https://assos.utc.fr/ucc/"]
    ];

    const customSwiperStyles = `
    
        .UTCSwiper {
            height: 85px;
        }
   
        .UTCSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px; 
          cursor: pointer;
        }
        
        .UTCSwiper .swiper-pagination-bullet-active {
          background-color: ${theme.schools.utc}; 
        }
`;

    return <DescriptionContainer animation={animation}>
        <style>{customSwiperStyles}</style>
        <SchoolTitle>
            <div>
                University of Technology of Compiegne
            </div>
            <Line color={theme.schools.utc}/>
        </SchoolTitle>
        <FirstRow>
            <FirstCol>
                <Logo/>
                <DegreeButtonRaw>
                    <DegreeButton url={logoComputer} activated={degreeDisplayed==="Engineer"} onClick={() => handleDegreeChange("Engineer")}/>
                    <DegreeButton url={logoRobotics} activated={degreeDisplayed==="Master"} onClick={() => handleDegreeChange("Master")}/>
                </DegreeButtonRaw>
            </FirstCol>
            <Presentation>
                <StackListContainer>
                    <Swiper
                        className={"UTCSwiper"}
                        modules={[Autoplay, Pagination]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        {degreeDisplayed==="Engineer" && stackBoxImagesEngineer.map((item, index) => (
                            <SwiperSlide key={index}>
                                <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                                    <StackBox key={index} url={item[1]}/></a>
                            </SwiperSlide>
                        ))}
                        {degreeDisplayed==="Master" && stackBoxImagesMaster.map((item, index) => (
                            <SwiperSlide key={index}>
                                <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                                    <StackBox key={index} url={item[1]}/></a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </StackListContainer>
                <Line color={theme.schools.utc}/>
                <KeyWords>
                    {
                        degreeDisplayed === "Engineer" && 
                        <>
                            <Word><a href={"https://www.geeksforgeeks.org/data-structures/"} target="_blank" rel="noreferrer">Data Structures</a></Word>
                            <Word><a href={"https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"} target="_blank" rel="noreferrer">Computer Architecture</a></Word>
                            <Word><a href={"https://en.wikipedia.org/wiki/Data_science"} target="_blank" rel="noreferrer">Data Science</a></Word>
                            <Word><a href={"https://en.wikipedia.org/wiki/Real-time_computing"} target="_blank" rel="noreferrer">Real time systems</a></Word>
                        </>
                    }
                    {
                        degreeDisplayed === "Master" && 
                        <>
                            <Word>Modeling</Word>
                            <Word>Perception</Word>
                            <Word>Estimation</Word>
                            <Word>Control</Word>
                        </>
                    }
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <DegreeTitle>
                <SemiLine color={theme.schools.utc} size={degreeDisplayed === "Engineer" ? "20%" : "30%"}/>
                {   
                    degreeDisplayed === "Engineer" &&
                    <>
                        Computer Science Engineering degree
                    </>
                }
                {   
                    degreeDisplayed === "Master" &&
                    <>
                        Robotics Master's degree
                    </>
                }
                <SemiLine color={theme.schools.utc} size={degreeDisplayed === "Engineer" ? "20%" : "30%"}/>
                </DegreeTitle>
            <UTCDescription degreeDisplayed={degreeDisplayed}/>
            <AssociationListContainer>
                <VolunteeringTitle><SemiLine color={theme.schools.utc}/><b>Volunteering Experiences</b><SemiLine color={theme.schools.utc}/></VolunteeringTitle>
                <AssociationList>
                    {associationBoxImages.map((data, index) => (
                        <a key={index} href={data[2]} target="_blank" rel="noreferrer">
                            <AssociationBox key={index} url={data[0]} color={data[1]}/></a>
                    ))}
                </AssociationList>
            </AssociationListContainer>
        </SecondRow>
    </DescriptionContainer>;
}
