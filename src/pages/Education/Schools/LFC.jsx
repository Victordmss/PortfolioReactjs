import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: 90%;
  height: 85%;
  border-radius: 50px;
  background: rgba(238, 238, 238, 0.19);
  overflow: hidden;
  display: flex;
  flex-direction: column;  
  
  @keyframes GetOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes GetIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const SchoolTitle = styled.div`
  text-align: center;
  font-size: 26px;
  height: 60px;
  background: rgba(219, 43, 57, 0.19);
  width: 100%;
`;

const FirstRow = styled.form`
  width: 100%;
  height: 250px;
  margin-top: 10px ;
  background: rgba(250, 250, 54, 0.42);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Logo = styled.form`
  align-self: center;
  width: 200px;
  height: 200px;
  background: rgba(250, 54, 129, 0.42);
`;

const Presentation = styled.form`
  align-self: center;
  width: 250px;
  height: 175px;
  background: rgba(54, 132, 250, 0.42);
`;

const StackList = styled.form`
  margin: 5px;
  height: 60px;
  background: rgba(250, 54, 217, 0.42);
`;

const KeyWords = styled.form`
  height: 100px;
  margin: 5px;
  background: rgba(54, 250, 243, 0.42);
`;

const SecondRow = styled.form`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  background: rgba(16, 96, 35, 0.42);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SchoolDescription = styled.form`
  width: 100%;
  height: 250px;
  margin: 25px;
  background: rgba(173, 101, 13, 0.42);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


export default function lfcComponent() {
    return <DescriptionContainer>
        <SchoolTitle></SchoolTitle>
        <FirstRow>
            <Logo/>
            <Presentation>
                <StackList>

                </StackList>
                <KeyWords>

                </KeyWords>
            </Presentation>
        </FirstRow>
        <SecondRow>
            <SchoolDescription>

            </SchoolDescription>
        </SecondRow>
    </DescriptionContainer>;
}
