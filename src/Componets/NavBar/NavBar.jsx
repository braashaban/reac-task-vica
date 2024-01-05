


import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../images/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className="mains">
		  <img src={logo} alt="logo" />
			<nav ref={navRef}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/About">About</NavLink>
			<NavLink to="/Packages">Packages</NavLink>
			<NavLink to="/Services">Services</NavLink>
			<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
{/* 				<button className='navbtn2'>Get in Touch</button> */}
			</nav>

			<div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars className="bars"/>
			</button>
		
			<button className='navbtn2'>Get in Touch</button> 
			</div>
			
			
		</div>
	);
}

export default Navbar; 