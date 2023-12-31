import styled from "styled-components";

export const DescriptionContainer = styled.div`
  z-index: 1;
  padding: 20px;
  width: fit-content;
  margin-left: 50px ;
  margin-right: 80px;
  border-radius: 50px;
  background: rgba(238, 238, 238, 0.19);
  display: flex;
  flex-direction: column;
  animation: 3s infinite alternate floating, ${(props) => (props.animation ? "getIn" : "getOut")} 0.5s ease-in;

  @keyframes floating {
    to {
      transform: translateY(5px);
    }
  }

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
  text-align: center;
  font-size: 25px;
  height: fit-content;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Line = styled.div`
  margin-bottom: 10px;
  align-self: center;
  height: 3px;
  width: 90%;
  background: ${(props) => props.color} ;
`;

export const FirstRow = styled.div`
  flex: 0.7;
  align-self: center;
  //background: rgba(239, 236, 236, 0.37);
  display: flex;
  flex-direction: row;
  margin-block: 8px;
  justify-content: space-evenly;
`;

export const KeyWords = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SecondRow = styled.div`
  height: 100%;
  margin-top: 10px;
  //border-radius: 20px;
  //background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SchoolDescription = styled.div`
  //background: rgba(173, 101, 13, 0.42);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  border-radius: 20px;
  padding: 20px;
  background: rgba(239, 236, 236, 0.24);
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
  font-size: 13px;
  margin-bottom: 15px;
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
  width: 30%;
  background: ${(props)=>props.color};
`;

export const AssociationListContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const Presentation = styled.div`
  align-self: center;
  width: 265px;
  height: 215px;
  border-radius: 30px;
  background: rgba(239, 236, 236, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`;

export const StackListContainer = styled.div`
  margin-top: 5px;
  height: 90px;
  width: 100%;
`;

export const StackList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  //background: rgba(250, 54, 217, 0.42);
`;

export const StackBox = styled.div`
  border-radius: 10px;
  height: 60px;
  width: 60px;
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    scale: 0.9
  }
`;

export const Word = styled.div`
  cursor:pointer;
  text-align: center;
  width: max-content;

  &:hover {
      letter-spacing: 3px;
      transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  a {
    text-decoration: none;
  }
`;

export const AssociationList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  height: 60px;
  //background: rgba(250, 54, 217, 0.42);
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

  &:hover {
    scale: 1.1;
  }
`;