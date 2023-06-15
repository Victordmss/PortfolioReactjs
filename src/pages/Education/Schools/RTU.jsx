import React from "react";
import styled from "styled-components";

import logoRTU from "../../../assets/Schools/RTU/logoRTU.png";

import logoESN from "../../../assets/Schools/RTU/logoESN.png"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";


const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: 90%;
  border-radius: 50px;
  background: rgba(238, 238, 238, 0.19);
  display: flex;
  flex-direction: column;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }
`;

const SchoolTitle = styled.div`
  text-align: center;
  font-size: 25px;
  height: fit-content;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Line = styled.div`
  margin-bottom: 10px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: #225451;
`;

const FirstRow = styled.div`
  flex: 0.7;
  align-self: center;
  //background: rgba(239, 236, 236, 0.37);
  display: flex;
  flex-direction: row;
  margin-block: 8px;
  justify-content: space-evenly;
`;

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

const Presentation = styled.div`
  align-self: center;
  width: 265px;
  height: 215px;
  border-radius: 30px;
  background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
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
  background: white;
  border-radius: 10px;
  height: 60px;
  margin-bottom: 10px;
  width: 60px;
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const KeyWords = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

const SecondRow = styled.div`
  height: 100%;
  margin-top: 10px;
  //border-radius: 20px;
  //background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SchoolDescription = styled.div`
  //background: rgba(173, 101, 13, 0.42);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  border-radius: 20px;
  padding: 20px;
  background: rgba(239, 236, 236, 0.24);
`;

const DateTitle = styled.div`
  font-size: 15px;
  border-radius: 15px;
  width: fit-content;
  padding: 7px;
  background: linear-gradient(90deg, rgba(32, 100, 95, 0.56) 20%, rgba(42, 133, 127, 0.54) 92%);
`;

const DateTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin-bottom: 10px;
`;

const DateLink = styled.div`
  align-self: center;
  width: ${(props) => props.size}px;
  height: 3px;
  background: linear-gradient(140deg, rgba(42, 133, 127, 0.54) 20%, rgba(32, 100, 95, ${(props) => props.fadeValue}) 92%);
`;

const RightArrow = styled.div`
  align-self: center;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid rgba(42, 133, 127, 0.11);
`;

const TextDescription = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
`;

const VolunteeringTitle = styled.div`
  font-size: 15px;
  width: 100%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

const SemiLine = styled.div`
  height: 2px;
  width: 30%;
  background: #225451;
`;

const AssociationListContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

const AssociationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
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
            <DateTitle><b>January 2023</b></DateTitle>
            <DateLink size={60} fadeValue={0.81}/>
            <DateTitle><b>June 2023</b></DateTitle>
            <DateLink size={25} fadeValue={0.12}/>
            <RightArrow/>
        </DateTitleRow>
        <TextDescription>
            My semester in Riga was made possible thanks to the Erasmus+ programme with Riga University of Technology.
            This experience was very diversified and is important in the development of my current profile.
            I was able to meet people of all nationalities, travel extensively and discover new cultures that made me learn and realise many things about myself and my aspirations.
        </TextDescription>
    </SchoolDescription>);
}

export default function RtuComponent() {


    const stackBoxImages = [
        [logoESN, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoRTU, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoESN, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoRTU, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoESN, "#ffffff", "https://info.erasmusplus.fr/"],
        [logoRTU, "#ffffff", "https://info.erasmusplus.fr/"],
    ];

    const associationBoxImages = [
        [logoESN, "#ffffff", "https://info.erasmusplus.fr/"],
    ];

    return <DescriptionContainer>
        <SchoolTitle><b>Technical University of Riga</b></SchoolTitle>
        <Line/>
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
                            {stackBoxImages.map((url, index) => (
                                <SwiperSlide>
                                    <StackBox key={index} url={url}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StackList>
                </StackListContainer>
                <center>
                    <Line/>
                </center>
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
                <VolunteeringTitle><SemiLine/><b>Experiences</b><SemiLine/></VolunteeringTitle>
                <AssociationList>
                        {associationBoxImages.map((data, index) => (
                            <a key={index} href={data[2]} target="_blank" rel="noreferrer"><AssociationBox key={index} url={data[0]} color={data[1]}/></a>
                        ))}
                </AssociationList>
            </AssociationListContainer>
        </SecondRow>
    </DescriptionContainer>;
}
