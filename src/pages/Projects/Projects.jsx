import React, {useEffect, useState} from "react"
import styled from "styled-components";
import OthelloImage from "../../../src/assets/othello2.png";
import data from "../Education/Projects.json";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-top: 10px;
  font-size: 74px;
  padding-bottom: 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-left: 4.7%;
  padding-right: 4.7%;
  padding-bottom: 4.7%;
  justify-content: center;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(46, 2, 93, 0.59);
  border-left: 4px solid #4b1a75;
  border-right: 4px solid #4b1a75;
  border-radius: 40px;
  flex: 1;
  overflow: hidden;
  animation: floating 3s infinite ease alternate;
  
  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

const LeftBorderBox = styled.div`
  background: transparent;
  flex: 0.05;
  cursor: pointer;

  &:hover{
    background: linear-gradient(to left, rgba(75, 26, 117, 0), #4b1a75);;
  }
`;

const RightBorderBox = styled.div`
  background: transparent;
  flex: 0.05;
  cursor: pointer;
  
  &:hover{
    background: linear-gradient(to right, rgba(75, 26, 117, 0), #4b1a75);;
  }
`;

const BoxContent = styled.div`
  //background: chocolate;
  flex: 1; 
  display: flex;
  flex-direction: row;

  animation: ${props => (props.animation[0] && "switchNext") || (props.animation[1] && "switchBack")} linear 2s;

  @keyframes switchNext {
    to {transform: translateX(-1500px);}
    }
    @keyframes switchBack {
      to {transform: translateX(1500px);}
    }
`;

const FirstColumn = styled.div`
  //background: brown;
  margin: 10px;
  flex: 0.60; 
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  font-size: 74px;
  //background: aqua;
  height: fit-content;
`;

const BriefDescription = styled.div`
  font-size: 18px;
  //background: darkmagenta;
  height: fit-content;
  margin: 5px;
`;

const Description = styled.div`
  font-size: 16px;
  //background: darkmagenta;
  height: 450px;
  padding-top: 30px;
  margin: 5px;
  text-align: justify;
`;

const Item = styled.div`
  background: rgba(56, 19, 122, 0.25);
  margin-top: 50px;
  align-self: center;
  border: 2px solid rgba(56, 19, 122);
  border-radius: 25px;
  width: 500px;
  background-image: url(${OthelloImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
`;

const SecondColumn = styled.div`
  //background: blueviolet;
  margin: 10px;
  flex: 0.65; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StackList = styled.div`
  margin-top: 20px;
  background: rgba(56, 19, 122, 0.25);
  border: 2px solid rgba(56, 19, 122);
  border-radius: 25px;
  padding: 10px;
  align-self: center;
  width: 95%;
  height: 100px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  flex-direction: row;
`;

const StackBox = styled.div`
  background: rgba(154, 129, 227, 0.42);
  border: 2px solid rgba(56, 19, 122);
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

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [AutoSwapActivated, setAutoSwapActivated] = useState(true);
    const [switchNextElement, setSwitchNextElement] = useState(false);
    const [switchPrevElement, setSwitchPrevElement] = useState(false);

    useEffect(() => {
        if (AutoSwapActivated) {
            const timer = setInterval(() => {
                setSwitchNextElement(true)
                setTimeout(() => {
                    setCurrentIndex((currentIndex+1) % data.length)
                    setSwitchNextElement(false)
                }, 2000)}, 7000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [AutoSwapActivated, currentIndex]);

    const nextProject = () => {
        setSwitchNextElement(true)
        setTimeout(() => {
            setCurrentIndex((currentIndex+1) % data.length)
            setSwitchNextElement(false)
        }, 2000)
    };

    const previousProject = () => {
        setSwitchPrevElement(true)
        setTimeout(() => {
            if (currentIndex===0) {
                setCurrentIndex(1)
            }
            else {
                setCurrentIndex(currentIndex - 1);
            }
            setSwitchPrevElement(false)
        }, 2000)

    };

    const project = data[currentIndex];

    return (
        <Section id="Projects">
            <Title>
                Projects
            </Title>
            <Container>
                <ProjectBox
                    onMouseEnter={() => setAutoSwapActivated(false)}
                    onMouseLeave={() => setAutoSwapActivated(true)}>
                    <LeftBorderBox onClick={previousProject}/>
                    <BoxContent animation={[switchPrevElement, switchNextElement]}>
                            <FirstColumn>
                                <ProjectTitle><b>{project.name}</b></ProjectTitle>
                                <BriefDescription>
                                    {project.briefDescription}
                                </BriefDescription>
                                <Item/>
                            </FirstColumn>
                            <Line/>
                            <SecondColumn>
                                <Description>
                                    {project.description.map((sentence, index) => (
                                        <p key={index}>{sentence} <br/> <br/> </p>
                                    ))}
                                </Description>
                                <StackList>
                                    <text><b><i>STACK USED : </i></b></text>
                                    <Row>
                                        <StackBox/>
                                        <StackBox/>
                                        <StackBox/>
                                    </Row>
                                </StackList>
                            </SecondColumn>
                        </BoxContent>
                    <RightBorderBox  onClick={nextProject}/>
                </ProjectBox>
            </Container>
        </Section>
    )
}

export default Projects;