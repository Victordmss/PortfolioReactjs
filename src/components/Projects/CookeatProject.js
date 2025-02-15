import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import React from "react";
import Cookeat1 from "../../assets/ProjectsCanvas/Cookeat1.png";
import Cookeat2 from "../../assets/ProjectsCanvas/Cookeat2.png";
import Cookeat3 from "../../assets/ProjectsCanvas/Cookeat3.png";
import Cookeat4 from "../../assets/ProjectsCanvas/Cookeat4.png";
import Cookeat5 from "../../assets/ProjectsCanvas/Cookeat5.png";
import Cookeat6 from "../../assets/ProjectsCanvas/Cookeat6.png";
import logoFLUTTER from "../../assets/Logos/logoFlutter.png";
import logoFIREBASE from "../../assets/Logos/logoFirebase.png";
import logoDART from "../../assets/Logos/logoDART.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";

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

export function CookeatProject({color, gradient}) {
    const Canvas = [
        Cookeat1,
        Cookeat2,
        Cookeat3,
        Cookeat4,
        Cookeat5,
        Cookeat6,
    ]

    const Stack = [
        ["Flutter", logoFLUTTER, "https://flutter.dev/"],
        ["Firebse", logoFIREBASE, "https://firebase.google.com/"],
        ["Dart", logoDART, "https://dart.dev/"],
    ]

    return (
        <BoxContent>
            <FirstColumn>
                <TitleRow>
                    <ProjectTitle gradient={gradient}>Cookeat</ProjectTitle>
                    <LinkBox url={logoGithub} href="https://github.com/Victordmss/Cookeat" target="_blank"/>
                </TitleRow>        
                <BriefDescription>
                  Recipe management application with the possibility to customize an own account
                </BriefDescription>
                <MediaContainer height={"100%"} width={"12vw"} color={color}>
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
                            Mobile app development
                        </Word>
                        <Word>
                            User interface
                        </Word>
                        <Word>
                            Cloud&Database
                        </Word>
                    </KeyWords>
                    <Line color={color}/>
                    The project aims to create a recipe management application with the ability to customize a personal account.
                    Users can create recipes, add ingredients, and click the CookEat button to receive a random recipe for a specific dish. <br/><br/>
                    The entire backend is built with Firebase, handling authentication and non-relational database storage. 
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