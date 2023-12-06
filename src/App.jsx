import React from 'react';
import './App.css';
import Header from './Header';
import SectionDos from './SectionDos';
import SectionDescription from './SectionDescription';
import SectionComic from './SectionComic';
import SectionGallery from './SectionGallery';
import SectionTeam from './SectionTeam';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <SectionDos/>
      <SectionDescription background={'white'} color={'black'}/>
      <SectionComic />
      <SectionGallery />
      <SectionTeam />
      <Footer />
    </>
  );
}

export default App;
