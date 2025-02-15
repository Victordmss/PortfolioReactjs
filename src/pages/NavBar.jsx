import { useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import { theme } from "../theme";
import { motion } from "framer-motion";

const Section = styled.div`
  height: 8vh;
  width: 100vw;
  position: fixed;
  z-index: 100000;
  background: ${(props) => (props.scrolled ? "white" : "transparent")};
  box-shadow: ${(props) =>
    props.scrolled ? theme.colors.tertiary_transparent + " 0px 0px 1rem 1rem" : "none"};
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (max-width: 768px) {
    background: ${(props) => (props.scrolled ? "transparent" : "transparent")};
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 2vw;
  font-size: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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

  @media (max-width: 768px) {
    background: ${theme.colors.secondary_transparent};
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
`;

const Nav = styled.nav`
  margin-left: 1vw;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavItem = styled.a`
  font-size: 1.5vw;
  margin: 0 1rem;
  color: var(--textColor);
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 44px;
  height: 44px;
  text-align: center;

  .hover .line1 {
    transform: rotate(45deg);
  }

  .hover .line2 {
    transform: rotate(-45deg);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  text-align: center;
  background-color: #000;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;  
  transform-origin: 9px center;
`;

const MenuContent = styled(motion.div)`
  position: absolute;
  top: 8vh;
  right: 0;
  width: 60vw;
  height: auto;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 999;

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: lightgray;
    }
  }
`;

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Screen size effect
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scrool background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation effect
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: isLargeScreen ? "end": "center",
      });
    }
    setMenuOpen(false); 
  };

  // Pages list
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
        
        {/* Desktop menu */}
        {isLargeScreen && (
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
        )}

        {/* Mobile menu */}
        {!isLargeScreen && (
          <>
            <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
              <Line style={{transform: menuOpen ? "rotate(45deg)" : "none"}}/>
              <Line style={{transform: menuOpen ? "rotate(-45deg)" : "none"}}/>
            </BurgerMenu>
            {menuOpen && (
              <MenuContent
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {pages.map((page) => (
                  <a key={page.id} href={page.id} onClick={(e) => handleNavClick(e, page.id)}>
                    {page.name}
                  </a>
                ))}
              </MenuContent>
            )}
          </>
        )}
      </Container>
    </Section>
  );
}

export default NavBar;
