import React from "react"
import styled from "styled-components";
import ProgressBar from "react-percent-bar";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import 'swiper/css/bundle';

import {PourcentPie} from "../components/"

import logoUML from "../assets/Logos/logoUML.png";
import logoPYTHON from "../assets/Logos/logoPYTHON.png";
import logoCplusplus from "../assets/Logos/logoC++.png"
import logoFLUTTER from "../assets/Logos/logoFlutter.png"
import logoFIREBASE from "../assets/Logos/logoFirebase.png"
import logoREACT from "../assets/Logos/logoREACT.png"
import logoC from "../assets/Logos/logoC.png";
import logoSQL from "../assets/Logos/logoSQL.png";
import logoVHDL from "../assets/Logos/logoVHDL.jpg";
import logoPOSTGRESQL from "../assets/Logos/logoPOSTGRESQL.png";
import logoLINUX from "../assets/Logos/logoLINUX.png";
import logoGithub from "../assets/Logos/logoGITHUB.png";
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
  height: 30vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const SecondRow = styled.div`
  height: 60vh;
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
  justify-content: center;
  gap: 5px;
  align-items: center;
  border-radius: 2rem;
`;

const SkillCell = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  width: 400px;
  height: 90%;
`

const Skillsgrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  height: 80%;
`

const Border = styled.div`
  background: ${theme.colors.tertiary_dark};
  opacity: 0.7;
  width: 4px;
  height: 80%;
  border-radius: 20px;
`

const SkillTitleContainer = styled.div`
  width: 200px;
  background: ${theme.gradient.primary};
  color: white;
  padding: 10px;
  margin-bottom: 15px ;
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

  &:hover {
    scale: 0.95
  }
`;

const HobbiesContainer = styled.div`
  font-size: 30px;
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 40px;
`;

const HobbieTitle = styled.div`
  font-size: 35px;
  padding-bottom: 30px;
`;

const HobbieDesc = styled.div`
  align-self: center;
  padding-inline: 15px;
  font-size: 15px;
`;

function About() {

    const skillsImages = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["UML", logoUML, "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
        ["C++", logoCplusplus, "https://en.wikipedia.org/wiki/C%2B%2B"],
        ["FIREBASE", logoFIREBASE, "https://firebase.google.com/"],
        ["SQL", logoSQL, "https://en.wikipedia.org/wiki/SQL"],
        ["Flutter", logoFLUTTER, "https://flutter.dev/"],
        ["VHDL", logoVHDL, "https://en.wikipedia.org/wiki/VHDL"],
        ["PostreSQL", logoPOSTGRESQL, "https://www.postgresql.org/"],
        ["Linux", logoLINUX, "https://en.wikipedia.org/wiki/Linux"],
        ["Github", logoGithub, "https://github.com/Victordmss"],
        ["C", logoC, "https://en.wikipedia.org/wiki/C_(programming_language)"],
        ["React", logoREACT, "https://fr.legacy.reactjs.org/"],
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
        padding-left: 45px;
        transform: scale(0.6);
        &:hover {
          transform: scale(0.7);}
        }
        
      .swiper-button-prev {
        color: ${theme.colors.tertiary};
        padding-right: 45px;
        transform: scale(0.6);

        &:hover {
          transform: scale(0.7);
        }
      }
`;
    const pourcentPieValues = [
      ["Programming", 80],
      ["Proactivity", 95],
      ["Project Management", 65],
    ]
    return (
        <Section id="About">
            <style>{customSwiperStyles}</style>
            <FirstRow>
              {pourcentPieValues.map((item, index) => (
                <PourcentPie item={item} key={index} />
              ))}
            </FirstRow>
            <SecondRow>
              <AboutContainer>
                <SkillCell>
                    <SkillTitleContainer>
                        Skills
                    </SkillTitleContainer>
                    <Skillsgrid>
                    {skillsImages.map((item, index) => (
                        <a key={index} href={item[2]} target="_blank" rel="noreferrer">
                            <StackBox key={index} url={item[1]} />
                        </a>))}
                    </Skillsgrid>
                </SkillCell>
                <Border/>
                <SkillCell>
                    <SkillTitleContainer>
                        Languages
                    </SkillTitleContainer>
                    <b>French</b>
                    <ProgressBar

                        percent={100}
                        fillColor={theme.colors.tertiary_dark}
                        width="200px"
                        height="20px"
                    />
                    <br/>
                    <b>English</b>
                    <ProgressBar
                        percent={80}
                        fillColor={theme.colors.tertiary}
                        width="200px"
                        height="20px"
                    />
                    <br/>
                    <b>Spanish</b>
                    <ProgressBar
                        percent={60}
                        fillColor={theme.colors.tertiary_light}
                        width="200px"
                        height="20px"
                    />
                    <br/>
                    <b>Latvian</b>
                    <ProgressBar
                        percent={20}
                        fillColor={theme.colors.tertiary_light_light}
                        width="200px"
                        height="20px"
                    />
                </SkillCell>
                <Border/>
                <SkillCell>
                    <SkillTitleContainer>
                        Other
                    </SkillTitleContainer>
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
                </SkillCell>
              </AboutContainer>
            </SecondRow>
        </Section>
    )
}

export default About;