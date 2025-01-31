import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const StyledGradientLine = styled.div`
  width: 7px;
  height: ${(props) => props.size}px;
  background: linear-gradient(to bottom, #4b1a75, #683891);
  animation: ${(props) => props.animation} 3.6s;
  @keyframes growUp {
    to {
      height: 500px;
    }
  }
  @keyframes growDown {
    to {
      height: 170px;
    }
  }
`;

export const StyledCircle = styled.div`
  margin-bottom: -5px;
  margin-top: 20px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4b1a75;
`;