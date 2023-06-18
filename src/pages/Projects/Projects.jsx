import React from "react"
import styled from "styled-components";
import OthelloImage from "../../../src/assets/othello2.png";
import data from "../Education/Projects.json";
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-top: 10px;
  font-size: 74px;
  padding-bottom: 10px;
  text-align: center;
`;

const ProjectBox = styled.div`
  margin-inline: 7%;
  margin-block: 3%;
  margin-bottom: 6%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(46, 2, 93, 0.59);
  border-left: 4px solid #4b1a75;
  border-right: 4px solid #4b1a75;
  border-radius: 40px;
  flex: 1;
  overflow: hidden;
  animation: floating 3s infinite ease alternate;
  
  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

const LeftBorderBox = styled.div`
  background: transparent;
  flex: 0.05;
  cursor: pointer;

  &:hover{
    background: linear-gradient(to left, rgba(75, 26, 117, 0), #4b1a75);;
  }
`;

const RightBorderBox = styled.div`
  background: transparent;
  flex: 0.05;
  cursor: pointer;
  
  &:hover{
    background: linear-gradient(to right, rgba(75, 26, 117, 0), #4b1a75);;
  }
`;

const BoxContent = styled.div`
  //background: chocolate;
  flex: 1; 
  display: flex;
  flex-direction: row;
`;

const FirstColumn = styled.div`
  //background: brown;
  margin: 10px;
  flex: 0.60; 
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 74px;
  //background: aqua;
  height: fit-content;
`;

const BriefDescription = styled.div`
  font-size: 18px;
  //background: darkmagenta;
  height: fit-content;
  margin: 5px;
`;

const Description = styled.div`
  font-size: 16px;
  //background: darkmagenta;
  height: 450px;
  padding-top: 30px;
  margin: 5px;
  text-align: justify;
`;

const Item = styled.div`
  background: rgba(56, 19, 122, 0.25);
  margin-top: 50px;
  align-self: center;
  border: 2px solid rgba(56, 19, 122);
  border-radius: 25px;
  width: 450px;
  background-image: url(${OthelloImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 270px;
`;

const SecondColumn = styled.div`
  //background: blueviolet;
  margin: 10px;
  flex: 0.65; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StackList = styled.div`
  margin-top: 20px;
  background: rgba(56, 19, 122, 0.25);
  border: 2px solid rgba(56, 19, 122);
  border-radius: 25px;
  padding: 10px;
  align-self: center;
  width: 95%;
  height: 100px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-direction: row;
`;

const StackBox = styled.div`
  background: rgba(154, 129, 227, 0.42);
  border: 2px solid rgba(56, 19, 122);
  border-radius: 10px;
  height: 60px;
  width: 60px;
`;

const Line = styled.div`
  align-self: center;
  width: 2px;
  height: 90%;
  background: rgba(56, 19, 122);
`;

function Projects() {
    return (
        <Section id="Projects">
            <Title>
                Projects
            </Title>
                <ProjectBox>
                    <LeftBorderBox/>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={100}
                        loop={true}
                        autoplay={{
                            delay: 8000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <BoxContent>
                                    <FirstColumn>
                                        <ProjectTitle><b>{item.name}</b></ProjectTitle>
                                        <BriefDescription>
                                            {item.briefDescription}
                                        </BriefDescription>
                                        <Item/>
                                    </FirstColumn>
                                    <Line/>
                                    <SecondColumn>
                                        <Description>
                                            {item.description.map((sentence, index) => (
                                                <p key={index}>{sentence} <br/> <br/> </p>
                                            ))}
                                        </Description>
                                        <StackList>
                                            <text><b><i>STACK USED : </i></b></text>
                                            <Row>
                                                <StackBox/>
                                                <StackBox/>
                                                <StackBox/>
                                            </Row>
                                        </StackList>
                                    </SecondColumn>
                                </BoxContent>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <RightBorderBox/>
                </ProjectBox>
        </Section>
    )
}

export default Projects;