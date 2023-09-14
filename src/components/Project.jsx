
import React from "react";
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// import { Routes, Route } from "react-router-dom";
import { Coding } from "./Projects/Coding";
import { Major } from "./Projects/Major";
import { Web } from "./Projects/Web";
import { Design } from "./Projects/Design";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Project = () => {


    
      return (
        <section id="project" className="project" data-aos='fadeup'>

        <Major/>
        <Coding/>
        <Web/>
        <Design/>

      </section>
       );
};
