import React from "react";
import styled from "styled-components";

import logoLFC from "../../../assets/Schools/LFC/logoLFC.jpg";
import logoDEGREE from "../../../assets/Schools/LFC/logoDIPLOME.png";
import logoRCME from "../../../assets/Schools/LFC/logoRCME.png";
import Diplome from "../../../assets/Schools/LFC/Diplome_BAC.pdf"

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
  background: white;
  margin: 10px;
  background-image: url(${logoLFC});
  border-radius: 30px;
  align-self: center;
  width: 220px;
  height: 120px;
  border: 3px solid #4C9B3F;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const DegreeRow = styled.div`
  margin-block: 5px;
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DegreeBox = styled.div`
  align-self: center;
  background: white;
  border-radius: 10px;
  height: 60px;
  margin-bottom: 10px;
  width: 60px;
  background-image: url(${logoDEGREE});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  animation: 2s infinite alternate floating;
  
  &:hover {
    scale: 0.9
  }
  
  @keyframes floating {
    to {
      transform: translateY(3px);
    }
  }
  
`;

const Word = styled.div`
  cursor: default;
  text-align: center;
  width: max-content;
`;

const ExperienceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -5px;
  height: 60px;
  gap: 10px;
  padding-inline: 20px;
  //background: rgba(250, 54, 217, 0.42);
`;

const RCMElogo = styled.div`
  flex: 1;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  background: white;
  background-image: url(${logoRCME});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

const RCMEDescription = styled.div`
  align-self: center;
  text-align: justify;
  flex:7;
  font-size:14px  
`;

function LFCDescription() {
    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg, rgba(23, 114, 10, 0.6) 20%, rgba(74, 136, 53, 0.66) 92%)">
                <b>2017</b>
            </DateTitle>
            <DateLink size={60} gradient="linear-gradient(140deg, rgba(74, 136, 53, 0.66) 20%, rgba(23, 114, 10, 0.81) 92%)"/>
            <DateTitle gradient="linear-gradient(90deg, rgba(23, 114, 10, 0.6) 20%, rgba(74, 136, 53, 0.66) 92%)">
                <b>2020</b>
            </DateTitle>
            <DateLink size={25} gradient="linear-gradient(140deg, rgba(74, 136, 53, 0.66) 20%, rgba(23, 114, 10, 0.12) 92%)"/>
            <RightArrow color="rgba(23, 114, 10, 0.11)"/>
        </DateTitleRow>
        <TextDescription>
            High school is an important time for any young person who wants to study engineering.
            My time in high school enabled me to develop my curiosity as well as the rigour of my working methods in the scientific and literary fields.
        </TextDescription>
    </SchoolDescription>);
}

export default function LfcComponent(animation) {
    return <DescriptionContainer animation={animation}>
        <SchoolTitle><b>Fustel de Coulanges High School</b></SchoolTitle>
        <Line color="#4C9B3F"/>
        <FirstRow>
            <Logo/>
            <Presentation>
                <DegreeRow>
                    <a href={Diplome} target="_blank" rel="noreferrer"><DegreeBox/></a>
                </DegreeRow>
                <Line color="#4C9B3F"/>
                <KeyWords>
                    <Word>Mathematics speciality</Word>
                    <Word>Scientific curriculum</Word>
                    <Word>Beginner Programming</Word>
                    <Word>Methods&rigour</Word>
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <LFCDescription/>
            <AssociationListContainer>
                <VolunteeringTitle><SemiLine color="#4C9B3F"/><b>Experiences</b><SemiLine color="#4C9B3F"/></VolunteeringTitle>
                <ExperienceRow>
                    <a href={"https://www.rcmessonne.com/"} target="_blank" rel="noreferrer"><RCMElogo/></a>
                   <RCMEDescription>
                       I was lucky enough to play in the RCME team for 10 years at national competition level.
                       Learning technical rigour and team spirit is now a strong feature of my personality.
                   </RCMEDescription>
                </ExperienceRow>
            </AssociationListContainer>
        </SecondRow>
    </DescriptionContainer>;
}
