import { useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import { theme } from "../theme";

const Section = styled.div`
  height: 8vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  background: ${(props) => (props.scrolled ? "white" : "transparent")};
  box-shadow: ${(props) =>
    props.scrolled ? theme.colors.tertiary_transparent + " 0px 0px 1rem 1rem" : "none"};
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  font-size: 20px;
  width: 100%;
  height: 100%;
  padding-block: 10px;
`;

const Avatar = styled.div`
  aspect-ratio: 1 / 1; 
  height: 100%; 
  border-radius: 50%;
  background: rgba(181, 180, 180, 0.13);
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-inline: 1vw;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  font-size: 1.5vw;
  margin: 0 1rem;
  color: var(--textColor);
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function NavBar() {
  const [scrolled, setScrolled] = useState(false);  // Scrool value for background effect

  // Scrool Background hook
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);  // Since we start to scrool on the Y axe
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation function (to take into account the size of the Navigation Bar in the process)
  const handleNavClick = (event, targetId) => {
    event.preventDefault();   // Don't just link to the section
    const targetElement = document.querySelector(targetId);   // Find the target section
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "end", // Link the bottom of the screen with the bottom of the section
      });
    }
  };

  // Array of pages to optimize Navigation component
  const pages = [
    { name: "Home", id: "#Home" },
    { name: "About", id: "#About" },
    { name: "Education", id: "#Education" },
    { name: "Projects", id: "#Projects" },
    { name: "Contact", id: "#Contact" },
  ];

  return (
    <Section scrolled={scrolled}>
      <Container>
        <Avatar url={avatar} />
        <Nav>
          {pages.map((page) => (
            <NavItem
              key={page.id}
              href={page.id}
              onClick={(e) => handleNavClick(e, page.id)}
            >
              {page.name}
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Section>
  );
}

export default NavBar;
