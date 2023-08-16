import { useRef } from "react";
import "./NavBar.css";
import styled from "styled-components";
import avatar from "../../assets/avatar.png";

const Section = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 10;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  background: linear-gradient(rgba(65, 13, 108, 0.91), rgba(65, 13, 108, 0.10));
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

const NavItem = styled.a`
  color: #c0bebe; // Default text color
  margin: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff; // Change text color on hover
  }
`;

function NavBar() {
    const navRef = useRef();

    return (
            <Section>
                <Container>
                    <span className="darkmode-ignore"><Avatar url={avatar}/></span>
                    <nav ref={navRef}>
                        <NavItem href="/#Home">Home</NavItem>
                        <NavItem href="/#About">About</NavItem>
                        <NavItem href="/#Education">Education</NavItem>
                        <NavItem href="/#Projects">Projects</NavItem>
                        <NavItem href="/#Contact">Contact</NavItem>
                    </nav>
                </Container>
            </Section>
    );
}

export default NavBar;