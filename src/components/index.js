import styled from "styled-components";
// -------- Centralize all exports --------

// Title 
export const TitleRow = styled.div`
  padding-block : 0.5rem;
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

// 3D graduation hat model 
export {Hat} from "./3D_models/GraduationHat";

// Schools 
export {UtcComponent} from "./Schools/UTC"
export {RtuComponent} from "./Schools/RTU"

// Map model
export {Map} from "./Map"

// Projects
export {OthelloProject} from "./Projects/OthelloProject";
export {DaDProject} from "./Projects/DaDProject";
export {PortfolioProject} from "./Projects/PortfolioProject";
export {EDUTCProject} from "./Projects/EDUTCProject";
export {DAFourProject} from "./Projects/DAFourProject";
export {CookeatProject} from "./Projects/CookeatProject";

