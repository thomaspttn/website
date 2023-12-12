import './App.css';

import React from 'react';
import ImageGrid from './components/ImageGrid';

const projects = [
  { id: 1, imageUrl: 'featuretracker.png', title: 'Visual Feature Tracker' },
  { id: 2, imageUrl: 'mcv.png', title: 'Hardware-Optimized Computer Vision Library' },
  { id: 3, imageUrl: 'screenshot.png', title: 'Assistive-Feeding Robot' },
  { id: 4, imageUrl: 'ocr.jpg', title: 'OCR Pipeline' },
  { id: 5, imageUrl: 'clinical-nlp.png', title: 'Clinical NLP Models' },
  { id: 6, imageUrl: 'iss.jpg', title: 'NASA Spaceflight Simulator' },
  { id: 7, imageUrl: 'lungs.png', title: 'Lung Morphology Predictor' },
  { id: 8, imageUrl: 'monet.png', title: 'Monet DCGAN' },
];

function App() {
  return (
    <div className="container">
        <div className="main-content">
            <h1>Thomas Patton</h1>
            <h2>ABOUT</h2>
                <p>
                    My name is Thomas, I'm currently a senior computer vision engineer at <a href="https://www.modalai.com">ModalAI</a>. Right now I'm really focused on work that involves using clever hardawre optimizations to speed up traditional vision tasks but am more broadly interested in ML, robotics, and embedded programming. I did my M.Eng and B.S. from Cornell University and Case Western Reserve University respectively.
                </p>
                <p>
                    Feel free to check out a (non-comprehensive) list of some cool stuff I've built in the Engineering section below. If anything strikes a chord, don't hesitate to reach out using any of the links at the bottom of the page.
                </p>
            <h2>ENGINEERING </h2>
            <ImageGrid projects={projects} />
            <h2>CONTACT</h2>
                <p>
                    Twitter
                    LinkedIn
                    Resume
                    Email
                    Github
                </p>
        </div>
      </div>
  );
}

export default App;
