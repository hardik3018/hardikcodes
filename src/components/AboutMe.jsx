import React from 'react';
import {  Row, Col } from "react-bootstrap";

import { useState, useEffect } from "react";

// import './AboutMe.css'; // Import your CSS styles if needed

const AboutMe = () => {

//loopNum will indicate at which word i am at or to display which word
  const [loopNum, setLoopNum] = useState(0);
  

  //to (check) delete the word after it appears such that the next word can appear
  const [isDeleting, setIsDeleting] = useState(false);
  

  //to set/show the word after deletion of prev 
  const [text, setText] = useState('');
  

  //will handle te animation speed between letters/alphabet
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  
  //to set index of char in word
  const [index, setIndex] = useState(1);


  //list of words we are displaying
  const toRotate = [ "Developer", "Designer", "Creator" ];
  

  //how much time to be passed btw two words animating
  const period = 900;
  



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
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  return (
    <section className="about-me">

        
        <Row className="aligh-items-center" >
          <Col  xs={12} md={6} xl={7} data-aos='zoom-in-right'>
            {/* <div class="earth">
                <div></div>
            </div> */}

            <div id="earth"></div>
        
          </Col>
          <Col xs={12} md={6} xl={5} data-aos='fadeup'>
             
            <div className="about-me-content aligh-items-center">
            <h2 style={{color:'#ffe8a2'}}>About Me</h2><br></br>
            <p>
            Hi there! I'm <strong>Hardik Chawda</strong>, a <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Developer", "Designer", "Creator" ]'><strong >{text}</strong></span>
            <br></br>based in <strong>Delhi, India.</strong>
            </p>

            <table>
                <tr>
                    <td><strong>Name:</strong></td>
                    <td>Hardik Chawda</td>
                </tr>
                <tr>
                    <td><strong>E-mail:</strong></td>
                    <td> <a href='mailto:hardik.mca21.du@gmail.com' target="_blank">hardik.mca21.du@gmail.com</a> </td>
                </tr>
                <tr>
                    <td><strong>LinkedIn:</strong></td>
                    <td><a href='https://www.linkedin.com/in/hardik-chawda-9867a5173/' target="_blank">linkedin/Hardik-Chawda</a></td>
                </tr>
                <tr>
                    <td><strong>City:</strong></td>
                    <td>Delhi</td>
                </tr>
                <tr>
                    <td><strong>Country:</strong></td>
                    <td>India</td>
                </tr>
            </table>
            <br></br>

          
            <p>Feel free to <strong><a href='#connect'>Connect</a></strong> with Me to discuss any Related Topics/Opportunities.</p>
            </div>
       </Col>

       </Row>

     
       
     
    </section>
  );
};

export default AboutMe;
