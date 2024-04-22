import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {animals} from './animalsList';

function App() {
  const [animalsData, setAnimalsData]=useState(animals)

  const removeCard = (animal) => {
  const updatedArray = animalsData.filter(item=>item.name !== animal);
  setAnimalsData(updatedArray);
  }

  const addLikes = (animal) => {
    console.log(animal);
  }

  const removeLikes = (animal) => {
    console.log(animal);
  }

  return (
    <>
    <Header/>
      <main>
        {animalsData.map((animal) => (
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
