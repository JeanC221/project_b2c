import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import Timeline from './components/TimeLine/TimeLine';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
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