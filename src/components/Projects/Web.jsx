
import React from "react";
import "./project.css";
import {data} from "./data/webdata";
import Gh from "../../assets/images/github.svg";

import li from "../../assets/images/elink.png";

export const Web = () => {
    return(
       <section id="web">

        <h1 className="large">More Web</h1>
        <div className="web">

            {data.map((dt, index) => (
                <div className="web-box" key={dt.id} data-aos='fade-right' data-aos-duration="500"  >
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
            
        </div>

        </section>
    );
};