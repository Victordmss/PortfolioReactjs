import styled from "styled-components";
import {theme} from "../../theme"


export const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: 40vw;
  height: fit-content;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  border-radius: 50px;
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
`;

export const SchoolTitle = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  gap: 5px;
  font-weight: bold;
`;

export const FirstRow = styled.div`
  flex: 0.35;
  width: 100%;
  height: 30vh;
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
  padding: 10px;
  overflow: hidden;
`;

export const StackListContainer = styled.div`
  flex: 0.4;
  margin-top: 5px;
  width: 100%;
`;

export const StackList = styled.div`
  margin-inline: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StackBox = styled.div`
  height: 60px;
  width: 60px;
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
  font-size: 13px;
`;

export const VolunteeringTitle = styled.div`
  font-size: 15px;
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
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  background: ${theme.colors.secondary_transparent};
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const AssociationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  height: 60px;
`;

export const AssociationBox = styled.div`
  border-radius: 10px;
  height: 60px;
  width: 60px;
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