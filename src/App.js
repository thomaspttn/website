import './App.css';

import React from 'react';
import ProjectPortfolio from './components/ProjectPortfolio';

function App() {
  return (
    <div className="App">
        <h1>Thomas Patton</h1>
        <h1>about</h1>
            <p>
                Hello, welcome to my website!
            </p>
            <p>
                I'm a software engineer focused in computer vision and machine learning. I've done a lot of different kinds of work in this space, but right now I'm most interested in optimizing algorithms for specific hardware. 
            </p>
            <p>
                Right now I'm doing exactly this at <a href="https://www.modalai.com">ModalAI</a>. A lot of my time there has been spent offloading core computer vision tasks to discrete signal processors onboard a lightweight drone to reduce CPU and thermal load. I also work on a number of adjacent projects like our machine learning server which does on-device inference for many different onboard ML models.
            </p>
        <h1> engineering </h1>
        <ProjectPortfolio />
        <h1>prior work</h1>
            <p>
                Prior to my time at ModalAI, I worked as a machine learning engineer at Cohere Health. My biggest accomplishment there was optimizing our Optical Character Recognition pipeline to be {'>'}65% faster than its predecessor leading to a huge amount of money saved. I also built out a number of Natural Language Processing pipelines to serve clinical predictions to nurses.
            </p>
        <h1>education</h1>
            <p>
                Most recently I completed my Master's Degree in computer science at <a href="https://www.cornell.edu">Cornell University</a>, focusing in robotics and machine learning. My capstone project was with Cornell's <a href="https://emprise.cs.cornell.edu/">EmPRISE</a> lab to help a robot-assisted feeding system recognize different types of food items. If you want to read more about that, you can do so <a href="https://drive.google.com/file/d/18hmD5q3TjbiHmD6pgdBLRQZlF8_vFn0V/view">here</a>.
            </p>
            <p>
                Prior to this I got my Bachelor's Degree in computer science from Case Western Reservern University. While there I worked with the <a href="https://engineering.case.edu/research/centers/computational-imaging-personalized-diagnostics">CCIPD</a> to develop novel computer vision features to predict patient response to immunotherapy. You can read the paper I co-authored on that <a href="https://www.proquest.com/openview/5ff16b628fe92dfe4f452d25b565ea5d/1?pq-origsite=gscholar&cbl=2040222">here</a>.
            </p>
        <h1>what i do for fun</h1>
            <p>
                I'm a huge fan of F1
            </p>
        <h1>my blog</h1>
            <p>
                I write longer form content sometimes on my <a href="https://thomaspatton.substack.com">blog</a>. This is something I'd like to do more of in 2024 but it takes a lot more time/effort than I originally imagined.
            </p>
      </div>
      // <footer className="supreme-footer">
      //   <p>&copy; 2024 Thomas Patton. All Rights Reserved.</p>
      // </footer>
  );
}

export default App;
