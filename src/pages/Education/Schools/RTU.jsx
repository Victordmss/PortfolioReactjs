import React from "react";
import styled from "styled-components";

import logoRTU from "../../../assets/Schools/RTU/logoRTU.png";

import logoESN from "../../../assets/Schools/RTU/logoESN.png"
import logoRIGA from "../../../assets/Schools/RTU/logoRIGA.png"
import logoPROGRAMING from "../../../assets/Schools/RTU/logoPROGRAMING.jpg"



import logoUML from "../../../assets/Schools/UTC/logoUML.png";
import logoPYTHON from "../../../assets/Schools/UTC/logoPYTHON.png";
import logoCplusplus from "../../../assets/Schools/RTU/logoC++.png"
import logoORANGE from "../../../assets/Schools/RTU/logoORANGE.png"
import logoPYGAME from "../../../assets/Schools/RTU/logoPYGAME.png"
import logoWORDPRESS from "../../../assets/Schools/RTU/logoWORDPRESS.png"




import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import {
    AssociationListContainer,
    DateLink,
    DateTitle,
    DateTitleRow,
    DescriptionContainer, FirstRow, KeyWords, Line, Presentation,
    RightArrow,
    SchoolDescription, SchoolTitle, SecondRow, SemiLine,
    TextDescription, VolunteeringTitle
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

const StackListContainer = styled.div`
  margin-block: 5px;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StackList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  height: 60px;
  align-items: center;
  //background: rgba(250, 54, 217, 0.42);
`;

const StackBox = styled.div`
  background: ${props => props.color};
  border-radius: 10px;
  height: 60px;
  margin-bottom: 10px;
  width: 60px;
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    scale: 0.9
  }
  
`;

const Word = styled.div`
  cursor:pointer;
  text-align: center;
  width: max-content;

  &:hover {
      letter-spacing: 3px;
      transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  a {
    text-decoration: none;
  }
`;

const AssociationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  gap: 50px;
  //background: rgba(250, 54, 217, 0.42);
`;

const AssociationBox = styled.div`
  border-radius: 10px;
  height: 60px;
  width: 60px;
  background: ${(props) => props.color};
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
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

    return <DescriptionContainer animation={animation}>
        <SchoolTitle><b>Technical University of Riga</b></SchoolTitle>
        <Line color="#225451"/>
        <FirstRow>
            <Logo/>
            <Presentation>
                <StackListContainer>
                    <StackList>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={25}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}
                        >
                            {stackBoxImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a key={index} href={item[3]} target="_blank" rel="noreferrer"><StackBox key={index} url={item[1]} color={item[2]}/></a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StackList>
                </StackListContainer>
                <Line color="#225451"/>
                <KeyWords>
                    <Word> <a href={"https://www.geeksforgeeks.org/data-structures/"} target="_blank" rel="noreferrer">Software engineering</a> </Word>
                    <Word> <a href={"https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"} target="_blank" rel="noreferrer">OOP</a> </Word>
                    <Word> <a href={"https://stph.scenari-community.org/bdd/0/co/bdd.html"} target="_blank" rel="noreferrer">AI & Machine's learning</a> </Word>
                    <Word> <a href={"https://en.wikipedia.org/wiki/VHDL"} target="_blank" rel="noreferrer">Algorithms</a> </Word>
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <RTUDescription/>
            <AssociationListContainer>
                <VolunteeringTitle><SemiLine color="#225451"/><b>Experiences</b><SemiLine color="#225451"/></VolunteeringTitle>
                <AssociationList>
                        {associationBoxImages.map((data, index) => (
                            <a key={index} href={data[2]} target="_blank" rel="noreferrer"><AssociationBox key={index} url={data[0]} color={data[1]}/></a>
                        ))}
                </AssociationList>
            </AssociationListContainer>
        </SecondRow>
    </DescriptionContainer>;
}
