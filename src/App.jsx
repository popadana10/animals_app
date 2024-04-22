import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {animals, birds} from './animalsList';

function App() {

  const removeCard = (animal) => {
    console.log(animal, 'removeCard was triggered');
  }

  const addLikes = (animal) => {
    console.log(animal, 'addLikes was triggered');
  }

  const removeLikes = (animal) => {
    console.log(animal, 'removeLikes was triggered');
  }

  return (
    <>
    <Header/>
      <main>
        {animals.map((animal) => (
        <Card 
        key={animal.name} 
        {...animal} 
        removeLikes={()=>removeLikes(animal.name)} 
        addLikes = {addLikes.bind(this, animal.name)} 
        removeCard={()=>removeCard(animal.name)}
        />
        ))};
      </main>
    <Footer/>
    </>
  );
}

export default App;
