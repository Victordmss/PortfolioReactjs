import { useState, useEffect, useRef } from "react";
import { VictoryPie } from "victory";
import styled from "styled-components";
import { theme } from "../theme";

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
    scale: 1.03;
  }
`;

const TextPercent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`;

const PercentageCell = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 30px;
  position: relative;
`;

const PercentageText = styled.div`
  padding-top: 5px;
  font-size: 22px;
  text-align: center;
`;

export function PourcentPie({ item }) {
  return (
    <PercentageCell>
      <PercentContainer>
        <VictoryPie
          animate={{ duration: 2000 }}
          colorScale={[theme.colors.tertiary, "transparent"]}
          cornerRadius={({ datum }) => datum.y * 5}
          innerRadius={180}
          data={[
            { y: item[1] },
            { y: 100 - item[1] }
          ]}
          style={{ labels: { fill: "transparent" } }}
          startAngle={0}
          endAngle={360}
        />
        <TextPercent>{item[1]}%</TextPercent>
      </PercentContainer>
      <PercentageText>{item[0]}</PercentageText>
    </PercentageCell>
  );
}
