import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import React from "react";
import logoSIMULINK from "../../assets/Logos/logoSimulink.png";
import logoTelechargement from "../../assets/Logos/logoTELECHARGEMENTPDF.png"
import logoOVERLEAF from "../../assets/Logos/logoOVERLEAF.jpg";
import logoMATLAB from "../../assets/Logos/logoMatlab.png";
import ARS5_1 from "../../assets/ProjectsCanvas/ARS5_1.png";
import ARS5_2 from "../../assets/ProjectsCanvas/ARS5_2.png";
import ARS5_3 from "../../assets/ProjectsCanvas/ARS5_3.png";
import PDF from "../../assets/ARS5_Project.pdf";

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

export function ARS5Project({color, gradient}) {
    const Canvas = [
      [ARS5_1, "contain"],
      [ARS5_2, "cover"],
      [ARS5_3, "contain"],
    ];

    const Stack = [
        ["Matlab", logoMATLAB, "https://fr.legacy.reactjs.org/"],
        ["Simulink", logoSIMULINK, "https://fr.mathworks.com/products/simulink.html"],
        ["Overleaf", logoOVERLEAF, "https://fr.overleaf.com"],
    ];

    return (
        <BoxContent>
            <FirstColumn>
              <TitleRow>
                <LinkBox url={logoTelechargement} onClick={() => window.open(PDF, '_blank')}/>
                <ProjectTitle fontsize={"3vw"} gradient={gradient}>Quadcopter Control</ProjectTitle>
              </TitleRow>                
              <BriefDescription>
                Euler-Lagrange modelling of a quadcopter, stabilisation using neested saturation functions and trajectory convergence.
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
                              <Item url={item[0]} content={item[1]}/>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </MediaContainer>
            </FirstColumn>
            <SecondColumn>
                <Description>
                    <KeyWords>
                        <Word>
                            Euler-Lagrange Model
                        </Word>
                        <Word>
                            Quadcopter Stabilization
                        </Word>
                        <Word>
                            Control & trajectory convergence
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    This project focuses on the stabilization and control of a quadcopter using the nested saturation method. <br/> <br/>
                    It involves modeling with the Euler-Lagrange approach and implementing control strategies in Matlab Simulink to ensure robust stability and performance.
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