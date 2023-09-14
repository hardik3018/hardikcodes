import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ig from "../assets/images/instagram.svg"
import Fb from "../assets/images/facebook.svg"
import Li from "../assets/images/linked in.svg"
import Gh from "../assets/images/github.svg"
import Gm from "../assets/images/gmail.svg"
import Bh from "../assets/images/behance.svg"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect" >

<div className="f">
            <h1>CONTACT ME</h1>
        <div className="footer">
            
            
            <div className="social" >

                <a className="gm"  href="mailto:hardik.mca21.du@gmail.com">
                    <img src={Gm}></img>
                </a>
                <a className="li"  href="https://www.linkedin.com/in/hardik-chawda-9867a5173/" target="_blank" >
                    <img src={Li}></img>
                </a>
                <a className="gh"  href = "https://github.com/hardik3018" target="_blank">
                    <img src={Gh}></img>
                </a>
                <a className="bh"  href = "https://www.behance.net/hardikchawda1" target="_blank">
                    <img src={Bh}></img>
                </a>
                <a className="ig"  href="https://www.instagram.com/hardik.181/" target="_blank" >
                    <img src={Ig}></img>
                </a>
                <a className="fb"  href="https://www.facebook.com/hardik.chawda.940" target="_blank" >
                    <img src={Fb}></img>
                </a >
                


            </div>           

        </div>
       

      </div>
    </section>
  )
}