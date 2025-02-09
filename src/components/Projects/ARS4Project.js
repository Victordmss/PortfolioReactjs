import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";
import logoREACT from "../../assets/Logos/logoREACT.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoRSM from "../../assets/Logos/logoRSM.jpg"
import Portfolio1 from "../../assets/ProjectsCanvas/Portfolio1.png";
import Portfolio2 from "../../assets/ProjectsCanvas/Portfolio2.png";
import Portfolio3 from "../../assets/ProjectsCanvas/Portfolio3.png";

import {BoxContent, 
  FirstColumn, 
  TitleRow,
  ProjectTitle, 
  LinkBox,
  BriefDescription, 
  MediaContainer, 
  Item, 
  SecondColumn,
  Description, 
  KeyWords,
  Word,
  Row, 
  StackList, 
  StackBox} from "./ProjectLayout"

import {Line} from "../index"

export function ARS4Project({color, gradient}) {
    const Canvas = [
      ARS4_1,
      ARS4_2,
      ARS4_3
    ];

    const Stack = [
        ["Matlab", logoMATLAB, "https://fr.legacy.reactjs.org/"],
        ["React Simple Map", logoOVERLEAF, "https://www.react-simple-maps.io"],
    ];

    return (
        <BoxContent>
            <FirstColumn>
              <TitleRow>
                <ProjectTitle fontsize={"4rem"} gradient={gradient}>Web Portfolio</ProjectTitle>
                <LinkBox url={logoGithub}/>
              </TitleRow>                
              <BriefDescription>
                Creating a portfolio website in React.js from scratch
              </BriefDescription>
              <MediaContainer color={color}>
                  <Swiper
                      modules={[Autoplay]}
                      loop={true}
                      autoplay={{
                          delay: 2500,
                          pauseOnMouseEnter: true,
                          disableOnInteraction: false
                      }}
                      style={{ height: "100%", width: "100%" }}
                  >
                      {Canvas.map((item, index) => (
                          <SwiperSlide key={index}>
                              <Item url={item}/>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </MediaContainer>
            </FirstColumn>
            <SecondColumn>
                <Description>
                    <KeyWords>
                        <Word>
                            Web design
                        </Word>
                        <Word>
                            Web Development
                        </Word>
                        <Word>
                            Responsiveness and Adaptability
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    The aim of the project was to create a website from Scracth (without using any UI component libraries) offering the opportunity to get to know me better. <br/><br/>
                    This portfolio allows me to learn more about myself, my skills, my career path and the experience I've acquired in the course of my personal projects.<br/><br/>
                </Description>
                <StackList>
                    <Row>
                        {Stack.map((item, index) => (
                            <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                                <StackBox key={index} url={item[1]} />
                            </a>))}
                    </Row>
                </StackList>
            </SecondColumn>
        </BoxContent>
    )
}