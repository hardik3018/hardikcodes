
import { useState, useEffect } from "react"; // to animate ( delete and type ) --> what's useState & useEffect
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons'; // importing arrow icon
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {

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
  

  //how much time to be passed btw two alphabets animating
  const period = 300;
  



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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility> */}
           
              <div >
                <h1>Hi! I'm Hardik <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Developer", "Designer", "Creator" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
             
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}