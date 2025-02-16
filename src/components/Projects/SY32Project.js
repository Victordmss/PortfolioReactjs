import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import React from "react";
import logoGIT from "../../assets/Logos/logoGIT.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoTelechargement from "../../assets/Logos/logoTELECHARGEMENTPDF.png"
import logoOVERLEAF from "../../assets/Logos/logoOVERLEAF.jpg";
import logoPYTORCH from "../../assets/Logos/logoPYTORCH.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import SY32_1 from "../../assets/ProjectsCanvas/SY32_1.png";
import SY32_2 from "../../assets/ProjectsCanvas/SY32_2.png";
import SY32_3 from "../../assets/ProjectsCanvas/SY32_3.png";
import PDF from "../../assets/SY32_Project.pdf";

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

export function SY32Project({color, gradient}) {
    const Canvas = [
      [SY32_1, "cover"],
      [SY32_2, "contain"],
      [SY32_3, "contain"]
    ];

    const Stack = [
        ["Python", logoPYTHON, "https://www.python.org/"],
        ["PyTorch", logoPYTORCH, "https://pytorch.org/"],
        ["Overleaf", logoOVERLEAF, "https://fr.overleaf.com"],
        ["Git", logoGIT, "https://git-scm.com/"]
    ];

    return (
        <BoxContent>
            <FirstColumn>
              <TitleRow>
                <LinkBox url={logoTelechargement} onClick={() => window.open(PDF, '_blank')}/>
                <ProjectTitle fontsize={"3.5vw"} gradient={gradient}>Sign detection</ProjectTitle>
                <LinkBox url={logoGithub} href="https://github.com/Victordmss/SY32_sign_detection_learning/" target="_blank"/>
              </TitleRow>                
              <BriefDescription>
                Detection and classification of road signs with different methods of machine and deep (CNN) networks from scratch.
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
                            Classification & Detection
                        </Word>
                        <Word>
                            Supervised learning
                        </Word>
                        <Word>
                            Deep learning (NN & CNN)
                        </Word>
                       
                    </KeyWords>
                    <Line color={color}/>
                    This project focuses on the classification and detection of traffic signs by merging several methods. <br/> <br/>   
                    It involves the creation of a dataset, the extraction of image features for classification, 
                    the implementation of sliding window and selective search processes, supervised learning and CNN models (from scratch).
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