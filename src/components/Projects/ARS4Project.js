import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import React from "react";
import logoGIT from "../../assets/Logos/logoGIT.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoTelechargement from "../../assets/Logos/logoTELECHARGEMENTPDF.png"
import logoOVERLEAF from "../../assets/Logos/logoOVERLEAF.jpg";
import logoMATLAB from "../../assets/Logos/logoMatlab.png";
import ARS4_1 from "../../assets/ProjectsCanvas/ARS4_1.png";
import ARS4_2 from "../../assets/ProjectsCanvas/ARS4_2.png";
import ARS4_3 from "../../assets/ProjectsCanvas/ARS4_3.png";
import PDF from "../../assets/ARS4_Project.pdf";

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
      [ARS4_1, "cover"],
      [ARS4_2, "contain"],
      [ARS4_3, "cover"]
    ];

    const Stack = [
        ["Matlab", logoMATLAB, "https://fr.legacy.reactjs.org/"],
        ["Overleaf", logoOVERLEAF, "https://fr.overleaf.com"],
        ["Git", logoGIT, "https://git-scm.com/"]
    ];

    return (
        <BoxContent>
            <FirstColumn>
              <TitleRow>
                <LinkBox url={logoTelechargement} onClick={() => window.open(PDF, '_blank')}/>
                <ProjectTitle fontsize={"4vw"} gradient={gradient}>UrbanNav</ProjectTitle>
                <LinkBox url={logoGithub} href="https://github.com/Victordmss/ARS4_urbanNav" target="_blank"/>
              </TitleRow>                
              <BriefDescription>
                Localization using poles and signs detected by a lidar in urban environment of the city of Compiegne.
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
                            GNSS & LiDAR observations
                        </Word>
                        <Word>
                            Extended & Uscented Kalman Filters
                        </Word>
                        <Word>
                            MapMatching Data association
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    This project focuses on localization by fusing GNSS and LiDAR data. <br/>
                    It involves modeling system dynamics and observations, using EKF/UKF for sensor fusion, and consistency analysis. <br/> <br/>
                    The approach is applied to real-world constraints, including data association algorithms and MapMatching techniques.
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