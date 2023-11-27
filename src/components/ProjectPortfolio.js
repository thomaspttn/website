// ProjectPortfolio.js

import React, { useState } from 'react';
import './ProjectPortfolio.css'; // Import your CSS file for styling

const ProjectPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'path/to/image2.jpg',
    },
    // Add more items as needed
  ];

  return React.createElement('div', { className: 'container' },
    React.createElement('div', { className: 'bullet-list' },
      items.map(item =>
        React.createElement('div', {
          key: item.id,
          className: `list-item ${selectedItem === item.id ? 'active' : ''}`,
          onMouseOver: () => setSelectedItem(item.id),
          onMouseOut: () => setSelectedItem(null),
        },
          item.title
        )
      )
    ),

    React.createElement('div', { className: 'project-details' },
      selectedItem !== null && (
        React.createElement('div', null,
          React.createElement('h2', null, items[selectedItem - 1].title),
          React.createElement('p', null, items[selectedItem - 1].description),
          React.createElement('img', { src: items[selectedItem - 1].imageUrl, alt: items[selectedItem - 1].title })
        )
      )
    )
  );
};

export default ProjectPortfolio;
