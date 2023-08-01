import React from "react"
import styled from "styled-components";
import {VictoryPie} from 'victory';
import ProgressBar from "react-percent-bar";


import logoUML from "../../assets/logos/logoUML.png";
import logoPYTHON from "../../assets/logos/logoPYTHON.png";
import logoCplusplus from "../../assets/logos/logoC++.png"
import logoFLUTTER from "../../assets/logos/logoFlutter.png"
import logoPYGAME from "../../assets/logos/logoPYGAME.png"
import logoREACT from "../../assets/logos/logoREACT.png"
import logoC from "../../assets/logos/logoC.png";
import logoSQL from "../../assets/logos/logoSQL.png";
import logoVHDL from "../../assets/logos/logoVHDL.jpg";
import logoPOSTGRESQL from "../../assets/logos/logoPOSTGRESQL.png";
import logoLINUX from "../../assets/logos/logoLINUX.png";
import logoGithub from "../../assets/logos/logoGITHUB.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const AboutContainer = styled.div`
  //background: #db2b39;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
`

const FirstRow = styled.div`
  margin-top: 5%;
  //background: #dbff39;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
  width: 100%;
  height: 35%;
  align-items: center;
`

const PercentageCell = styled.div`
  //background: red;
  width: 250px;
  height: 250px;
  margin-bottom: 30px;  
`

const SecondRow = styled.div`
  align-self: center;
  background: rgba(116, 106, 136, 0.45);
  margin-top: 20px;
  margin-inline: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  width: 1200px;
  height: 45%;
  align-items: center;
  border-radius: 50px;
  animation: 3s infinite alternate floating;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }
`

const SkillCell = styled.div`
  //background: rgba(44, 110, 22, 0.53);
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
  background: rgba(255, 254, 254, 0.34);
  width: 4px;
  height: 80%;
  border-radius: 20px;
`

const PercentageText = styled.div`
  padding-top: 5px;
  font-size: 22px;
  text-align: center;
`;

const SkillTitleContainer = styled.div`
  width: 200px;
  background: linear-gradient(70deg, rgba(66, 5, 119, 0.73), rgba(89, 25, 143, 0.49));
  border: 2px inset rgba(108, 37, 169, 0.73);
  padding: 10px;
  margin-bottom: 15px ;
  font-size: 22px;
  text-align: center;
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

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 3s infinite alternate floating;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }

  &:hover {
    scale: 1.03;
  }
`;

const TextPercent = styled.div`
  font-size: 30px;
`;

const HobbiesContainer = styled.div`
  font-size: 30px;
  height: 100%;
  width: 100%;
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
  padding-inline: 15px;
  font-size: 15px;
`;




function percentCircle(percent) {
    return (<PercentContainer>
        <VictoryPie
            colorScale={["transparent", "rgba(66,5,119,0.65)"]}
            cornerRadius={({ datum }) => datum.y * 5}
            innerRadius={180}
            data={[
                {y: 100 - percent},
                {y:percent}
            ]}
            style={{ labels: { fill: "transparent"} }}/>
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100%',
                cursor : 'default'
            }}
        >
            <TextPercent><b>{percent}%</b></TextPercent>
        </div>
    </PercentContainer>)
}

function About() {

    const skillsImages = [
        ["Python", logoPYTHON, "transparent", "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["UML", logoUML, "transparent", "https://en.wikipedia.org/wiki/Unified_Modeling_Language"],
        ["C++", logoCplusplus, "transparent", "https://en.wikipedia.org/wiki/C%2B%2B"],
        ["PYGAME", logoPYGAME, "transparent", "https://www.pygame.org/news"],
        ["SQL", logoSQL, "https://en.wikipedia.org/wiki/SQL"],
        ["Flutter", logoFLUTTER, "https://flutter.dev/"],
        ["VHDL", logoVHDL, "https://en.wikipedia.org/wiki/VHDL"],
        ["PostreSQL", logoPOSTGRESQL, "https://www.postgresql.org/"],
        ["Linux", logoLINUX, "https://en.wikipedia.org/wiki/Linux"],
        ["Github", logoGithub, "https://github.com/Victordmss"],
        ["C", logoC, "https://en.wikipedia.org/wiki/C_(programming_language)"],
        ["React", logoREACT, "https://fr.legacy.reactjs.org/"],
    ];

    const Hobbies = [
        ["Rugby", 'A healthy mind in a healthy body'],
        ["Poetry", "Science describes nature, poetry paints and embellishes it"],
        ["Driver Licence", '"B" permit. Personal car'],
        ["Biology", "Even the smallest of gardens offers mankind the most beautiful of spectacles"],
        ["Video Games", "Every vocation is born of a hobby"]
    ]

    return (
        <Section id="About">
            <AboutContainer>
                <FirstRow>
                    <PercentageCell>
                        {percentCircle(80)}
                        <PercentageText>
                            Programming
                        </PercentageText>
                    </PercentageCell>
                    <PercentageCell>
                        {percentCircle(95)}
                        <PercentageText>
                            Proactivity
                        </PercentageText>
                    </PercentageCell>
                    <PercentageCell>
                        {percentCircle(60)}
                        <PercentageText>
                            Project Management
                        </PercentageText>
                    </PercentageCell>
                </FirstRow>
                <SecondRow>
                    <SkillCell>
                        <SkillTitleContainer>
                            Skills
                        </SkillTitleContainer>
                        <Skillsgrid>
                        {skillsImages.map((item, index) => (
                            <a key={index} href={item[3]} target="_blank" rel="noreferrer">
                                <StackBox key={index} url={item[1]} />
                            </a>))}
                        </Skillsgrid>
                    </SkillCell>
                    <Border/>
                    <SkillCell>
                        <SkillTitleContainer>
                            Languages
                        </SkillTitleContainer>
                        French native
                        <ProgressBar

                            percent={100}
                            fillColor={"rgba(42,3,75,0.73)"}
                            width="200px"
                            height="20px"
                        />
                        <br/>
                        English
                        <ProgressBar
                            percent={80}
                            fillColor={"rgba(78,24,126,0.73)"}
                            width="200px"
                            height="20px"
                        />
                        <br/>
                        Spanish
                        <ProgressBar
                            percent={60}
                            fillColor={"rgba(130,57,194,0.73)"}
                            width="200px"
                            height="20px"
                        />
                        <br/>
                        Latvian
                        <ProgressBar
                            percent={20}
                            fillColor={"rgba(149,99,194,0.73)"}
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
                                modules={[Autoplay]}
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    pauseOnMouseEnter: true,
                                }}
                            >
                                {Hobbies.map((item, index) => (
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
                </SecondRow>
            </AboutContainer>
        </Section>
    )
}

export default About;