import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import React from "react";
import logoGIT from "../../assets/Logos/logoGIT.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoREDUX from "../../assets/Logos/logoREDUX.png";
import logoREACT from "../../assets/Logos/logoREACT.png";
import logoPHP from "../../assets/Logos/logoPHP.png"
import logoPHPMYADMIN from "../../assets/Logos/logoPHPMA.png"
import logoHTML from "../../assets/Logos/logoHTML.png"
import logoCSS from "../../assets/Logos/logoCSS.png"
import logoLARAVEL from "../../assets/Logos/logoLARAVEL.png"
import Picasso_1 from "../../assets/ProjectsCanvas/Picasso_1.png";
import Picasso_2 from "../../assets/ProjectsCanvas/Picasso_2.png";
import Picasso_3 from "../../assets/ProjectsCanvas/Picasso_3.png";
import "swiper/css";
import "swiper/css/autoplay";

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
  Word} from "./ProjectLayout"

import {Line} from "../index"


const StackRowSwiper = styled.div`
  margin-top: 2vh;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40vh;
  height: 100%;
  padding-left: 5%;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 1vh;
  }
`;

const StackBox = styled.div`
  width: min(7vw, 7vh);
  aspect-ratio: 1 / 1; 
  background: url(${props => (props.url)}) no-repeat center;
  background-size: contain;
  cursor: pointer;;
  border-radius: 1vw;
  transition : scale 0.1s ease-in-out;

  &:hover{
    scale: 0.9;
  }

  @media (max-width: 768px) {
    width: max(5vw, 5vh);
    aspect-ratio: 1 / 1; 
  }
`;


export function PicassoProject({color, gradient}) {
    const Canvas = [
      [Picasso_1, "contain"],
      [Picasso_2, "contain"],
      [Picasso_3, "cover"],
    ];

    const Stack = [
        ["React", logoREACT, "https://fr.legacy.reactjs.org/"],
        ["Redux", logoREDUX, "https://redux.js.org/"],
        ["Laravel ", logoLARAVEL, "https://laravel.com/"],
        ["PhpMyAdmin", logoPHPMYADMIN, "https://www.phpmyadmin.net/"],
        ["Git", logoGIT, "https://git-scm.com/"],
        ["HTML", logoHTML, "transparent", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
        ["CSS", logoCSS, "transparent", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"],
        ["PHP", logoPHP, "transparent", "https://www.php.net/"],
    ];

    return (
        <BoxContent>
            <FirstColumn>
              <TitleRow>
                <ProjectTitle fontsize={"4vw"} gradient={gradient}>Picasso</ProjectTitle>
                <LinkBox url={logoGithub} href="https://github.com/picasso-utc" target="_blank"/>
              </TitleRow>                
              <BriefDescription>
                Co-Maintenance and development of the IT infrastructure at Picasso, the UTC student home association.
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
                        <Word fontsize="1.2vw">
                            Laravel & Filament Backoffice development
                        </Word>
                        <Word fontsize="1.2vw">
                            Student card paiement with web IHM
                        </Word>
                        <Word fontsize="1.2vw">
                            Web event pages
                        </Word>
                        <Word fontsize="1.2vw">
                            PMA Database 
                        </Word>
                        <Word fontsize="1.2vw">
                            Project Management
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    From the development and maintenance of self-service checkouts (react web server on raspberry with javascript websocket)to the association's BackOffice, 
                    this association project gave me the opportunity to develop my skills in different areas. 
                </Description>
                <StackRowSwiper>
                    <Swiper
                            className={"PicassoSwiper"}
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}
                            style={{ height: "100%", width: "100%"}}
                        >
                            {Stack.map((item, index) => (
                            <SwiperSlide key={index}>
                                <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                                    <StackBox key={index} url={item[1]} />
                                </a>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                </StackRowSwiper>
            </SecondColumn>
        </BoxContent>
    )
}