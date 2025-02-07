import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";
import styled from "styled-components";
import Portfolio1 from "../../assets/ProjectsCanvas/Portfolio1.png";
import Portfolio2 from "../../assets/ProjectsCanvas/Portfolio2.png";
import Portfolio3 from "../../assets/ProjectsCanvas/Portfolio3.png";
import logoREACT from "../../assets/Logos/logoREACT.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoRSM from "../../assets/Logos/logoRSM.jpg"


const BoxContent = styled.div`
  //background: chocolate;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const FirstColumn = styled.div`
  //background: brown;
  margin: 10px;
  flex: 0.60;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  padding-right: 70px;
  font-size: 74px;
  height: fit-content;
  background: linear-gradient(to right,
  rgba(116, 10, 147, 0.62) 0,
  hsla(285, 20%, 61%, 0.85) 15%,
  rgba(116, 10, 147, 0.62) 25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;


  @keyframes shine {
    from {
      background-position: 0;
    }
    to {
      background-position: 550px;
    }
  }

  a {
    text-decoration: none;
  }

  &:hover {
    scale: 0.95;
  }
`;

const KeyWords = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Word = styled.div`
  cursor : default;
  text-align: center;
  width: max-content;
  font-size: 20px;

  &:hover {
      letter-spacing: 3px;
      transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  a {
    text-decoration: none;
  }
`;

const Line = styled.div`
  margin-bottom: 10px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: rgba(71, 3, 91, 0.62);
`;

const BriefDescription = styled.div`
  font-size: 17px;
  //background: darkmagenta;
  text-align: justify;
  height: fit-content;
  margin: 5px;
 `;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(239, 236, 236, 0.24);
  border-radius: 25px;
  font-size: 15px;
  //background: darkmagenta;
  height: fit-content;
  width: 100%;
  text-align: justify;
  padding-block: 30px;
  padding: 15px;
`;

const MediaContainer = styled.div`
  //background: #db2b39;
  margin-top: 20px;
  align-self: center;
  width: 477px;
  height: fit-content;
  background: rgba(71, 3, 91, 0.62);
  border: rgba(71, 3, 91, 0.62) 2px solid;
  border-radius: 20px;
  overflow: hidden;
`;

const Item = styled.div`
  background-image: url(${(props) => props.url});
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
  justify-content: space-around;
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
  justify-content: center;
  gap: 40px;
  flex-direction: row;
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

  &:hover {
    scale: 1.1
  }
`;

export function PortfolioProject() {
    const Canvas = [
        Portfolio1,
        Portfolio2,
        Portfolio3,
    ]

    const Stack = [
        ["React", logoREACT, "https://fr.legacy.reactjs.org/"],
        ["React Simple Map", logoRSM, "https://www.react-simple-maps.io"],
        ["Github", logoGithub, "https://github.com/Victordmss"],

    ]

    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><a href={"https://github.com/Victordmss/PortfolioReactjs"} target="_blank" rel="noreferrer"><b>Web Portfolio</b></a></ProjectTitle>
                <BriefDescription>
                    <i>Creating a portfolio website in React.js</i>
                </BriefDescription>
                <MediaContainer>
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
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
                    <br/>
                    <Line/>
                    <br/>
                    The aim of the project was to create a website presenting me and offering the opportunity to get to know me better. <br/><br/>
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