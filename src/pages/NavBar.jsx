import { useRef, useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import avatar from "../assets/avatar.png";

const Section = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: ${(props) => (props.scrolled ? "white" : "transparent")};
  box-shadow: ${(props) =>
    props.scrolled ? "rgba(69, 69, 69, 0.06) 0px 0px 1rem 1rem" : "none"};
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  font-size: 20px;
`;

const Avatar = styled.div`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin-inline: 20px;
  background: rgba(181, 180, 180, 0.13);
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const NavItem = styled.a`
  font-weight: bold;
  margin: 0 15px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section scrolled={scrolled}>
      <Container>
        <Avatar url={avatar} />
        <nav>
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
