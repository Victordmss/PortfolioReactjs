import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";
import styled from "styled-components";
import Othello1 from "../../assets/ProjectsCanvas/othello1.png";
import Othello2 from "../../assets/ProjectsCanvas/othello2.png";
import Othello3 from "../../assets/ProjectsCanvas/othello3.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoPYGAME from "../../assets/Logos/logoPYGAME.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";

const BoxContent = styled.div`
  //background: chocolate;
  display: flex;
  flex-direction: row;
`;

const FirstColumn = styled.div`
  //background: brown;
  margin: 10px;
  flex: 0.60;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  padding-right: 100px;
  font-size: 74px;
  height: fit-content;
  background: linear-gradient(to right,
  hsl(116, 91%, 18%) 0,
  hsla(122, 20%, 61%, 0.85) 15%,
  hsl(116, 91%, 18%) 25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;

  @keyframes shine {
    from {
      background-position: -100px;
    }
    to {
      background-position: 300px;
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
  height: fit-content;
  width: 100%;
  text-align: justify;
  padding-inline: 15px;
  padding-bottom: 15px ;
  margin-bottom: 15px;
`;

const MediaContainer = styled.div`
  //background: #db2b39;
  margin-top: 20px;
  align-self: center;
  width: 450px;
  height: fit-content;
  background: rgba(239, 236, 236, 0.71);
  border: hsl(116, 91%, 18%) 2px solid;
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
  justify-content: center;
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
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;;
  border-radius: 10px;
  height: 60px;
  width: 60px;
`;

const Line = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: rgba(13, 94, 8, 0.62);
`;

const KeyWords = styled.div`
  padding-top: 10px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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


export function OthelloProject() {
    const Canvas = [
        Othello1,
        Othello2,
        Othello3,
    ]

    const Stack = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Pygame", logoPYGAME, "https://www.pygame.org/news"],
        ["Github", logoGithub, "https://github.com/Victordmss"],

    ]

    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><b>Othello</b></ProjectTitle>
                <BriefDescription>
                    <i>
                        Development of Othello game on python with implementation of an intelligent bot based on a heuristic minimax algorithm
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
                            Game design
                        </Word>
                        <Word>
                            AI implementation
                        </Word>
                    </KeyWords>
                    <br/>
                    <Line/>
                    User can see all his available moves and has to click on the board to make a move. After that, AI will play.<br/><br/>
                    When the game ends, it stays possible to review the game in order to understand or to check something. After that, the reset button allows to play a new game. <br/><br/><br/>
                    AI process is based on the minimax algorithms with an heuristic function.
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