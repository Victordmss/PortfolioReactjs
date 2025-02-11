import styled from "styled-components";
import {theme} from "../../theme"

export const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const FirstColumn = styled.div`
margin: 10px;
flex: 0.60;
display: flex;
flex-direction: column;
`;

export const TitleRow = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

export const ProjectTitle = styled.div`
    font-size: ${(props) => props.fontsize || "5rem"};
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
`;

export const LinkBox = styled.div`
    background-image: url(${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border-radius: 10px;
    height: 60px;
    width: 60px;
    transition: scale 0.1s ease-in-out;

    &:hover {
        scale: 1.2;
    }
`;

export const BriefDescription = styled.div`
  font-size: 1.1rem;
  text-align: justify;
  height: fit-content;
  font-weight: bold;
  margin: 5px;
`;

export const MediaContainer = styled.div`
  margin-top: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items : center;
  margin-top: 1.5rem;
  width: ${(props) => props.width || "33vw"};
  height: ${(props) => props.height || "35vh"};
  background-position: center;  
  border: ${(props) => props.color} 2px solid;
  border-radius: 20px;
  overflow: hidden;
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
margin-block: 1rem;
gap: 1rem;
`;

export const Description = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  border-radius: 25px;
  padding: 1.5rem;
  background: ${theme.colors.secondary_transparent};
  font-size: 1rem;
  font-weight: bold;
  text-align: justify;
`;

export const KeyWords = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;

export const Word = styled.div`
  cursor:default;
  text-align: center;
  width: max-content;
  font-size: 1.4rem;
  transition: letter-spacing 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
      letter-spacing: 3px;
  }

  a {
    text-decoration: none;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-direction: row;
`;

export const StackList = styled.div`
padding: 10px;
align-self: center;
width: 100%;
height: fit-content;
`;

export const StackBox = styled.div`
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;;
  border-radius: 10px;
  height: 70px;
  width: 70px;
  transition : scale 0.1s ease-in-out;

  &:hover{
    scale: 1.2;
  }
`;
