// ImageGrid.js
import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ projects }) => {
  return (
    <div className="image-grid">
      {projects.map((project) => (
        <div key={project.id} className="grid-item">
          <img src={`images/${project.imageUrl}`} alt={`Project ${project.id}`} />
          <div className="project-title">{project.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
