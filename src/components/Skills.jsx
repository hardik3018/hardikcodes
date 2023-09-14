// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/skillbg.png";
import colorSharp2 from "../assets/images/skillbg2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

import c from "../assets/images/skills/c.svg"
import cpp from "../assets/images/skills/cpp.svg"
import java from "../assets/images/skills/java.svg"
import python from "../assets/images/skills/python.svg"
import ht from "../assets/images/skills/html.svg"
import cs from "../assets/images/skills/css.svg"
import js from "../assets/images/skills/javascript.svg"
import nod from "../assets/images/skills/nodejs.svg"
import rct from "../assets/images/skills/react.svg"
import ps from "../assets/images/skills/photoshop.svg"
import ai from "../assets/images/skills/illustrator.svg"
import cnv from "../assets/images/skills/canva.svg"
import fg from "../assets/images/skills/figma.svg"




export const Skills = () => {


  //loopNum will indicate at which word i am at or to display which word

  //to (check) delete the word after it appears such that the next word can appear
  const [isDeleting, setIsDeleting] = useState(false);
  

  //to set/show the word after deletion of prev 
  const [text, setText] = useState('');
  

  //will handle te animation speed between letters/alphabet
  const [delta, setDelta] = useState(400 - Math.random() * 100);
  
  //to set index of char in word
  const [index, setIndex] = useState(1);


  //list of words we are displaying
  const toRotate = "Skills";
  

  //how much time to be passed btw two alphabets animating
  const period = 600;



  // it will handle the whole animatioin (typing & deleting)
  useEffect(() => {

    AOS.init({duration:1000});

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
    //take ith word in full text
    let fullText = toRotate;
    
    //update word if deleting or not
    // let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    let updatedText = fullText.substring(0, text.length + 1);
    
    //set the new updated text
    setText(updatedText);

    //set new delta while the deleting animation
    // if (isDeleting) {
    //   setDelta(prevDelta => prevDelta / 2);
    // }
    
    //part where text i full
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } 
    // else if (isDeleting && updatedText === '') {
    //   //part where text is empty
    //   setIsDeleting(false);
    //   setLoopNum(loopNum + 1);
    //   setIndex(1);
    //   setDelta(300);
    // } 
    else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
//crating object that will hold these variables for various screen sizes
//taken from react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" data-aos='fadeup'>
      <h1 ><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Skills" ]'><span className="wrap">{text}</span></span></h1>
      <br></br>
      
      <div className="container" >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" data-aos='zoom-in-up' >
              <h2>Programming Languages</h2>
              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider "
              >
                <div className="item">
                  <img src={cpp} alt="meter-1"></img>
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={c} alt="meter-2"></img>
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={java} alt="meter-3"></img>
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="meter-4"></img>
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        
      <img className="background-image-left" data-aos='fadeup'  src={colorSharp} alt="i" />
      </div>
      

      <div className="container" data-aos='zoom-in-up' data-aos-duration="500">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" data-aos='zoom-in-up' data-aos-duration="500">
              <h2>Web Development</h2>

              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={ht} alt="meter-1"></img>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={js} alt="meter-2"></img>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={cs} alt="meter-3"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={nod} alt="meter-4"></img>
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={rct} alt="meter-4"></img>
                  <h5>ReactJS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <img className="background-image-right" data-aos='fadeup'  src={colorSharp2} alt="Image" />
      </div>

      <div className="container" >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" data-aos='zoom-in-up' data-aos-duration="500">
              <h2>Designing</h2>
              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={ps} alt="meter-1"></img>
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <img src={ai} alt="meter-2"></img>
                  <h5>Illustrator</h5>
                </div>
                <div className="item">
                  <img src={fg} alt="meter-3"></img>
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={cnv} alt="meter-4"></img>
                  <h5>Canva</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
