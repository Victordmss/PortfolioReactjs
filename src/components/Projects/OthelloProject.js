import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";

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

import Othello1 from "../../assets/ProjectsCanvas/othello1.png";
import Othello2 from "../../assets/ProjectsCanvas/othello2.png";
import Othello3 from "../../assets/ProjectsCanvas/othello3.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoPYGAME from "../../assets/Logos/logoPYGAME.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";

export function OthelloProject({color, gradient}) {
    const Canvas = [
        Othello1,
        Othello2,
        Othello3,
    ]

    const Stack = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Pygame", logoPYGAME, "https://www.pygame.org/news"],
    ]

    return (
        <BoxContent>
            <FirstColumn>
                <TitleRow>
                  <ProjectTitle gradient={gradient}>Othello</ProjectTitle>
                  <LinkBox url={logoGithub}/>
                </TitleRow>
                <BriefDescription>
                  Development of Othello game on python with implementation of an intelligent bot based on a heuristic minimax algorithm
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
                    <Line color={color}/>
                    User can see all his available moves and has to click on the board to make a move. After that, AI will play.<br/><br/>
                    When the game ends, it stays possible to review the game in order to understand or to check something. After that, the reset button allows to play a new game. <br/><br/><br/>
                    AI process is based on the minimax algorithms with an heuristic function.
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