import React, {useState, useEffect} from "react"
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/bundle';

import {PourcentPie} from "../components/"

import logoUML from "../assets/Logos/logoUML.png";
import logoPYTHON from "../assets/Logos/logoPYTHON.png";
import logoCplusplus from "../assets/Logos/logoC++.png"
import logoREACT from "../assets/Logos/logoREACT.png"
import logoC from "../assets/Logos/logoC.png";
import logoSQL from "../assets/Logos/logoSQL.png";
import logoVHDL from "../assets/Logos/logoVHDL.png";
import logoPOSTGRESQL from "../assets/Logos/logoPOSTGRESQL.png";
import logoLINUX from "../assets/Logos/logoLINUX.png";
import logoJS from "../assets/Logos/logoJS.png"
import logoPHP from "../assets/Logos/logoPHP.png"
import logoPHPMYADMIN from "../assets/Logos/logoPHPMA.png"
import logoHTML from "../assets/Logos/logoHTML.png"
import logoCSS from "../assets/Logos/logoCSS.png"
import logoLARAVEL from "../assets/Logos/logoLARAVEL.png"
import logoCMAKE from "../assets/Logos/logoCMAKE.png"
import logoMATLAB from "../assets/Logos/logoMatlab.png"
import logoSIMULINK from "../assets/Logos/logoSimulink.png"
import logoKCACHEGRIND from "../assets/Logos/logoKCACHEGRIND.png"
import logoROS from "../assets/Logos/logoROS.png"
import logoVALGRIND from "../assets/Logos/logoVALGRIND.png"
import logoJUPYTER from "../assets/Logos/logoJUPYTER.png"
import logoOVERLEAF from "../assets/Logos/logoOVERLEAF.jpg"
import logoGIT from "../assets/Logos/logoGIT.png"
import logoOCTAVE from "../assets/Logos/logoOctave.png"
import logoARM from "../assets/Logos/logoARM.png"
import logoARDUINO from "../assets/Logos/logoARDUINO.png"
import logoRASPBERRY from "../assets/Logos/logoRASPBERRY.png"
import logoDRAWIO from "../assets/Logos/logoDRAWIO.png"
import logoFIGMA from "../assets/Logos/logoFIGMA.png"
import logoMICROSOFT from "../assets/Logos/logoMICROSOFT.png"

import {theme} from "../theme"

const Section = styled.div`
  height: 90vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2vh;
`

const FirstRow = styled.div`
  align-self: center;
  gap: 4rem;
  height: 35vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SecondRow = styled.div`
  height: 55vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
`
const AboutContainer = styled.div`
  align-self: center;
  width: 80vw;
  height: 45vh;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
  align-items: center;
  border-radius: 2rem;
  padding-block: 1rem;
`;

const SkillCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  height: 90%;
`

const Skillsgrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
  height: 70%;
`

const SkillTitleContainer = styled.div`
  width: fit-content;
  self-align: center;
  background: ${theme.gradient.primary};
  color: white;
  padding: 10px;
  margin-bottom: ${(props) => props.margin || "15px"};
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  height: max-content;
  border-radius: 15px;
  animation: 2s scaling infinite alternate ;

  @keyframes scaling {
    to {
      transform: scale(1.05);
    }
  }
`;

const VerticalBorder = styled.div`
  background: ${theme.colors.tertiary_dark};
  opacity: 0.7;
  width: 4px;
  height: 90%;
  border-radius: 20px;
`

const HorizontalBorder = styled.div`
  background: ${theme.colors.tertiary_dark};
  opacity: 0.4;
  width: 80%;
  height: 4px;
  border-radius: 20px;
`

 const StackBox = styled.div`
  border-radius: 10px;
  height: 60px;
  width: 60px;
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin: 10px;
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale: 1.2;
  }
`;

const HobbiesContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
      width: 80%;
  }
`;

const HobbieTitle = styled.div`
  font-size: 3vw;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 8vw;
    padding-bottom: 2vh;
  }
`;

const HobbieDesc = styled.div`
  align-self: center;
  padding-inline: 15px;
  font-size: 2vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    margin-inline: 5vw;
  }
`;

function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const devSkillsImages = [
    // Dev languages
    ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
    ["C", logoC, "https://en.wikipedia.org/wiki/C_(programming_language)"],
    ["JS", logoJS, "transparent", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["PHP", logoPHP, "transparent", "https://www.php.net/"],
    ["C++", logoCplusplus, "https://en.wikipedia.org/wiki/C%2B%2B"],

    // Logo SGBD
    ["SQL", logoSQL, "https://en.wikipedia.org/wiki/SQL"],
    ["PostreSQL", logoPOSTGRESQL, "https://www.postgresql.org/"],
    ["PhpMyAdmin", logoPHPMYADMIN, "https://www.phpmyadmin.net/"],

    // Logo Web
    ["HTML", logoHTML, "transparent", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
    ["CSS", logoCSS, "transparent", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"],
    ["React", logoREACT, "https://fr.legacy.reactjs.org/"],
    ["Laravel ", logoLARAVEL, "https://laravel.com/"],
  ];

  const devOpsSkillsImages = [
    // Project management
    ["CMake", logoCMAKE, "https://cmake.org/"], 
    ["Jupyter", logoJUPYTER, "https://jupyter.org/"],
    ["Overleaf", logoOVERLEAF, "https://fr.overleaf.com"],
    ["Git", logoGIT, "https://git-scm.com/"],
  ];

  const otherSkillsImages = [
    // Project management
    ["DrawIO", logoDRAWIO, "https://app.diagrams.net/"],
    ["Figma", logoFIGMA, "https://www.figma.com/"],
    ["Microsoft", logoMICROSOFT, "https://www.office.com/"],
  ];

  const embeededSystemsSkillsImages = [
    // Embeeded systems
    ["Linux", logoLINUX, "https://en.wikipedia.org/wiki/Linux"],
    ["Matlab", logoMATLAB, "https://www.mathworks.com/products/matlab.html"],
    ["Simulink", logoSIMULINK, "https://en.wikipedia.org/wiki/Simulink"],
    ["Octave", logoOCTAVE, "https://octave.org/"],
    ["ROS", logoROS, "https://www.ros.org/"],
    ["Arduino", logoARDUINO, "https://www.arduino.cc/"],
    ["Raspberry", logoRASPBERRY, "https://www.raspberrypi.com/"],
    ["ARM", logoARM, "https://en.wikipedia.org/wiki/ARM_architecture_family"],

    // Optimisation
    ["VHDL", logoVHDL, "https://en.wikipedia.org/wiki/VHDL"],
    ["Valgrind", logoVALGRIND, "https://valgrind.org/"],
    ["Kcachegrind", logoKCACHEGRIND, "https://kcachegrind.sourceforge.net/html/Home.html"],
    ["UML", logoUML, "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
  ];

  const hobbies = [
    ["Rugby", 'A healthy mind in a healthy body'],
    ["Poetry", "Science describes nature, poetry paints and embellishes it"],
    ["Driver Licence", '"B" permit. Personal car'],
    ["Biology", "Even the smallest of gardens offers mankind the most beautiful of spectacles"],
    ["Video Games", "Every vocation is born of a hobby"]
  ]

  const customSwiperStyles = `
    .swiper-button-next{
      color: ${theme.colors.tertiary};
      padding-left: 40px;
      scale: 0.6;
      transition: scale 0.1s ease-in-out;

      &:hover {
        scale: 0.8;
      }
    }

    .swiper-button-prev {
      color: ${theme.colors.tertiary};
      padding-right: 40px;
      scale: 0.6;
      transition: scale 0.1s ease-in-out;

      &:hover {
        scale: 0.8;
      }
    }
  `;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <Section id="About">
            <style>{customSwiperStyles}</style>
            <FirstRow>
              {isLargeScreen && <PourcentPie item={["Programming", 80]} key={"Programming"} />}
              <HobbiesContainer>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                delay: 4000,
                            }}
                        >
                            {hobbies.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <HobbieTitle>
                                        {item[0]}
                                    </HobbieTitle>
                                    <HobbieDesc>
                                        <i>
                                        {item[1]}
                                        </i>
                                    </HobbieDesc>
                                </SwiperSlide>
                            ))}
                        </Swiper>
              </HobbiesContainer>
              {isLargeScreen && <PourcentPie item={["Proactivity", 95]} key={"Proactivity"} />}
            </FirstRow>
            <SecondRow>
              <AboutContainer>
                <SkillCell>
                    <SkillTitleContainer>
                        Computer Science
                    </SkillTitleContainer>
                    <Skillsgrid>
                    {devSkillsImages.map((item, index) => (
                        <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                            <StackBox key={index} url={item[1]} />
                        </a>))}
                    </Skillsgrid>
                </SkillCell>
                <VerticalBorder/>
                <SkillCell>
                  <SkillTitleContainer margin={"5px"}>
                      DevOps & Others
                  </SkillTitleContainer>
                  <Skillsgrid>
                  {devOpsSkillsImages.map((item, index) => (
                      <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                          <StackBox key={index} url={item[1]} />
                      </a>))}
                  </Skillsgrid>       
                  <HorizontalBorder/>
                  <Skillsgrid>
                  {otherSkillsImages.map((item, index) => (
                      <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                          <StackBox key={index} url={item[1]} />
                      </a>))}
                  </Skillsgrid>   
                </SkillCell>
                <VerticalBorder/>
                <SkillCell>
                    <SkillTitleContainer>
                        Systems & Optimisation
                    </SkillTitleContainer>
                    <Skillsgrid>
                    {embeededSystemsSkillsImages.map((item, index) => (
                        <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                            <StackBox key={index} url={item[1]} />
                        </a>))}
                    </Skillsgrid>
                </SkillCell>       
              </AboutContainer>
            </SecondRow>
        </Section>
    )
}

export default About;