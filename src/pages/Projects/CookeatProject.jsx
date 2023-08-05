import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import React from "react";
import styled from "styled-components";
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
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  padding-right: 100px;
  font-size: 74px;
  height: fit-content;
  background: linear-gradient(to right,
  hsl(334, 86%, 25%) 0,
  hsla(346, 20%, 61%, 0.85) 15%,
  hsl(334, 86%, 25%) 25%);
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
  margin-bottom: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 330px;
  background: rgba(239, 236, 236, 0.71);
  border: hsl(0, 0%, 0%) 5px solid;
  border-radius: 20px;
  overflow: hidden;
`;

const Item = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 330px;
  width: 170px;
`;

const SecondColumn = styled.div`
  //background: red;
  margin: 10px;
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -10px;
`;

const StackList = styled.div`
  margin-top: 20px;
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

const Line = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: hsl(334, 86%, 25%);
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

export function CookeatProject() {
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
        ["Github", logoGithub, "https://github.com/Victordmss"],

    ]

    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><b>Cookeat</b></ProjectTitle>
                <BriefDescription>
                    <i>
                        Recipe management application with the possibility to customize an own account
                    </i>
                </BriefDescription>
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
                    <Line/>
                    The user can choose his colour for the whole game. The black color always starts. The other colour will be played by an implemented AI (easy level by default). <br/><br/>
                    On the left part of the screen, there is some information like the color of the user, the score or the possibility to change the difficulty and reset the game. <br/><br/>
                </Description>
            </FirstColumn>
            <SecondColumn>
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