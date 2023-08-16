import React from "react";
import styled from "styled-components";
import 'swiper/css/bundle';

import logoRTU from "../../../assets/Schools/RTU/logoRTU.png";

import logoESN from "../../../assets/Schools/RTU/logoESN.png"
import logoRIGA from "../../../assets/Schools/RTU/logoRIGA.png"
import logoPROGRAMING from "../../../assets/Logos/logoPROGRAMING.jpg"

import logoUML from "../../../assets/Logos/logoUML.png";
import logoPYTHON from "../../../assets/Logos/logoPYTHON.png";
import logoCplusplus from "../../../assets/Logos/logoC++.png"
import logoORANGE from "../../../assets/Logos/logoORANGE.png"
import logoPYGAME from "../../../assets/Logos/logoPYGAME.png"
import logoWORDPRESS from "../../../assets/Logos/logoWORDPRESS.png"


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
  background-image: url(${logoRTU});
  align-self: center;
  width: 265px;
  height: 200px;
  padding: 10px;
  gap: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function RTUDescription() {
    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg, rgba(32, 100, 95, 0.56) 20%, rgba(42, 133, 127, 0.54) 92%)">
                <b>January 2023</b>
            </DateTitle>
            <DateLink size={60} gradient="linear-gradient(140deg, rgba(42, 133, 127, 0.54) 20%, rgba(32, 100, 95, 0.81) 92%)"/>
            <DateTitle gradient="linear-gradient(90deg, rgba(32, 100, 95, 0.56) 20%, rgba(42, 133, 127, 0.54) 92%)">
                <b>June 2023</b>
            </DateTitle>
            <DateLink size={25} gradient="linear-gradient(140deg, rgba(42, 133, 127, 0.54) 20%, rgba(32, 100, 95, 0.12) 92%)"/>
            <RightArrow color="rgba(42, 133, 127, 0.11)"/>
        </DateTitleRow>
        <TextDescription>
            My semester in Riga was made possible thanks to the Erasmus+ programme with Riga University of Technology.
            This experience was very diversified and is important in the development of my current profile.
            I was able to meet people of all nationalities, travel extensively and discover new cultures that made me learn and realise many things about myself and my aspirations.
        </TextDescription>
    </SchoolDescription>);
}

export default function RtuComponent(animation) {

    const stackBoxImages = [
        ["Python", logoPYTHON, "transparent", "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["UML", logoUML, "transparent", "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
        ["C++", logoCplusplus, "transparent", "https://en.wikipedia.org/wiki/C%2B%2B"],
        ["WORDPRESS", logoWORDPRESS, "transparent", "https://en.wikipedia.org/wiki/WordPress.com"],
        ["PYGAME", logoPYGAME, "transparent", "https://www.pygame.org/news"],
        ["ORANGE", logoORANGE, "transparent", "https://orangedatamining.com/"],
    ];

    const associationBoxImages = [
        [logoESN, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoPROGRAMING, "#ffffff", "https://github.com/Victordmss"],
        [logoRIGA, "#ffffff", "https://www.riga.lv/lv?utm_source=https%3A%2F%2Fwww.google.com%2F"],
    ];

    const RTUSwiperStyles = `
    
        .RTUSwiper {
            height: 85px;
        }
           
        .RTUSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px; 
          cursor: pointer;
        }
        
        .RTUSwiper .swiper-pagination-bullet-active {
          background-color: #225451; 
        }
`;

    return <DescriptionContainer animation={animation}>
        <style>{RTUSwiperStyles}</style>
        <SchoolTitle><b>Technical University of Riga</b></SchoolTitle>
        <Line color="#225451"/>
        <FirstRow>
            <Logo/>
            <Presentation>
                <StackListContainer>
                    <StackList>
                        <Swiper
                            className="RTUSwiper"
                            modules={[Autoplay, Pagination]}
                            slidesPerView={3}
                            spaceBetween={25}
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
                                    <a key={index} href={item[3]} target="_blank" rel="noreferrer">
                                        <StackBox key={index} url={item[1]} color={item[2]}/></a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StackList>
                </StackListContainer>
                <Line color="#225451"/>
                <KeyWords>
                    <Word> <a href={"https://en.wikipedia.org/wiki/Software_development"} target="_blank" rel="noreferrer">Software engineering</a> </Word>
                    <Word> <a href={"https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet"} target="_blank" rel="noreferrer">OOP</a> </Word>
                    <Word> <a href={"https://en.wikipedia.org/wiki/Artificial_intelligence"} target="_blank" rel="noreferrer">AI & Machine's learning</a> </Word>
                    <Word> <a href={"https://www.geeksforgeeks.org/fundamentals-of-algorithms/"} target="_blank" rel="noreferrer">Algorithms</a> </Word>
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <RTUDescription/>
            <AssociationListContainer>
                <VolunteeringTitle><SemiLine color="#225451"/><b>Experiences</b><SemiLine color="#225451"/></VolunteeringTitle>
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
