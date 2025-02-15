import React from "react";
import styled from "styled-components";
import 'swiper/css/bundle';

import logoSNU from "../../assets/Schools/SNU/logoSNU.png";

import logoGOOGLECOLLAB from "../../assets/Logos/logoGoogleCollab.png";
import logoHTML from "../../assets/Logos/logoHTML.png";
import logoCSS from "../../assets/Logos/logoCSS.png"
import logoJS from "../../assets/Logos/logoJS.png"
import logoMATLAB from "../../assets/Logos/logoMatlab.png"
import logoKERAS from "../../assets/Logos/logoKeras.png"


import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {theme} from "../../theme"

import {
    DateLink,
    DateTitle,
    DateTitleRow,
    DescriptionContainer, FirstRow, KeyWords, Presentation,
    RightArrow,
    SchoolDescription, SchoolTitle, SecondRow, StackBox, StackListContainer,
    TextDescription, Word
} from "./SchoolLayout";

import {Line} from "../index"

const Logo = styled.div`
    flex: 0.5;
  background-image: url(${logoSNU});
  align-self: center;
  width: 240px;
  height: 190px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

function SNUDescription() {
    return (<SchoolDescription>
        <DateTitleRow>
            <DateTitle gradient="linear-gradient(90deg,rgba(185, 0, 6, 0.81) 20%, rgba(185, 0, 0, 0.54) 92%)">
                <b>Febuary 2025</b>
            </DateTitle>
            <DateLink size={60} gradient="linear-gradient(140deg, rgba(185, 0, 0, 0.54) 20%, rgba(185, 0, 6, 0.81) 92%)"/>
            <DateTitle gradient="linear-gradient(90deg, rgba(185, 0, 0, 0.54) 20%, rgba(170, 70, 70, 0.54) 92%)">
                <b>June 2025</b>
            </DateTitle>
            <DateLink size={25} gradient="linear-gradient(140deg, rgba(170, 70, 70, 0.54) 20%, rgba(197, 116, 116, 0.42) 92%)"/>
            <RightArrow color="rgba(197, 116, 116, 0.2)"/>
        </DateTitleRow>
        <TextDescription>
        My current experience in Seoul is an exceptional opportunity to benefit from a totally different vision of excellence and engineering. 
        South Korea is a country renowned for its technological advances and spirit of innovation. <br/>
        This semester is an opportunity to develop new skills in an international environment, while opening the door to a backpacking project in Asia in the summer of 2025.
        </TextDescription>
    </SchoolDescription>);
}

export function SnuComponent({animation}) {

    const stackBoxImages = [
        ["JS", logoJS, "transparent", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
        ["MATLAB", logoMATLAB, "transparent", "https://www.mathworks.com/products/matlab.html"],
        ["KERAS", logoKERAS, "transparent", "https://keras.io/"],
        ["GoogleCollab", logoGOOGLECOLLAB, "transparent", "https://colab.research.google.com/"],
        ["HTML", logoHTML, "transparent", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
        ["CSS", logoCSS, "transparent", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"],
    ];

    const RTUSwiperStyles = `
    
        .RTUSwiper {
            height: 85px;
        }
           
        .RTUSwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px; 
          cursor: pointer;
        }
        
        .RTUSwiper .swiper-pagination-bullet-active {
          background-color: ${theme.schools.snu}; 
        }
`;

    return <DescriptionContainer animation={animation}>
        <style>{RTUSwiperStyles}</style>
        <SchoolTitle>
            <div>Seoul National University of Technology</div>
            <Line color={theme.schools.snu}/>
        </SchoolTitle>
        <FirstRow>
            <Logo/>
            <Presentation>
                <StackListContainer>
                    <Swiper
                        className="RTUSwiper"
                        modules={[Autoplay, Pagination]}
                        slidesPerView={3}
                        spaceBetween={25}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        {stackBoxImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <a key={index} href={item[3]} target="_blank" rel="noreferrer">
                                    <StackBox key={index} url={item[1]} color={item[2]}/></a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </StackListContainer>
                <Line color={theme.schools.snu}/>
                <KeyWords>
                    <Word> <a href={"https://en.wikipedia.org/wiki/Artificial_intelligence"} target="_blank" rel="noreferrer">Artificial intelligence</a> </Word>
                    <Word> <a href={"https://en.wikipedia.org/wiki/Signal_processing#:~:text=Signal%20processing%20is%20an%20electrical,altimetry%20processing%2C%20and%20scientific%20measurements."} target="_blank" rel="noreferrer">Signal Processing</a> </Word>
                    <Word> <a href={"https://en.wikipedia.org/wiki/Web_development"} target="_blank" rel="noreferrer">Web Programming</a> </Word>
                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <SNUDescription/>
        </SecondRow>
    </DescriptionContainer>;
}
