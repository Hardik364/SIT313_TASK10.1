import React from 'react';
import './CoverImage.css'; // Import the CSS file

function CoverImage() {
  return (
    <div className="image-container">
      <img src={require("./Me.png")} alt="Your Image Alt Text" />

    </div>
  );
}

export default CoverImage;
