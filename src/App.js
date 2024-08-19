import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesList from './components/ServicesList';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';
import MediaSection from './components/MediaSection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ServicesList />
        <About />
        <MediaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
