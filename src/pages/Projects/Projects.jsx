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
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(238, 238, 238, 0.19);
  border-radius: 40px;
  overflow: hidden;
  animation: floating 3s infinite ease alternate;
  
  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

const BoxContent = styled.div`
  //background: chocolate;
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
  padding: 15px;
  background: rgba(239, 236, 236, 0.24);
  border-radius: 25px;
  font-size: 14px;
  //background: darkmagenta;
  height: 80%;
  width: 100%;
  text-align: justify;
`;

const Item = styled.div`
  margin-top: 50px;
  align-self: center;
  width: 450px;
  background-image: url(${OthelloImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 270px;
`;

const SecondColumn = styled.div`
  //background: red;
  margin: 10px;
  flex: 0.65; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StackList = styled.div`
  background: rgba(239, 236, 236, 0.24);
  border-radius: 25px;
  padding: 10px;
  align-self: center;
  width: 100%;
  height: fit-content;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-direction: row;
`;

const StackBox = styled.div`
  background: rgba(154, 129, 227, 0.42);
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
                </ProjectBox>
        </Section>
    )
}

export default Projects;