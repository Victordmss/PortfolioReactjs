import React, {useState} from "react"
import styled from "styled-components";

import logoUTC from "../../assets/Schools/UTC/logoUTC.png";

import logoSQL from "../../assets/Logos/logoSQL.png";
import logoC from "../../assets/Logos/logoC.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoVHDL from "../../assets/Logos/logoVHDL.jpg";
import logoPOSTGRESQL from "../../assets/Logos/logoPOSTGRESQL.png";
import logoLINUX from "../../assets/Logos/logoLINUX.png";
import logoR from "../../assets/Logos/logoR.png";
import logoUML from "../../assets/Logos/logoUML.png";

import logoCANDIDE from "../../assets/Schools/UTC/logoCANDIDE.jpg";
import logoEPI from "../../assets/Schools/UTC/logoEPI.jpg";
import logoFABLAB from "../../assets/Schools/UTC/logoFABLAB.png";
import logoINTEGFEV from "../../assets/Logos/logoINTEGFEV.png";
import logoUCC from "../../assets/Schools/UTC/logoUCC.png";

import logoRobotics from "../../assets/Logos/logoRobotics.png";
import logoComputer from "../../assets/Logos/logoComputerScience.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import {theme} from "../../theme"

import {
    AssociationBox,
    AssociationList,
    AssociationListContainer,
    DateLink,
    DateTitle,
    DateTitleRow,
    DescriptionContainer, FirstRow, KeyWords, Line, Presentation,
    RightArrow,
    SchoolDescription, SchoolTitle, SecondRow, SemiLine, StackBox, StackList, StackListContainer,
    TextDescription, VolunteeringTitle, Word
} from "./SchoolLayout";


const FirstCol = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  gap: 1rem;
  width: 100%;

`;

const Logo = styled.div`
  background-image: url(${logoUTC});
  align-self: center;
  height: 13vh;
  width: 90%;
  margin-inline: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const DegreeButtonRaw = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-evenly; 
  width: 100%;
`;

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

function UTCDescription() {

    return (<SchoolDescription>
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
        <TextDescription>
            Computer Science engineering degree (specialising in embeeded systems).
        </TextDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg, rgba(231, 177, 0, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                <b>2024</b>
            </DateTitle>
            <DateLink size={30} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.12) 92%);"/>
            <RightArrow color="rgba(230, 192, 22, 0.3)"/>
        </DateTitleRow>
        <TextDescription>
            Master course specialising in Automatics and Robotics.
        </TextDescription>
    </SchoolDescription>);
}

export function UtcComponent({animation}) {
    const [degreeDisplayed, setDegreeDisplayed] = useState("Engineer");

    const handleDegreeChange = (degreeType) => {
        setDegreeDisplayed(degreeType); 
    };

    const stackBoxImages = [
        ["C", logoC, "https://en.wikipedia.org/wiki/C_(programming_language)"],
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["SQL", logoSQL, "https://en.wikipedia.org/wiki/SQL"],
        ["VHDL", logoVHDL, "https://en.wikipedia.org/wiki/VHDL"],
        ["PostreSQL", logoPOSTGRESQL, "https://en.wikipedia.org/wiki/PostgreSQL"],
        ["Linux", logoLINUX, "https://en.wikipedia.org/wiki/Linux"],
        ["R", logoR, "https://en.wikipedia.org/wiki/R_(programming_language)"],
        ["UML", logoUML, "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
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
                    <StackList>
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
                            {stackBoxImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                                        <StackBox key={index} url={item[1]}/></a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StackList>
                </StackListContainer>
                <Line color={theme.schools.utc}/>
                <KeyWords>
                    <Word><a href={"https://www.geeksforgeeks.org/data-structures/"} target="_blank" rel="noreferrer">Data Structures</a></Word>
                    <Word><a href={"https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"} target="_blank" rel="noreferrer">Computer Architecture</a></Word>
                    <Word><a href={"https://stph.scenari-community.org/bdd/0/co/bdd.html"} target="_blank" rel="noreferrer">Database</a></Word>
                    <Word><a href={"https://en.wikipedia.org/wiki/VHDL"} target="_blank" rel="noreferrer">FPGA</a></Word>
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <UTCDescription/>
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
