import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const services = [
    { title: 'Roof Welding', description: 'Professional roof welding services.', image: '/images/roof_welding.jpg' },
    { title: 'Gate Making', description: 'Custom gates tailored to your needs.', image: '/images/gate_making.jpg' },
    // Add more services here
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
