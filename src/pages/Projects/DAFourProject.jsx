import React from "react";
import styled from "styled-components";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoPYGAME from "../../assets/Logos/logoPYGAME.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import DAFour1 from "../../assets/ProjectsCanvas/DAFour1.png";
import DAFour2 from "../../assets/ProjectsCanvas/DAFour2.png";
import DAFour3 from "../../assets/ProjectsCanvas/DAFour3.png";
import DAFour4 from "../../assets/ProjectsCanvas/DAFour4.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";



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
  padding-right: 30px;
  font-size: 60px;
  height: fit-content;
  background: linear-gradient(to right,
  hsl(52, 100%, 50%) 0,
  hsla(45, 44%, 96%, 0.85) 15%,
  hsl(52, 100%, 50%) 25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s infinite linear;

  @keyframes shine {
    from {
      background-position: -100px;
    }
    to {
      background-position: 450px;
    }
  }
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
  font-size: 14px;
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
  width: 450px;
  height: fit-content;
  background: rgba(239, 236, 236, 0.71);
  border: hsl(52, 100%, 50%) 2px solid;
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
  justify-content: space-evenly;
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

const KeyWords = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Word = styled.div`
  cursor:pointer;
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
  background: hsl(52, 100%, 50%);
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

export function DAFourProject() {

    const Stack = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Pygame", logoPYGAME, "https://www.pygame.org/news"],
        ["Github", logoGithub, "https://github.com/Victordmss"],
    ]

    const Canvas = [
        DAFour1,
        DAFour2,
        DAFour3,
        DAFour4,
    ]
    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><b>DaFour</b></ProjectTitle>
                <BriefDescription>
                    <i>
                        Creation of a video game software, based on the game Connect Four
                    </i>
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
                            Game development
                        </Word>
                        <Word>
                            Software development (SDLC)
                        </Word>
                        <Word>
                            Responsiveness and Adaptability
                        </Word>
                    </KeyWords>
                    <br/>
                    <Line/>
                    <br/>
                    The aim of this project is to develop a platformer that allows users to create their own levels. <br/><br/>
                    This project had no specific goal, only to develop a video game design program with instinctive, functional drag&drop. <br/><br/>
                    This project was created with the help of Clear code. <br/>
                </Description>
                <StackList>
                    <Row>
                        {Stack.map((item, index) => (
                            <a key={index} href={item[3]} target="_blank" rel="noreferrer">
                                <StackBox key={index} url={item[1]} />
                            </a>))}
                    </Row>
                </StackList>
            </SecondColumn>
        </BoxContent>
    )
}