
import { useState, useEffect, useCallback } from "react"; // to animate ( delete and type ) --> what's useState & useEffect
import { Container, Row, Col } from "react-bootstrap";

import {Quoted} from "./quotes"
import headerImg from "../assets/images/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons'; // importing arrow icon

import AOS from 'aos';
import 'aos/dist/aos.css';
import Display from "./display";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from './ParticlesConfig.js';
import AboutMe from "./AboutMe";

import { Link } from 'react-router-dom';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  //for animation  on scroll
  useEffect (() =>{
    AOS.init({duration:2000});
  },[])

  //loopNum will indicate at which word i am at or to display which word
  const [loopNum, setLoopNum] = useState(0);
  

  //to (check) delete the word after it appears such that the next word can appear
  const [isDeleting, setIsDeleting] = useState(false);
  

  //to set/show the word after deletion of prev 
  const [text, setText] = useState('');
  

  //will handle te animation speed between letters/alphabet
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  
  //to set index of char in word
  const [index, setIndex] = useState(1);


  //list of words we are displaying
  const toRotate = [ "Developer", "Designer", "Creator" ];
  

  //how much time to be passed btw two words animating
  const period = 600;
  



  // it will handle the whole animatioin (typing & deleting)
  useEffect(() => {

    //make a function ticker | set interval in which the text would get updated
    let ticker = setInterval(() => { // functional component for setInterval
      
      // define a ticker tick()
      tick();

    }, delta);//interval at which we want to tick

    return () => { clearInterval(ticker) };
  }, [text]) // run everytime when text gets updated




  //the function tick()
  const tick = () => {

    //loop to iterate in all words in the "toRotate" list
    let i = loopNum % toRotate.length;

    //take ith word in full text
    let fullText = toRotate[i];
    
    //update word if deleting or not
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    //set the new updated text
    setText(updatedText);

    //set new delta while the deleting animation
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    
    //part where text i full
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      //part where text is empty
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <>

      
    <section className="banner" id="home" style={{ position: 'relative', overflow: "hidden"  }} >

    <div  style={{ position: 'fixed'}}>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />
      </div>
      
      <Container className="foreground" >
        <Row className="aligh-items-center">
          <Col className="title" xs={12} md={6} xl={7}>
            {/* <TrackVisibility> */}
           
              <div data-aos='fadeup'>
                <h1>Hi! I'm </h1> <h1 class='txt-grad'>Hardik Chawda</h1>  <h1 ><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Developer", "Designer", "Creator" ]'><span className="wrap">{text}</span></span></h1>
                  <button onClick={()=>{
                    console.log('connect');
                    const element = document.getElementById('connect');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }}}>
                      
                      Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5} data-aos='fadeup'>
             
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <AboutMe/>
      <Display/>
      <Link to="/Achievement" style={{textDecoration:'none', color:'white'}} onClick={() => window.scrollTo(0, 0)}>
                    
      <div className='Achiv d-flex justify-content-center ' >
              <h1 style={{color:'white' , text}}> Achievement </h1>
            </div>
            </Link>
      <Quoted/>
    </section>

    </>
  )
}