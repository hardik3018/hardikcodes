
import React from "react";
import "./project.css";
import Gh from "../../assets/images/github.svg";
import {data} from "./data/codedata.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Coding = () => {
    return(
        <section id="coding">

        <h1 className="large">Coding</h1>
        <div className="coding ">

        {data.map((dt, index) => (
                <div className="coding-box"  key={dt.id} data-aos='zoom-in-up' data-aos-duration="500" >
                    <div className="image"style={{
                        backgroundImage: 'url(' + dt.imgUrl + ')'
                    }}>
                        <div>
                       
                        <a className="gh" href = {dt.link} target="_blank">
                            <img src={Gh}></img>
                        </a>
                        </div>

                        
                        </div>
                        <div className="details">
                        <h1>{dt.title}</h1>
                        <p>{dt.detail}</p>
                        </div>
                        
                </div>
            ))}
    
        </div>

        </section>
    );
};