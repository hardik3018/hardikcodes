import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import {BsDownload} from 'react-icons/bs'
import {BsPersonFill} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
 
export const NavBar = () => {
    
    //  to set color state of navbar while scrolling
    const [ scrolled, seScrolled ] = useState(false);

    //useEffect func to determine if scroll
    useEffect(()=>{
        const onScroll = () => {
            
            // if user scrolled 50% of screen then set value of seScrolled = true otherwise false
        
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        
        //evebt listner on scrolling
        window.addEventListener("scroll",onScroll);
        return() => window.removeEventListener("scroll",onScroll)
    },[])

    const handleClickScroll = () => {
        const element = document.getElementById('connect');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return(
        <Navbar  expand="lg" className={
            // to check if scrolled or not
            scrolled?"scrolled":""
            }>
            
            <Container>
                <Navbar.Brand href="/" className='navbar-brand'>
                    <img src={logo} alt='Logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">

                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/"  onClick={() => window.scrollTo(0, 0)} className="navbar-link">
                        Home
                    </Link>
                    <Link to="/Skills" onClick={() => window.scrollTo(0, 0)} className="navbar-link" >
                        Skills</Link>
                    <Link to="/Experience" onClick={() => window.scrollTo(0, 0)} className="navbar-link">
                     Experience & Education</Link>
                     <Link to="/Project" onClick={() => window.scrollTo(0, 0)} className="navbar-link">
                     Projects</Link>
                    
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href='https://www.linkedin.com/in/hardik-chawda-9867a5173/' target="_blank"><BiLogoLinkedin className='icon'/></a>
                        <a href='mailto:hardik.mca21.du@gmail.com' target="_blank"><BiLogoGmail className='icon'/></a>
                    </div>

                    <a href="https://drive.google.com/file/d/1tT2aX0nt2WYZndvgDmo2oUb9RJT9SAIv/view" target="_blank" download="Hardik_Chawda_Resume" >
                    <button className="vvd" onClick={()=>console.log('connect')}>
                        <BsDownload className='icon'/>
                        <span className="navbar-link" >&nbsp; Resume</span> 
                    </button>
                    </a>
                    <button className="vvd" onClick={handleClickScroll}>
                        <BsPersonFill className='icon'/>
                        <span className="navbar-link" >&nbsp; Contact Me</span> 
                    </button>
                    
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}