import React from "react"
import styled from "styled-components";

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

const PourcentageCell = styled.div`
  background: transparent;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 18px solid rgba(108, 13, 25, 0.59);
`

const SecondRow = styled.div`
  align-self: center;
  background: rgba(116, 106, 136, 0.45);
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

function About() {
    return (
        <Section id="About">
            <AboutContainer>
                <FirstRow>
                    <PourcentageCell/>
                    <PourcentageCell/>
                    <PourcentageCell/>
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