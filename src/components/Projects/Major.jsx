
import React from "react";
import Gh from "../../assets/images/github.svg";
import li from "../../assets/images/elink.png";
import {data} from "./data/Majordata.js";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Major = () => {
    return(
      <section id="major" >
        <h1 className="large">Web Development</h1>
        {data.map((dt, index) => (
                <div className="major " key={dt.id} data-aos='zoom-in-up' data-aos-duration="500" >
                    <div className="image"style={{
                        backgroundImage: 'url(' + dt.imgUrl + ')'
                    }}>
                        <div>
                        <a className="li" href = {dt.link2} target="_blank">
                            <img src={li}></img>
                        </a>
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

        </section>
        
    );
};