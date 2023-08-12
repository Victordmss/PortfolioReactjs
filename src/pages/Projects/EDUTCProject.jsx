import React from "react";
import styled from "styled-components";
import EDUTC from "../../assets/ProjectsCanvas/EDUTC.png";
import logoGithub from "../../assets/Logos/logoGITHUB.png";
import logoPYTHON from "../../assets/Logos/logoPYTHON.png";
import logoPILLOW from "../../assets/Logos/logoPILLOW.png";


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
  font-size: 74px;
  height: fit-content;
  width: 400px;
  background: linear-gradient(to right,
  hsl(0, 100%, 50%),
  hsl(60, 100%, 50%),
  hsl(120, 60%, 52%),
  hsl(240, 100%, 50%),
  hsl(360, 100%, 50%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;

  @keyframes shine {
    from {
      background-position: 0;
    }
    to {
      background-position: 400px;
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
  margin-top: 20px;
  align-self: center;
  width: 340px;
  height: fit-content;
  background: rgba(239, 236, 236, 0.71);
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  border: 2px solid transparent;
`;

const Item = styled.div`
  background-image: url(${EDUTC});
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

const VerticalLine = styled.div`
  align-self: center;
  width: 2px;
  height: 90%;
  background: rgba(56, 19, 122);
`;

const Line = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: linear-gradient(to right,
  hsl(0, 100%, 50%),
  hsl(60, 100%, 50%),
  hsl(120, 60%, 52%),
  hsl(240, 100%, 50%));
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

export function EDUTCProject() {

    const Stack = [
        ["Python", logoPYTHON, "https://en.wikipedia.org/wiki/Python_(programming_language)"],
        ["Github", logoGithub, "https://github.com/Victordmss"],
        ["Pygame", logoPILLOW, "https://pypi.org/project/Pillow/"],
    ]

    return (
        <BoxContent>
            <FirstColumn>
                <ProjectTitle><b>
                   EDUTC
                </b></ProjectTitle>
                <BriefDescription>
                    Development of Othello game on python with implementation of an intelligent bot based on a heuristic minimax algorithm
                </BriefDescription>
                <MediaContainer>
                    <Item/>
                </MediaContainer>
            </FirstColumn>
            <VerticalLine/>
            <SecondColumn>
                <Description>
                    <KeyWords>
                        <Word>
                            Software development
                        </Word>
                        <Word>
                            Level design
                        </Word>
                        <Word>
                            Responsiveness and Adaptability
                        </Word>
                    </KeyWords>
                    <Line/>
                    The idea of the project is to process the emails that my university sends us to inform us of our schedule. <br/><br/>
                    There is already a website that allows us to do that : Emploi d'UT temps. However, when we receive the email, the website is often down because of the numbers of people.
                    <br/><br/>
                    Consequently I decided to create a python script that will be able to transform this email into a schedule that can be viewed in png format.
                    <br/>
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