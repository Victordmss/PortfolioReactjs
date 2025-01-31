import React from "react";
import styled from "styled-components";

import logo1 from "../../assets/Schools/UTC/logoUTC1.png";
import logo2 from "../../assets/Schools/UTC/logoUTC2.png";

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

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

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

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-self: center;
  width: 265px;
  height: 225px;
  padding: 10px;
  gap: 20px;
`;

const FirstRowLogo = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  background-image: url(${logo1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SecondRowLogo = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  background-image: url(${logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function UTCDescription() {

    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg, rgba(203, 156, 3, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                <b>2020</b>
            </DateTitle>
            <DateLink size={60} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.81) 92%);"/>
            <DateTitle gradient="linear-gradient(90deg, rgba(203, 156, 3, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                <b>2022</b>
            </DateTitle>
            <DateLink size={25} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.12) 92%);"/>
            <RightArrow color="rgba(255, 208, 0, 0.11)"/>
        </DateTitleRow>
        <TextDescription>
            Preparatory school for engineering studies.
            These two years provide the general knowledge and learning methods that are essential for contemporary
            engineers.
        </TextDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg, rgba(203, 156, 3, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);">
                <b>2022 </b>
            </DateTitle>
            <DateLink size={30} gradient="linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, 0.12) 92%);"/>
            <RightArrow color="rgba(255, 208, 0, 0.11)"/>
        </DateTitleRow>
        <TextDescription>
            Engineering course specialising in computer science.
            The aim is to develop general and rigorous skills in order to combine academic excellence with the
            adaptability and responsibility learnt at the UTC.
        </TextDescription>
    </SchoolDescription>);
}

export function UtcComponent(animation) {

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
          background-color: #F7CC11; 
        }
`;

    return <DescriptionContainer animation={animation}>
        <style>{customSwiperStyles}</style>
        <SchoolTitle><b>University of Technology of Compiegne</b></SchoolTitle>
        <Line color='#F7CC11'/>
        <FirstRow>
            <Logo>
                <FirstRowLogo/>
                <SecondRowLogo/>
            </Logo>
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
                <Line color="#F7CC11"/>
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
                <VolunteeringTitle><SemiLine color="#F7CC11"/><b>Volunteering Experiences</b><SemiLine color="#F7CC11"/></VolunteeringTitle>
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
