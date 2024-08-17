import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import Timeline from './components/Timeline';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectOverview />
      <Timeline />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;