import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import styled from "styled-components";
import avatar from "../../assets/avatar.png";

const Bar = styled.div`
  scroll-snap-align: center;
  
;`

const Avatar = styled.div`
  border-radius: 50px;
  height: 55px;
  width: 55px;
  background: rgba(238, 238, 238, 0.13);
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <Bar>
            <Avatar url={avatar}/>
            <nav ref={navRef}>
                <a href="/#Home">Home</a>
                <a href="/#About">About</a>
                <a href="/#Education">Education</a>
                <a href="/#Projects">Projects</a>
                <a href="/#Credits">Credits</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
            </Bar>
        </header>
    );
}

export default NavBar;