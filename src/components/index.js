import styled from "styled-components";
import {theme} from "../theme"

// -------- Centralize all exports --------

// Title 
export const TitleRow = styled.div`
  padding-block : 1rem;
  color : ${theme.colors.tertiary};
  font-weight: bold;
  font-size: 4rem;
  height: 10vh;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// 3D robot model 
export {Robot} from "./3D_models/Robot";

// Schools 
export {UtcComponent} from "./Schools/UTC"
export {RtuComponent} from "./Schools/RTU"
export {SnuComponent} from "./Schools/SNU"

// Map model
export {Map} from "./Map"

// Projects
export {OthelloProject} from "./Projects/OthelloProject";
export {DaDProject} from "./Projects/DaDProject";
export {PortfolioProject} from "./Projects/PortfolioProject";
//export {EDUTCProject} from "./Projects/old_projects/EDUTCProject";
//export {DAFourProject} from "./Projects/old_projects/DAFourProject";
export {CookeatProject} from "./Projects/CookeatProject";
export {ARS4Project} from "./Projects/ARS4Project";
export {ARS5Project} from "./Projects/ARS5Project";

// Pourcentage Pie
export {PourcentPie} from "./pourcentPie";

// Line
export const Line = styled.div`
  align-self: center;
  height: 3px;
  width: 90%;
  background: ${(props) => props.color} ;
  margin-block: 2px;
`;
