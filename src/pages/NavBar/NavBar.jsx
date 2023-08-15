import { useRef } from "react";
import "./NavBar.css";
import styled from "styled-components";
import avatar from "../../assets/avatar.png";

const Section = styled.div`
  height: 10vh;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
  background: linear-gradient(rgba(65, 13, 108, 0.91), rgba(65, 13, 108, 0.04));
  font-size: 20px;
`;

const Avatar = styled.div`
  border-radius: 50px;
  height: 55px;
  width: 55px;
  margin-inline: 20px;
  background: rgba(238, 238, 238, 0.13);
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function NavBar() {
    const navRef = useRef();

    return (
            <Section>
                <Container>
                    <span className="darkmode-ignore"><Avatar url={avatar}/></span>
                    <nav ref={navRef}>
                        <a href="/#Home">Home</a>
                        <a href="/#About">About</a>
                        <a href="/#Education">Education</a>
                        <a href="/#Projects">Projects</a>
                        <a href="/#Credits">Credits</a>
                    </nav>
                </Container>
            </Section>
    );
}

export default NavBar;