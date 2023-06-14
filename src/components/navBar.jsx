import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.svg'
import gmail from '../assets/images/gmail.svg'
import linkedin from '../assets/images/linked in.svg'


export const NavBar = () => {
    
    // to set what link we are on
    const [activeLink, setActiveLink]=useState('home');

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


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return(
        <Navbar  expand="lg" className={
            // to check if scrolled or not
            scrolled?"scrolled":""
            }>
            
            <Container>
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img src={logo} alt='Logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={
                        // to check and set active link
                        activeLink==='home'?'active navbar-link':'navbar-link'
                    }
                    onClick={()=> onUpdateActiveLink('home')}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link href="#skills" className={
                        // to check and set active link
                        activeLink==='skills'?'active navbar-link':'navbar-link'
                    }
                    onClick={()=> onUpdateActiveLink('skills')}
                    >
                        Skills</Nav.Link>
                    <Nav.Link href="#experience" className={
                        // to check and set active link
                        activeLink==='experience'?'active navbar-link':'navbar-link'
                    }
                    onClick={()=> onUpdateActiveLink('experience')}
                    >
                     Experience</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href='#'><img src={linkedin}></img></a>
                        <a href='#'><img src={gmail}></img></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('connect')}>
                        <span>Let's Connect</span> 
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
