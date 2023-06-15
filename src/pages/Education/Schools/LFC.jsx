import React from "react";
import styled from "styled-components";

import logoLFC from "../../../assets/Schools/LFC/logoLFC.jpg";
import logoDEGREE from "../../../assets/Schools/LFC/logoDIPLOME.png";
import logoRCME from "../../../assets/Schools/LFC/logoRCME.png";
import Diplome from "../../../assets/Schools/LFC/Diplome_BAC.pdf"

import "swiper/css";
import "swiper/css/autoplay";


const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: fit-content;
  border-radius: 50px;
  margin-left: 50px ;
  margin-right: 80px;
  background: rgba(238, 238, 238, 0.19);
  display: flex;
  flex-direction: column;
  animation: 3s infinite alternate floating;

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
  background: #4C9B3F;
`;

const FirstRow = styled.div`
  flex: 0.7;
  align-self: center;
  //background: rgba(239, 236, 236, 0.37);
  display: flex;
  flex-direction: row;
  margin-block: 8px;
  width: 100%;
  justify-content: space-evenly;
  //background: #db2b39;
`;

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

const KeyWords = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Word = styled.div`
  cursor: default;
  text-align: center;
  width: max-content;
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
  background: linear-gradient(90deg, rgba(23, 114, 10, 0.6) 20%, rgba(74, 136, 53, 0.66) 92%);
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
  background: linear-gradient(140deg, rgba(74, 136, 53, 0.66) 20%, rgba(23, 114, 10, ${(props) => props.fadeValue}) 92%);
`;

const RightArrow = styled.div`
  align-self: center;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid rgba(23, 114, 10, 0.11);
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
  background: #4C9B3F;
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

const ExperienceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  font-size:12px  
`;

function LFCDescription() {
    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle><b>2017</b></DateTitle>
            <DateLink size={60} fadeValue={0.81}/>
            <DateTitle><b>2020</b></DateTitle>
            <DateLink size={25} fadeValue={0.12}/>
            <RightArrow/>
        </DateTitleRow>
        <TextDescription>
            High school is an important time for any young person who wants to study engineering.
            My time in high school enabled me to develop my curiosity as well as the rigour of my working methods in the scientific and literary fields.
        </TextDescription>
    </SchoolDescription>);
}

export default function LfcComponent() {
    return <DescriptionContainer>
        <SchoolTitle><b>Fustel de Coulanges High School</b></SchoolTitle>
        <Line/>
        <FirstRow>
            <Logo/>
            <Presentation>
                <DegreeRow>
                    <a href={Diplome} target="_blank" rel="noreferrer"><DegreeBox/></a>
                </DegreeRow>
                <Line/>
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
                <VolunteeringTitle><SemiLine/><b>Experiences</b><SemiLine/></VolunteeringTitle>
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
