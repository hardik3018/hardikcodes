
import { Contact } from "./Contact"
import { FaReact } from "react-icons/fa"
import {FaHeart} from "react-icons/fa"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const Footer = () => {

    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
    const year = new Date().getFullYear();

    useEffect (() =>{
        AOS.init({duration:1000});
      },[])


    return (

        <section >

        
        
        <div className="foot">

            <Contact/>

            <div className="row d-flex justify-content-center section">

            <div class="col-md-3">
            <h4>Page Links</h4>
            <ul>
                <li>
                    
                <Link to="/"  onClick={() => window.scrollTo(0, 0)} className="footer-link">
                        Home
                </Link>
                  
                </li>

                <li>
                <Link to="/Skills" onClick={() => window.scrollTo(0, 0)} className="footer-link" >
                        Skills</Link>
                    
                </li>
                <li>
                <Link to="/Experience" onClick={() => window.scrollTo(0, 0)} className="footer-link">
                     Experience & Education</Link>
                     
                </li>
                <li>
                <Link to="/Project" onClick={() => window.scrollTo(0, 0)} className="footer-link">
                     Projects</Link>
                </li>
            </ul>
            </div>

            <div class="col-md-3">

            <h4>Have a Question ?</h4>
            Connect with me on provided Social Media Handles or mail to:<br></br>
            <a href='mailto:hardik.mca21.du@gmail.com' target="_blank">hardik.mca21.du@gmail.com</a>

            </div>

            </div>

                     <br></br><br></br>

            <button className="vvd" onClick={scrollToTop}>Back to Top</button>
                <div className="flex">
                <h5>Made with <FaHeart color="#e10000"/> using ReactJS <FaReact color="#0081ac"/> </h5>
                
                </div>
                <br></br>
                <p>Developed By Hardik Chawda | Copyright © {year}</p>

            </div>
        </section>


    );
};
