import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";
import styled from "styled-components";
import Othello1 from "../../assets/ProjectsCanvas/othello1.png";
import Othello2 from "../../assets/ProjectsCanvas/othello2.png";
import Othello3 from "../../assets/ProjectsCanvas/othello3.png";


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
  justify-content: space-between;
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
  justify-content: flex-start;
  gap: 40px;
  flex-direction: row;
`;

const StackBox = styled.div`
  background: rgba(154, 129, 227, 0.42);
  border-radius: 10px;
  height: 60px;
  width: 60px;
`;

const Line = styled.div`
  align-self: center;
  width: 2px;
  height: 90%;
  background: rgba(56, 19, 122);
`;

export function CookeatProject() {
    const Canvas = [
        Othello1,
        Othello2,
        Othello3,
    ]

    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><b>Cookeat</b></ProjectTitle>
                <BriefDescription>
                    Development of Othello game on python with implementation of an intelligent bot based on a heuristic minimax algorithm
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
            <Line/>
            <SecondColumn>
                <Description>
                    The user can choose his colour for the whole game. The black color always starts. The other colour will be played by an implemented AI (easy level by default). <br/><br/>
                    The user can see all his available moves with the small grey circles. He just has to click on a valid position on the board to make a move. After that, the AI will play with a little delay and it will be his turn again.<br/><br/>
                    On the left part of the screen, there is some information like the color of the user, the score or the possibility to change the difficulty and reset the game. <br/><br/>
                    When the game ends, the screen changes to show who won the game. However, it stays possible for the user to review the game in order to understand or to check something. After that, the reset button allows to play a new game. <br/><br/><br/>
                    The AI process is based on the minimax algorithms with an heuristic function that can evaluate a specific grid (thanks to the number of flipped pieces, the score, the position of the move in the matrix...).
                </Description>
                <StackList>
                    <Row>
                        <StackBox/>
                        <StackBox/>
                        <StackBox/>
                    </Row>
                </StackList>
            </SecondColumn>
        </BoxContent>
    )
}