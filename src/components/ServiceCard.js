import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
       <img src={process.env.PUBLIC_URL + image} alt={title} className="service-image" />
      
       
       <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
