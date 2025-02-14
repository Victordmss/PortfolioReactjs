import styled from "styled-components";
import {theme} from "../../theme"


export const DescriptionContainer = styled.div`
  z-index: 1;
  padding-block: 2vh;
  padding-inline: 1vw;
  width: 40vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  overflow: auto;

  border-radius: 3vw;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;

  animation: ${(props) => (props.animation ? "getIn" : "getOut")} 0.5s ease-in;

  @keyframes getIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes getOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
    align-self: center;
    animation: none;
    margin-top: 5vh;
  }
`;

export const SchoolTitle = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.5vw;
  gap: 5px;
  font-weight: bold;
`;

export const FirstRow = styled.div`
  flex: 0.45;
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  align-self: center;
  flex: 0.5;
  height: 100%;
  border-radius: 30px;
  background: ${theme.colors.secondary_transparent};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap : 2px;
  padding-block: 1vh;
  overflow: hidden;
`;

export const StackListContainer = styled.div`
  flex: 0.5;
  margin-top: 0.5vh;
  width: 100%;
  padding-left: clamp(min(0.75vw, 0.75vh), 1vw, 25px)
`;

export const StackBox = styled.div` 
  width: clamp(min(3vw, 3vh), 4vw, 100px);
  aspect-ratio: 1 / 1;   
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: scale 0.1s ease-in-out; 

  &:hover {
    scale: 0.9
  }
`;

export const KeyWords = styled.div`
  flex: 0.6;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
`;

export const Word = styled.div`
  cursor: default;
  text-align: center;
  width: max-content;
  transition: letter-spacing 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-size: 1vw;

  &:hover {
      letter-spacing: 2px;
  }

  a {
    text-decoration: none;
  }
`;

export const SecondRow = styled.div`
  flex: 0.55;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const SchoolDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  border-radius: 20px;
  padding: 20px;
  padding-block: 10px;
  background: ${theme.colors.secondary_transparent};
`;

export const DateTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin-bottom: 10px;
`;

export const DateTitle = styled.div`
  font-size: 15px;
  border-radius: 15px;
  width: fit-content;
  padding: 7px;
  background: ${(props)=>props.gradient};
`;

export const DateLink = styled.div`
  align-self: center;
  width: ${(props) => props.size}px;
  height: 3px;
  background: ${(props)=>props.gradient};
`;

export const RightArrow = styled.div`
  align-self: center;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${(props)=>props.color};
`;

export const TextDescription = styled.div`
  font-weight: bold;
  font-size: 1vw;
`;

export const VolunteeringTitle = styled.div`
  font-size: 1vw;
  width: 100%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const SemiLine = styled.div`
  height: 2px;
  width: ${(props)=>props.size || "30%"};
  background: ${(props)=>props.color};
`;

export const AssociationListContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const AssociationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  height: fit-content;
`;

export const AssociationBox = styled.div`
  border-radius: 10px;
  width: clamp(min(4vw, 4vh), 4vw, min(6vw, 6vh));
  aspect-ratio: 1 / 1; 
  background: ${(props) => props.color};
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;