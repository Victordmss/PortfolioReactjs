import React from "react";
import DaDPreview from "../../assets/ProjectsCanvas/PreviewDad.mp4";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoPYGAME from "../../assets/Logos/logoPYGAME.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";

import {BoxContent, 
  FirstColumn, 
  TitleRow,
  ProjectTitle, 
  LinkBox,
  BriefDescription, 
  MediaContainer, 
  SecondColumn,
  Description, 
  KeyWords,
  Word,
  Row, 
  StackList, 
  StackBox} from "./ProjectLayout"

import {Line} from "../index"

export function DaDProject({color, gradient}) {

    const Stack = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Pygame", logoPYGAME, "https://www.pygame.org/news"],
    ]

    return (
        <BoxContent>
            <FirstColumn>
                <TitleRow>
                  <ProjectTitle fontsize={"3vw"} gradient={gradient}>Drag&Drop Maker</ProjectTitle>
                  <LinkBox url={logoGithub}/>
                </TitleRow>
                <br/>
                <BriefDescription>
                  Creation of a mario maker style game, based on drag&drop functionality
                </BriefDescription>
                <MediaContainer color={color}>
                    <video width="100%" height="100%" autoPlay loop muted style={{ objectFit: "cover" }}>
                        <source src={DaDPreview} type="video/mp4" />
                    </video>
                </MediaContainer>
            </FirstColumn>
            <SecondColumn>
                <Description>
                    <KeyWords>
                        <Word>
                            Game development
                        </Word>
                        <Word>
                            Level design
                        </Word>
                        <Word>
                            Responsiveness and Adaptability
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    The aim of this project is to develop a platformer that allows users to create their own levels. <br/><br/>
                    This project had no specific goal, only to develop a video game design program with instinctive, functional drag&drop. <br/><br/>
                    This project was created with the help of Clear code <br/>
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