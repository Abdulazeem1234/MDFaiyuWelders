import React from 'react';

const MediaSection = () => {
  return (
    <section className="media-section">
      <h2>Our Work in Action</h2>
      <div className="media-gallery">
        <img src={process.env.PUBLIC_URL + '/images/roof_welding.jpg'} alt="Roof Welding" className="gallery-image" />
        <img src={process.env.PUBLIC_URL + '/images/gate_making.jpg'} alt="Gate Making" className="gallery-image" />
        <img src={process.env.PUBLIC_URL + '/images/gate1_making.jpg'} alt="Gate Making" className="gallery-image" />
        <img src={process.env.PUBLIC_URL + '/images/gate_making.jpg'} alt="Gate Making" className="gallery-image" />
        {/* <video width="100%" controls>
          <source src={process.env.PUBLIC_URL + '/videos/welding_demo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </section>
  );
};

export default MediaSection;
