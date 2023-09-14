
import React from "react";
import "./project.css"
import Bh from "../../assets/images/behance.svg";
import {data} from "./data/images.js"

export const Design = () => { 

    return(
    
    <section id="design">

    <h1 className="large">Design</h1>
    <div className="design ">

        

        {data.map((dt, index) => (
            <div className="design-box" key={dt.id} data-aos='zoom-in-up' data-aos-duration="500" >
                    
                    <div className="image" style={{
                        backgroundImage: 'url("' + dt.imgUrl + '")'
                    }}>
                    </div>
                    <div className="details">
                    <h1>{dt.title}</h1>
                    </div>            
            </div>

        ))}

        <div className="design-box p-4" data-aos='zoom-in-up' data-aos-duration="500">
            <h3>View More On </h3>
            <a href = "https://www.behance.net/hardikchawda1" target="_blank" style={{
                 color:'white', transform:'scale(1)'
            }}><h3>Behance</h3></a>
        </div>
    </div>
    </section>
    );
};