import React from 'react';
import { Cars } from './components/Cars/Cars';
import { About } from './components/About/About';
import { Benefits } from './components/Benefits/Benefits';
import { Header } from './components/Header/Header';
import { Amazed } from './components/Amazed/Amazed';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Benefits />
      <Cars />
      <Amazed />
      <Contact />
      <Footer />
    </>
  );
}

