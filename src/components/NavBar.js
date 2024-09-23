import {Navbar, Container, Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logoWhite from '../assets/images/logo_white.svg';
import linkedinLogo from '../assets/images/linkedin_logo.svg';
import instagramLogo from '../assets/images/instagram_logo.svg';
import githubLogo from '../assets/images/github_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../assets/downloadables/Kang_IT_Resume_V3.pdf';
import DownloadButton from './DownloadButton'


export const NavBar = () => {
	const [activeLink , setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)
	
	useEffect(() => {
		const onScroll = ()=>{
			if(window.scrollY > 50){
				setScrolled(true)
			}
			else{
				setScrolled(false)
			}
		}
		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const onUpdateActiveLink = () => {

	}

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
					<Navbar.Brand href="#home">
						<img src={logoWhite} className= "logo" alt="peepo-glazes-logo"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" className = {activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={()=>{onUpdateActiveLink("home")}}>About Me</Nav.Link>
							<Nav.Link href="#experiences" className = {activeLink === "experience" ? "active navbar-link" : "navbar-link"} onClick={()=>{onUpdateActiveLink("experience")}}>Experience</Nav.Link>
							<Nav.Link href="#paintings" className = {activeLink === "paintings" ? "active navbar-link" : "navbar-link"} onClick={()=>{onUpdateActiveLink("paintings")}}>ArtWorks</Nav.Link>
							<Nav.Link href="#contacts" className = {activeLink === "contacts" ? "active navbar-link" : "navbar-link"} onClick={()=>{onUpdateActiveLink("contacts")}}>Give Me A Nudge</Nav.Link>
						</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/ker-soon-kang-15935513b/"><img src={linkedinLogo} alt="linkedin"/></a>
							<a href="https://www.instagram.com/peepoglazes/"><img src={instagramLogo} alt="instagram"/></a>
							<a href="https://github.com/kanky033/kang_portfolio_site"><img src={githubLogo} alt="instagram"/></a>
						</div>
						<DownloadButton resume={resume} />
					</span>
					</Navbar.Collapse>
			</Container>
	</Navbar>
	)
}