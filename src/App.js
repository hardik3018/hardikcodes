import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { NavBar } from "./components/navBar";
import "./bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/banner";
import { Skills } from "./components/Skills";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/footer";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Error } from "./components/Error";
import { Achievement } from "./components/Achievement";

function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Simulate loading time (replace this with actual data fetching if needed)
  useEffect(() => {
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 2000); // Change the timeout to the actual time it takes to load your content
  }, []);

  return (
    <div className="App">
      {isContentLoaded ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Banner />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Experience" element={<Experience />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/Achievement" element={<Achievement />}></Route>
            <Route path="/404" element={<Error />}></Route>
            <Route path="*" element={<Navigate to="/404" />}></Route>
          </Routes>

          <Footer />
        </>
      ) : (
        <Loading Loading={isContentLoaded} />
      )}
    </div>
  );
}

export default App;
