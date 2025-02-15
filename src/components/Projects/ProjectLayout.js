import styled from "styled-components";
import {theme} from "../../theme"

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

   @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 2vh;
    gap: 1vh;
  }
`;

export const FirstColumn = styled.div`
  margin: 10px;
  flex: 0.60;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex: 0.2;
  }
`;

export const TitleRow = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const ProjectTitle = styled.div`
  font-size: ${(props) => props.fontsize || "5vw"};
  font-weight: bold;
  background: ${(props) => props.gradient};
  text-align: center;
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

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

export const LinkBox = styled.div`
    width: min(7vw, 7vh);
    aspect-ratio: 1 / 1; 
    background: url(${props => props.url}) no-repeat center;
    background-size: contain;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.1s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
      display: none;
    }
`;

export const BriefDescription = styled.div`
  font-size: 1.2vw;
  padding-block: 0.5vh;
  text-align: justify;
  height: fit-content;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 3vw;
    padding-block: 0;
  }
`;

export const MediaContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items : center;
  width: ${(props) => props.width || "35vw"};
  height: ${(props) => props.height || "35vh"};
  background-position: center;  
  border: ${(props) => props.color} 2px solid;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: ${(props) => props.content || "cover"};
  background-position: center;  
  background-repeat: no-repeat;
`;

export const SecondColumn = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-block: 1vh;
  gap: 1vh;

  @media (max-width: 768px) {
    margin-block: 0;
  }
`;

export const Description = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  border-radius: 2vw;
  padding-block: 3vh;
  padding-inline: 2vw;
  background: ${theme.colors.secondary_transparent};
  font-size: 1.1vw;
  font-weight: bold;
  text-align: justify;

  @media (max-width: 768px) {
    align-self: center;
    width: 90%;
    height: fit-content;
    padding-inline: 3vw;
    padding-block: 2vh;
    font-size: 1.1vh;
  }
`;

export const KeyWords = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2vh;

  @media (max-width: 768px) {
    gap: 1vh;
  }
`;

export const Word = styled.div`
  cursor:default;
  text-align: center;
  width: max-content;
  font-size: ${(props) => props.fontsize || "1.5vw"};
  transition: letter-spacing 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
      letter-spacing: 3px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  flex-direction: row;
`;

export const StackList = styled.div`
  padding-block: 2vh;
  align-self: center;
  width: 100%;
  height: fit-content;
`;

export const StackBox = styled.div`
  width: min(7vw, 7vh);
  aspect-ratio: 1 / 1; 
  background: url(${props => (props.url)}) no-repeat center;
  background-size: contain;
  cursor: pointer;;
  border-radius: 1vw;
  transition : scale 0.1s ease-in-out;

  &:hover{
    scale: 1.2;
  }

  @media (max-width: 768px) {
    width: max(6vw, 6vh);
    aspect-ratio: 1 / 1; 
  }
`;
