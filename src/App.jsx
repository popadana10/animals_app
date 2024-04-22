import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Crad';
import {animals} from './animalsList';

function App() {

  return (
    <>
    <Header/>
      <main>
        {animals.map((animal) => (
        <Card key={animal.name} {...animal}/>
        ))};
      </main>
    <Footer/>
    </>
  );
}

export default App;
