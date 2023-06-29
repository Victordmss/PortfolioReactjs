import React from "react"
import styled from "styled-components";
import {VictoryPie} from 'victory';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const AboutContainer = styled.div`
  //background: #db2b39;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;
`

const FirstRow = styled.div`
  margin-top: 5%;
  //background: #dbff39;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
  width: 100%;
  height: 35%;
  align-items: center;
`

const PercentageCell = styled.div`
  //background: red;
  width: 250px;
  height: 250px;
  margin-bottom: 30px;  
`

const SecondRow = styled.div`
  align-self: center;
  background: rgba(116, 106, 136, 0.45);
  margin-top: 20px;
  margin-inline: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  width: 1300px;
  height: 45%;
  align-items: center;
  border-radius: 50px;
`

const SkillCell = styled.div`
  //background: rgba(44, 110, 22, 0.53);
  width: 400px;
  height: 90%;
`

const Border = styled.div`
  background: rgba(255, 254, 254, 0.34);
  width: 4px;
  height: 80%;
  border-radius: 20px;
`

const PercentageText = styled.div`
  padding-top: 5px;
  font-size: 22px;
  text-align: center;
`;

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 3s infinite alternate floating;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }

  &:hover {
    scale: 1.1;
  }
`;

const TextPercent = styled.div`
  font-size: 30px;
`;

function percentCircle(percent) {
    return (<PercentContainer>
        <VictoryPie
            colorScale={["transparent", "rgba(66,5,119,0.65)"]}
            cornerRadius={({ datum }) => datum.y * 5}
            innerRadius={180}
            data={[
                {y: 100 - percent},
                {y:percent}
            ]}
            style={{ labels: { fill: "transparent"} }}/>
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100%',
            }}
        >
            <TextPercent><b>{percent}%</b></TextPercent>
        </div>
    </PercentContainer>)
}

function About() {
    return (
        <Section id="About">
            <AboutContainer>
                <FirstRow>
                    <PercentageCell>
                        {percentCircle(80)}
                        <PercentageText>
                            Programming
                        </PercentageText>
                    </PercentageCell>
                    <PercentageCell>
                        {percentCircle(95)}
                        <PercentageText>
                            Proactivity
                        </PercentageText>
                    </PercentageCell>
                    <PercentageCell>
                        {percentCircle(60)}
                        <PercentageText>
                            Project Management
                        </PercentageText>
                    </PercentageCell>
                </FirstRow>
                <SecondRow>
                    <SkillCell/>
                    <Border/>
                    <SkillCell/>
                    <Border/>
                    <SkillCell/>
                </SecondRow>
            </AboutContainer>
        </Section>
    )
}

export default About;