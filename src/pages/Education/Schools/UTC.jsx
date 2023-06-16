import React from "react";
import styled from "styled-components";

import logo1 from "../../../assets/Schools/UTC/logoUTC1.png";
import logo2 from "../../../assets/Schools/UTC/logoUTC2.png";

import logoSQL from "../../../assets/Schools/UTC/logoSQL.png";
import logoC from "../../../assets/Schools/UTC/logoC.png";
import logoPYTHON from "../../../assets/Schools/UTC/logoPYTHON.png";
import logoVHDL from "../../../assets/Schools/UTC/logoVHDL.jpg";
import logoPOSTGRESQL from "../../../assets/Schools/UTC/logoPOSTGRESQL.png";
import logoLINUX from "../../../assets/Schools/UTC/logoLINUX.png";
import logoR from "../../../assets/Schools/UTC/logoR.png";
import logoUML from "../../../assets/Schools/UTC/logoUML.png";

import logoCANDIDE from "../../../assets/Schools/UTC/logoCANDIDE.jpg";
import logoEPI from "../../../assets/Schools/UTC/logoEPI.jpg";
import logoFABLAB from "../../../assets/Schools/UTC/logoFABLAB.png";
import logoINTEGFEV from "../../../assets/Schools/UTC/logoINTEGFEV.png";
import logoUCC from "../../../assets/Schools/UTC/logoUCC.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: fit-content;
  margin-left: 50px ;
  margin-right: 80px;
  border-radius: 50px;
  background: rgba(238, 238, 238, 0.19);
  display: flex;
  flex-direction: column;
  animation: 3s infinite alternate floating, ${(props) => (props.animation ? "getIn" : "getOut")} 1s ease-in;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }

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

const SchoolTitle = styled.div`
  text-align: center;
  font-size: 25px;
  height: fit-content;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

const Line = styled.div`
  margin-bottom: 15px;
  align-self: center;
  height: 1px;
  width: 90%;
  background: #F7CC11;
`;

const FirstRow = styled.div`
  flex: 0.7;
  align-self: center;
  //background: rgba(239, 236, 236, 0.37);
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-evenly;
`;

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
  //background: rgba(255, 0, 213, 0.56);
  background-image: url(${logo1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SecondRowLogo = styled.div`
  align-self: center;
  width: 250px;
  height: 100px;
  //background: rgba(255, 153, 0, 0.56);
  background-image: url(${logo2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Presentation = styled.div`
  align-self: center;
  width: 250px;
  height: 215px;
  border-radius: 30px;
  background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;

const StackListContainer = styled.div`
  margin-top: 5px;
  height: 90px;
  width: 100%;
`;

const StackList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  //background: rgba(250, 54, 217, 0.42);
`;

const StackBox = styled.div`
  border-radius: 10px;
  height: 60px;
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

const KeyWords = styled.div`
  height: 100px;
  margin: 5px;
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
  background: linear-gradient(90deg, rgba(203, 156, 3, 0.82) 20%, rgba(225, 185, 12, 0.81) 92%);
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
  background: linear-gradient(140deg, rgba(225, 185, 12, 0.82) 20%, rgba(203, 156, 3, ${(props) => props.fadeValue}) 92%);
`;

const RightArrow = styled.div`
  align-self: center;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid rgba(255, 208, 0, 0.11);
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
  height: 1px;
  width: 30%;
  background: #F7CC11;
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

function UTCDescription() {

    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle><b>2020</b></DateTitle>
            <DateLink size={60} fadeValue={0.81}/>
            <DateTitle><b>2022</b></DateTitle>
            <DateLink size={25} fadeValue={0.12}/>
            <RightArrow/>
        </DateTitleRow>
        <TextDescription>
            Preparatory school for engineering studies.
            These two years provide the general knowledge and learning methods that are essential for contemporary
            engineers.
        </TextDescription>
        <DateTitleRow>
            <DateTitle><b>2022 </b> </DateTitle>
            <DateLink size={30} fadeValue={0.12}/>
            <RightArrow/>
        </DateTitleRow>
        <TextDescription>
            Engineering course specialising in computer science.
            The aim is to develop general and rigorous skills in order to combine academic excellence with the
            adaptability and responsibility learnt at the UTC.
        </TextDescription>
    </SchoolDescription>);
}

export default function UtcComponent(animation) {

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

    return <DescriptionContainer animation={animation}>
        <SchoolTitle><b>University of Technology of Compiegne</b></SchoolTitle>
        <Line/>
        <FirstRow>
            <Logo>
                <FirstRowLogo/>
                <SecondRowLogo/>
            </Logo>
            <Presentation>
                <StackListContainer>
                    <StackList>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}
                        >
                            {stackBoxImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a key={index} href={item[2]} target="_blank" rel="noreferrer"><StackBox key={index} url={item[1]}/></a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </StackList>
                </StackListContainer>
                <Line/>
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
                <VolunteeringTitle><SemiLine/><b>Volunteering Experiences</b><SemiLine/></VolunteeringTitle>
                <AssociationList>
                    {associationBoxImages.map((data, index) => (
                        <a key={index} href={data[2]} target="_blank" rel="noreferrer"><AssociationBox key={index} url={data[0]} color={data[1]}/></a>
                    ))}
                </AssociationList>
            </AssociationListContainer>
        </SecondRow>
    </DescriptionContainer>;
}
