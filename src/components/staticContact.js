import styled from "styled-components";
import { theme } from "../theme";

export const SocialContainer = styled.div`
  position: fixed;
  bottom: 2vh;
  right: 1vw;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;

export const SocialColumn = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconContent = styled.li`
  margin-inline: 10px;
  position: relative;
  padding: 0.5rem;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
`;

export const SocialLink = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(7vh, 7vw);
  aspect-ratio: 1 / 1; 
  border-radius: 50%;
  color: #4d4d4d;
  background-color: ${theme.colors.tertiary_transparent};
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    color: white;
    scale: 1.1;
  }
`;

export const SvgIcon = styled.svg`
  position: relative;
  z-index: 20;
  width: 30px;
  height: 30px;
`;

export const Filled = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 0.3s ease-in-out;

  ${SocialLink}:hover & {
    height: 100%;
  }

  ${({ social }) =>
    social === "instagram"
      ? `background: linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f);`
      : social === "linkedIn"
      ? `background-color: #4267B2;`
      : social === "github"
      ? `background-color:rgb(255, 255, 255);`
      : ""}
`;

export function staticContactComponent() {

    const instagramContact = <IconContent>
        <SocialLink href="https://www.instagram.com/ucc.utc/" aria-label="Instagram" target="_blank">
            <SvgIcon width="16" height="16" viewBox="0 0 16 16">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                ></path>
            </SvgIcon>
            <Filled social="instagram" />
        </SocialLink>
    </IconContent>;

    const linkedInContact = <IconContent>
    <SocialLink href="https://www.linkedin.com/in/victor-demessance-65a9431b0/" aria-label="linkedIn" target="_blank">
        <SvgIcon width="100" height="100" viewBox="0 0 50 50">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </SvgIcon>
        <Filled social="linkedIn" />
    </SocialLink>
    </IconContent>;

    const githubContact = <IconContent>
        <SocialLink href="https://github.com/Victordmss" aria-label="github" target="_blank">
        <SvgIcon width="100" height="100" viewBox="2.5 2.5 25 25">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </SvgIcon>
        <Filled social="github" />
        </SocialLink>
    </IconContent>;

    return (
        <SocialContainer>
          <SocialColumn>    
            {/**instagramContact**/}
            {linkedInContact}
            {githubContact}
          </SocialColumn>
        </SocialContainer>
      );
  }
  